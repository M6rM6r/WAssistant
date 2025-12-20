# Wassistant - Advanced WhatsApp Utility

Wassistant is a professionally engineered Flutter application designed to enhance productivity for WhatsApp users. It provides a suite of tools for link generation, QR codes, and contact management, built with a focus on privacy, security, and data sovereignty.

## 🚀 Key Features

### 🛠 Core Utilities
*   **Direct Chat**: Open WhatsApp chats without saving the number to contacts.
*   **Link Generator**: Create shareable `wa.me` links with pre-filled messages.
*   **QR Code Generator**: Generate high-res QR codes for chats and vCards.
*   **vCard Generator**: Create contact QR codes for instant scanning and saving.

### 🧠 Intelligent Features
*   **Smart Paste**: Automatically detects phone numbers in the clipboard on startup/resume and offers to fill them.
*   **Quick Templates**: Save, manage, and reuse frequently sent messages (e.g., Location, Pricing).
*   **History & Restoration**: Auto-saves your generated links/QRs. Restore previous sessions with one tap.

### 🛡 Security & Data
*   **Biometric Lock**: Secure the app using FaceID or Fingerprint (via `local_auth`).
*   **Data Sovereignty**: Full Backup & Restore system. Export your data to JSON and own it completely.
*   **Privacy-First**: No data is sent to our servers. Everything processes locally.

### 📊 Analytics
*   **Usage Dashboard**: Visual analytics (Pie Charts) showing your usage patterns (Links vs. QRs).

## 🏗 Architecture & Engineering

The project follows a **Clean Architecture** approach with **Strict Separation of Concerns**:

### Directory Structure
```
lib/
├── l10n/              # Localization (ARB files)
├── models/            # Data Models (HistoryItem, TemplateItem)
├── pages/             # UI Screens (Home, Analytics, History)
├── providers/         # State Management (ChangeNotifier)
├── services/          # Business Logic (Backup, Security)
├── utils/             # Constants, Logging, Error Handling
└── widgets/           # Reusable UI Components
```

### Technical Stack
*   **State Management**: `Provider` (MultiProvider setup with ProxyProvider).
*   **Localization**: `flutter_localizations` & `intl` (English/Spanish support).
*   **Persistence**: `shared_preferences` & JSON File I/O.
*   **Charts**: `fl_chart`.
*   **Logging**: `logger` with custom `ErrorHandler`.

## 🛠 Setup & Installation

1.  **Prerequisites**: Flutter SDK `^3.7.0`.
2.  **Install Dependencies**:
    ```bash
    flutter pub get
    ```
3.  **Run the App**:
    *   **Mobile**: `flutter run`
    *   **Web**: `flutter run -d chrome`

## 🧪 Testing

The project includes unit tests for core validation logic.

```bash
flutter test
```

## Tooling (Developer-focused)

- Use `Makefile` tasks for common commands: `make deps`, `make analyze`, `make test`.
- Pre-commit hooks configured: Python formatting via `pre-commit` and JS/CSS via `husky`.
- Dependabot configured to keep dependencies up-to-date.
- Run `npm ci` and `npm run lint` to check web assets linting.

## 📄 License

This project is licensed under the MIT License.
