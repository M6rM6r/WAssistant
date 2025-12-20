#!/usr/bin/env python3
"""
Retention Metrics Monitor
Fetches and analyzes user retention KPIs from Firebase
OCPD: Systematic, metric-driven user engagement tracking
"""

import json
import os
import sys
from datetime import datetime, timedelta

import firebase_admin
import pandas as pd
from firebase_admin import credentials, firestore


def init_firebase() -> firestore.Client:
    """Initialize Firebase Admin SDK"""
    config_str = os.getenv("FIREBASE_CONFIG")
    if not config_str:
        print("❌ FIREBASE_CONFIG not set")
        sys.exit(1)

    config = json.loads(config_str)
    cred = credentials.Certificate(config)
    firebase_admin.initialize_app(cred)
    return firestore.client()


def get_retention_metrics(db: firestore.Client) -> dict:
    """Calculate retention KPIs"""
    users = db.collection("users").stream()
    user_data = []

    for doc in users:
        data = doc.to_dict()
        user_data.append(
            {
                "id": doc.id,
                "created_at": data.get("created_at"),
                "last_active": data.get("last_active"),
                "session_count": data.get("session_count", 0),
            }
        )

    if not user_data:
        return {"error": "No user data"}

    df = pd.DataFrame(user_data)
    now = datetime.utcnow()

    # Convert timestamps
    df["created_at"] = pd.to_datetime(df["created_at"], errors="coerce")
    df["last_active"] = pd.to_datetime(df["last_active"], errors="coerce")

    # Cohort analysis
    cohorts = {}
    for _, user in df.iterrows():
        if pd.isna(user["created_at"]):
            continue
        cohort_key = user["created_at"].strftime("%Y-W%U")
        if cohort_key not in cohorts:
            cohorts[cohort_key] = {"total": 0, "active": 0}
        cohorts[cohort_key]["total"] += 1

        days_since_active = (
            (now - user["last_active"]).days if pd.notna(user["last_active"]) else 999
        )
        if days_since_active < 30:
            cohorts[cohort_key]["active"] += 1

    # Calculate metrics
    retention_rates = {}
    for week, data in cohorts.items():
        if data["total"] > 0:
            retention_rates[week] = (data["active"] / data["total"]) * 100

    # KPI thresholds
    avg_retention = sum(retention_rates.values()) / len(retention_rates) if retention_rates else 0
    dau_to_mau = (
        (
            len(df[df["last_active"] > (now - timedelta(days=1))])
            / len(df[df["last_active"] > (now - timedelta(days=30))])
        )
        if len(df) > 0
        else 0
    )

    churn_risk = (
        sum(
            1
            for _, user in df.iterrows()
            if pd.notna(user["last_active"]) and (now - user["last_active"]).days > 14
        )
        / len(df)
        * 100
        if len(df) > 0
        else 0
    )

    return {
        "timestamp": now.isoformat(),
        "total_users": len(df),
        "avg_7day_retention": float(avg_retention),
        "dau_mau_ratio": float(dau_to_mau),
        "high_churn_risk_users": int(churn_risk),
        "cohorts": retention_rates,
        "alerts": _generate_alerts(avg_retention, dau_to_mau, churn_risk),
    }


def _generate_alerts(retention: float, dau_mau: float, churn: float) -> list[str]:
    """Generate alerts for KPI deviations"""
    alerts = []

    if retention < 40:
        alerts.append(f"⚠️ ALERT: 7-day retention at {retention:.1f}% (target: 60%)")
    if dau_mau < 0.25:
        alerts.append(f"⚠️ ALERT: DAU/MAU ratio at {dau_mau:.1%} (target: 35%)")
    if churn > 30:
        alerts.append(f"⚠️ ALERT: {churn:.0f}% users at high churn risk")

    return alerts


def main():
    """Main execution"""
    print("📊 Retention Metrics Monitor")
    print("=" * 50)

    try:
        db = init_firebase()
        metrics = get_retention_metrics(db)

        print(f"\n📈 KPI Report ({metrics['timestamp']})")
        print(f"   Total Users: {metrics['total_users']}")
        print(f"   7-day Retention: {metrics['avg_7day_retention']:.1f}%")
        print(f"   DAU/MAU Ratio: {metrics['dau_mau_ratio']:.1%}")
        print(f"   High Churn Risk: {metrics['high_churn_risk_users']}%")

        if metrics["alerts"]:
            print("\n⚠️ Alerts:")
            for alert in metrics["alerts"]:
                print(f"   {alert}")
            sys.exit(1)
        else:
            print("\n✅ All KPIs within targets")
            sys.exit(0)

    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
