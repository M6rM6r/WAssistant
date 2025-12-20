// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for English (`en`).
class AppLocalizationsEn extends AppLocalizations {
  AppLocalizationsEn([String locale = 'en']) : super(locale);

  @override
  String get appTitle => 'WAssistant';

  @override
  String get history => 'History';

  @override
  String get analytics => 'Analytics';

  @override
  String get backupData => 'Backup Data';

  @override
  String get restoreData => 'Restore Data';

  @override
  String get settings => 'Settings';

  @override
  String get biometrics => 'Biometric Lock';

  @override
  String get privacyPolicy => 'Privacy Policy';

  @override
  String get shareApp => 'Share App';

  @override
  String get directChat => 'Direct Chat';

  @override
  String get vCardGen => 'vCard Gen';

  @override
  String get generateLink => 'Generate Link';

  @override
  String get generateQr => 'Generate QR';

  @override
  String get openChat => 'Open Chat';

  @override
  String get phoneLabel => 'Phone Number';

  @override
  String get messageLabel => 'Message (Optional)';

  @override
  String get templateTitle => 'Quick Templates';

  @override
  String get addTemplate => 'New Template';

  @override
  String get save => 'Save';

  @override
  String get cancel => 'Cancel';

  @override
  String get delete => 'Delete';

  @override
  String get copied => 'Copied to clipboard';

  @override
  String get securityTitle => 'Security';

  @override
  String get biometricReason => 'Please authenticate to access WAssistant';

  @override
  String get jobTitleLabel => 'Job Title';

  @override
  String get websiteLabel => 'Website (Optional)';

  @override
  String get errorEmptyNumber => 'Please enter a phone number.';

  @override
  String get errorNoDigits => 'No valid digits found in the number.';

  @override
  String get errorInvalidFormat =>
      'Invalid format. \"+\" can only be at the start.';

  @override
  String get errorInvalidLength =>
      'Invalid phone number. It should be between 7 and 15 digits.';

  @override
  String get errorLaunchFailed => 'Could not launch WhatsApp.';

  @override
  String get errorInvalidNumber => 'Invalid number format.';

  @override
  String get successChatOpened => 'Success: Opening chat...';

  @override
  String get generatedLinkPrefix => 'Generated Link:\n';

  @override
  String get qrGeneratedPrefix => 'QR Code generated for:\n';

  @override
  String get vCardMissingName => 'First name is required for a vCard.';

  @override
  String vCardGenerated(Object name) {
    return 'vCard QR code generated for $name.';
  }

  @override
  String get outputPlaceholder => 'Your generated output will appear here.';

  @override
  String get getLink => 'Get Link';

  @override
  String get templateTitleHint => 'Title (e.g., Address)';

  @override
  String get templateContentHint => 'Message Content';

  @override
  String get noTemplates => 'No templates yet. Add one!';

  @override
  String get close => 'Close';

  @override
  String get searchCountry => 'Search Country';

  @override
  String get phoneNumberHint => '551234567';

  @override
  String get firstNameLabel => 'First Name *';

  @override
  String get lastNameLabel => 'Last Name';

  @override
  String get companyLabel => 'Company';

  @override
  String get emailLabel => 'Email';

  @override
  String get createContactQr => 'Create a Contact QR Code';

  @override
  String get scanToOpen => 'Scan to Open';

  @override
  String get linkReady => 'Link Ready';

  @override
  String get targetNumber => 'Target Number';

  @override
  String get savingToGallery => 'Saving to gallery...';

  @override
  String get imageSaved => 'QR Code saved to Gallery!';

  @override
  String get imageSaveFailed => 'Failed to save image.';

  @override
  String foundNumberClipboard(Object number) {
    return 'Found number in clipboard: $number';
  }

  @override
  String get use => 'Use';

  @override
  String get clearHistory => 'Clear History';

  @override
  String get clearHistoryConfirmation =>
      'Are you sure you want to delete all history?';

  @override
  String get clear => 'Clear';

  @override
  String get noHistory => 'No history yet.';

  @override
  String get clearAll => 'Clear All';

  @override
  String get analyticsTitle => 'Usage Analytics';

  @override
  String get noData => 'Not enough data to analyze.';

  @override
  String get activityDistribution => 'Activity Distribution';

  @override
  String get totalActions => 'Total Actions';

  @override
  String get directLinks => 'Direct Links';

  @override
  String get qrCodes => 'QR Codes';

  @override
  String get vCards => 'vCards';
}
