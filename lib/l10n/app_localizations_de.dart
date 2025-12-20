// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for German (`de`).
class AppLocalizationsDe extends AppLocalizations {
  AppLocalizationsDe([String locale = 'de']) : super(locale);

  @override
  String get appTitle => 'WAssistant';

  @override
  String get history => 'Verlauf';

  @override
  String get analytics => 'Analytik';

  @override
  String get settings => 'Einstellungen';

  @override
  String get biometrics => 'Biometrische Sperre';

  @override
  String get privacyPolicy => 'Datenschutzerklärung';

  @override
  String get shareApp => 'App teilen';

  @override
  String get directChat => 'Direkt-Chat';

  @override
  String get vCardGen => 'vCard-Generator';

  @override
  String get generateLink => 'Link generieren';

  @override
  String get generateQr => 'QR generieren';

  @override
  String get openChat => 'Chat öffnen';

  @override
  String get phoneLabel => 'Telefonnummer';

  @override
  String get messageLabel => 'Nachricht (optional)';

  @override
  String get templateTitle => 'Schnellvorlagen';

  @override
  String get addTemplate => 'Neue Vorlage';

  @override
  String get save => 'Speichern';

  @override
  String get cancel => 'Abbrechen';

  @override
  String get delete => 'Löschen';

  @override
  String get copied => 'In die Zwischenablage kopiert';

  @override
  String get copyLink => 'Link kopieren';

  @override
  String get shareLink => 'Link teilen';

  @override
  String get saveToGallery => 'In Galerie speichern';

  @override
  String get securityTitle => 'Sicherheit';

  @override
  String get biometricReason =>
      'Bitte authentifizieren Sie sich, um auf WAssistant zuzugreifen';

  @override
  String get jobTitleLabel => 'Berufsbezeichnung';

  @override
  String get websiteLabel => 'Webseite (optional)';

  @override
  String get errorEmptyNumber => 'Bitte geben Sie eine Telefonnummer ein.';

  @override
  String get errorNoDigits => 'Keine gültigen Ziffern gefunden.';

  @override
  String get errorInvalidFormat =>
      'Ungültiges Format. \'+\' darf nur am Anfang stehen.';

  @override
  String get errorInvalidLength =>
      'Ungültige Telefonnummer. Sie muss zwischen 7 und 15 Ziffern lang sein.';

  @override
  String get errorLaunchFailed => 'WhatsApp konnte nicht gestartet werden.';

  @override
  String get errorInvalidNumber => 'Ungültiges Nummerformat.';

  @override
  String get successChatOpened => 'Erfolg: Chat wird geöffnet...';

  @override
  String get generatedLinkPrefix => 'Generierter Link:\n';

  @override
  String get qrGeneratedPrefix => 'QR-Code generiert für:\n';

  @override
  String get vCardMissingName => 'Vorname ist für eine vCard erforderlich.';

  @override
  String vCardGenerated(Object name) {
    return 'vCard QR-Code generiert für $name.';
  }

  @override
  String get outputPlaceholder => 'Ihr Ergebnis wird hier angezeigt.';

  @override
  String get getLink => 'Link abrufen';

  @override
  String get templateTitleHint => 'Titel (z. B. Adresse)';

  @override
  String get templateContentHint => 'Nachrichteninhalt';

  @override
  String get noTemplates => 'Noch keine Vorlagen. Fügen Sie eine hinzu!';

  @override
  String get close => 'Schließen';

  @override
  String get searchCountry => 'Land suchen';

  @override
  String get phoneNumberHint => '551234567';

  @override
  String get firstNameLabel => 'Vorname *';

  @override
  String get lastNameLabel => 'Nachname';

  @override
  String get companyLabel => 'Firma';

  @override
  String get emailLabel => 'E-Mail';

  @override
  String get createContactQr => 'Kontakt-QR-Code erstellen';

  @override
  String get scanToOpen => 'Scannen zum Öffnen';

  @override
  String get linkReady => 'Link bereit';

  @override
  String get targetNumber => 'Zielnummer';

  @override
  String get savingToGallery => 'In Galerie speichern...';

  @override
  String get imageSaved => 'QR-Code in Galerie gespeichert!';

  @override
  String get imageSaveFailed => 'Bild konnte nicht gespeichert werden.';

  @override
  String get imageSaveUnavailable =>
      'In Galerie speichern ist in dieser Version nicht verfügbar.';

  @override
  String foundNumberClipboard(Object number) {
    return 'Nummer in der Zwischenablage gefunden: $number';
  }

  @override
  String get use => 'Verwenden';

  @override
  String get clearHistory => 'Verlauf löschen';

  @override
  String get clearHistoryConfirmation =>
      'Sind Sie sicher, dass Sie den gesamten Verlauf löschen möchten?';

  @override
  String get clear => 'Löschen';

  @override
  String get noHistory => 'Noch kein Verlauf vorhanden.';

  @override
  String get clearAll => 'Alles löschen';

  @override
  String get analyticsTitle => 'Nutzungsanalyse';

  @override
  String get noData => 'Nicht genügend Daten zur Analyse.';

  @override
  String get activityDistribution => 'Aktivitätsverteilung';

  @override
  String get totalActions => 'Gesamtaktionen';

  @override
  String get directLinks => 'Direktlinks';

  @override
  String get qrCodes => 'QR-Codes';

  @override
  String get vCards => 'vCards';
}
