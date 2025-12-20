import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart' as intl;

import 'app_localizations_en.dart';
import 'app_localizations_es.dart';

// ignore_for_file: type=lint

/// Callers can lookup localized strings with an instance of AppLocalizations
/// returned by `AppLocalizations.of(context)`.
///
/// Applications need to include `AppLocalizations.delegate()` in their app's
/// `localizationDelegates` list, and the locales they support in the app's
/// `supportedLocales` list. For example:
///
/// ```dart
/// import 'l10n/app_localizations.dart';
///
/// return MaterialApp(
///   localizationsDelegates: AppLocalizations.localizationsDelegates,
///   supportedLocales: AppLocalizations.supportedLocales,
///   home: MyApplicationHome(),
/// );
/// ```
///
/// ## Update pubspec.yaml
///
/// Please make sure to update your pubspec.yaml to include the following
/// packages:
///
/// ```yaml
/// dependencies:
///   # Internationalization support.
///   flutter_localizations:
///     sdk: flutter
///   intl: any # Use the pinned version from flutter_localizations
///
///   # Rest of dependencies
/// ```
///
/// ## iOS Applications
///
/// iOS applications define key application metadata, including supported
/// locales, in an Info.plist file that is built into the application bundle.
/// To configure the locales supported by your app, you’ll need to edit this
/// file.
///
/// First, open your project’s ios/Runner.xcworkspace Xcode workspace file.
/// Then, in the Project Navigator, open the Info.plist file under the Runner
/// project’s Runner folder.
///
/// Next, select the Information Property List item, select Add Item from the
/// Editor menu, then select Localizations from the pop-up menu.
///
/// Select and expand the newly-created Localizations item then, for each
/// locale your application supports, add a new item and select the locale
/// you wish to add from the pop-up menu in the Value field. This list should
/// be consistent with the languages listed in the AppLocalizations.supportedLocales
/// property.
abstract class AppLocalizations {
  AppLocalizations(String locale)
    : localeName = intl.Intl.canonicalizedLocale(locale.toString());

  final String localeName;

  static AppLocalizations? of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations);
  }

  static const LocalizationsDelegate<AppLocalizations> delegate =
      _AppLocalizationsDelegate();

  /// A list of this localizations delegate along with the default localizations
  /// delegates.
  ///
  /// Returns a list of localizations delegates containing this delegate along with
  /// GlobalMaterialLocalizations.delegate, GlobalCupertinoLocalizations.delegate,
  /// and GlobalWidgetsLocalizations.delegate.
  ///
  /// Additional delegates can be added by appending to this list in
  /// MaterialApp. This list does not have to be used at all if a custom list
  /// of delegates is preferred or required.
  static const List<LocalizationsDelegate<dynamic>> localizationsDelegates =
      <LocalizationsDelegate<dynamic>>[
        delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ];

  /// A list of this localizations delegate's supported locales.
  static const List<Locale> supportedLocales = <Locale>[
    Locale('en'),
    Locale('es'),
  ];

  /// No description provided for @appTitle.
  ///
  /// In en, this message translates to:
  /// **'WAssistant'**
  String get appTitle;

  /// No description provided for @history.
  ///
  /// In en, this message translates to:
  /// **'History'**
  String get history;

  /// No description provided for @analytics.
  ///
  /// In en, this message translates to:
  /// **'Analytics'**
  String get analytics;

  /// No description provided for @backupData.
  ///
  /// In en, this message translates to:
  /// **'Backup Data'**
  String get backupData;

  /// No description provided for @restoreData.
  ///
  /// In en, this message translates to:
  /// **'Restore Data'**
  String get restoreData;

  /// No description provided for @settings.
  ///
  /// In en, this message translates to:
  /// **'Settings'**
  String get settings;

  /// No description provided for @biometrics.
  ///
  /// In en, this message translates to:
  /// **'Biometric Lock'**
  String get biometrics;

  /// No description provided for @privacyPolicy.
  ///
  /// In en, this message translates to:
  /// **'Privacy Policy'**
  String get privacyPolicy;

  /// No description provided for @shareApp.
  ///
  /// In en, this message translates to:
  /// **'Share App'**
  String get shareApp;

  /// No description provided for @directChat.
  ///
  /// In en, this message translates to:
  /// **'Direct Chat'**
  String get directChat;

  /// No description provided for @vCardGen.
  ///
  /// In en, this message translates to:
  /// **'vCard Gen'**
  String get vCardGen;

  /// No description provided for @generateLink.
  ///
  /// In en, this message translates to:
  /// **'Generate Link'**
  String get generateLink;

  /// No description provided for @generateQr.
  ///
  /// In en, this message translates to:
  /// **'Generate QR'**
  String get generateQr;

  /// No description provided for @openChat.
  ///
  /// In en, this message translates to:
  /// **'Open Chat'**
  String get openChat;

  /// No description provided for @phoneLabel.
  ///
  /// In en, this message translates to:
  /// **'Phone Number'**
  String get phoneLabel;

  /// No description provided for @messageLabel.
  ///
  /// In en, this message translates to:
  /// **'Message (Optional)'**
  String get messageLabel;

  /// No description provided for @templateTitle.
  ///
  /// In en, this message translates to:
  /// **'Quick Templates'**
  String get templateTitle;

  /// No description provided for @addTemplate.
  ///
  /// In en, this message translates to:
  /// **'New Template'**
  String get addTemplate;

  /// No description provided for @save.
  ///
  /// In en, this message translates to:
  /// **'Save'**
  String get save;

  /// No description provided for @cancel.
  ///
  /// In en, this message translates to:
  /// **'Cancel'**
  String get cancel;

  /// No description provided for @delete.
  ///
  /// In en, this message translates to:
  /// **'Delete'**
  String get delete;

  /// No description provided for @copied.
  ///
  /// In en, this message translates to:
  /// **'Copied to clipboard'**
  String get copied;

  /// No description provided for @securityTitle.
  ///
  /// In en, this message translates to:
  /// **'Security'**
  String get securityTitle;

  /// No description provided for @biometricReason.
  ///
  /// In en, this message translates to:
  /// **'Please authenticate to access WAssistant'**
  String get biometricReason;

  /// No description provided for @jobTitleLabel.
  ///
  /// In en, this message translates to:
  /// **'Job Title'**
  String get jobTitleLabel;

  /// No description provided for @websiteLabel.
  ///
  /// In en, this message translates to:
  /// **'Website (Optional)'**
  String get websiteLabel;

  /// No description provided for @errorEmptyNumber.
  ///
  /// In en, this message translates to:
  /// **'Please enter a phone number.'**
  String get errorEmptyNumber;

  /// No description provided for @errorNoDigits.
  ///
  /// In en, this message translates to:
  /// **'No valid digits found in the number.'**
  String get errorNoDigits;

  /// No description provided for @errorInvalidFormat.
  ///
  /// In en, this message translates to:
  /// **'Invalid format. \"+\" can only be at the start.'**
  String get errorInvalidFormat;

  /// No description provided for @errorInvalidLength.
  ///
  /// In en, this message translates to:
  /// **'Invalid phone number. It should be between 7 and 15 digits.'**
  String get errorInvalidLength;

  /// No description provided for @errorLaunchFailed.
  ///
  /// In en, this message translates to:
  /// **'Could not launch WhatsApp.'**
  String get errorLaunchFailed;

  /// No description provided for @errorInvalidNumber.
  ///
  /// In en, this message translates to:
  /// **'Invalid number format.'**
  String get errorInvalidNumber;

  /// No description provided for @successChatOpened.
  ///
  /// In en, this message translates to:
  /// **'Success: Opening chat...'**
  String get successChatOpened;

  /// No description provided for @generatedLinkPrefix.
  ///
  /// In en, this message translates to:
  /// **'Generated Link:\n'**
  String get generatedLinkPrefix;

  /// No description provided for @qrGeneratedPrefix.
  ///
  /// In en, this message translates to:
  /// **'QR Code generated for:\n'**
  String get qrGeneratedPrefix;

  /// No description provided for @vCardMissingName.
  ///
  /// In en, this message translates to:
  /// **'First name is required for a vCard.'**
  String get vCardMissingName;

  /// No description provided for @vCardGenerated.
  ///
  /// In en, this message translates to:
  /// **'vCard QR code generated for {name}.'**
  String vCardGenerated(Object name);

  /// No description provided for @outputPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Your generated output will appear here.'**
  String get outputPlaceholder;

  /// No description provided for @getLink.
  ///
  /// In en, this message translates to:
  /// **'Get Link'**
  String get getLink;

  /// No description provided for @templateTitleHint.
  ///
  /// In en, this message translates to:
  /// **'Title (e.g., Address)'**
  String get templateTitleHint;

  /// No description provided for @templateContentHint.
  ///
  /// In en, this message translates to:
  /// **'Message Content'**
  String get templateContentHint;

  /// No description provided for @noTemplates.
  ///
  /// In en, this message translates to:
  /// **'No templates yet. Add one!'**
  String get noTemplates;

  /// No description provided for @close.
  ///
  /// In en, this message translates to:
  /// **'Close'**
  String get close;

  /// No description provided for @searchCountry.
  ///
  /// In en, this message translates to:
  /// **'Search Country'**
  String get searchCountry;

  /// No description provided for @phoneNumberHint.
  ///
  /// In en, this message translates to:
  /// **'551234567'**
  String get phoneNumberHint;

  /// No description provided for @firstNameLabel.
  ///
  /// In en, this message translates to:
  /// **'First Name *'**
  String get firstNameLabel;

  /// No description provided for @lastNameLabel.
  ///
  /// In en, this message translates to:
  /// **'Last Name'**
  String get lastNameLabel;

  /// No description provided for @companyLabel.
  ///
  /// In en, this message translates to:
  /// **'Company'**
  String get companyLabel;

  /// No description provided for @emailLabel.
  ///
  /// In en, this message translates to:
  /// **'Email'**
  String get emailLabel;

  /// No description provided for @createContactQr.
  ///
  /// In en, this message translates to:
  /// **'Create a Contact QR Code'**
  String get createContactQr;

  /// No description provided for @scanToOpen.
  ///
  /// In en, this message translates to:
  /// **'Scan to Open'**
  String get scanToOpen;

  /// No description provided for @linkReady.
  ///
  /// In en, this message translates to:
  /// **'Link Ready'**
  String get linkReady;

  /// No description provided for @targetNumber.
  ///
  /// In en, this message translates to:
  /// **'Target Number'**
  String get targetNumber;

  /// No description provided for @savingToGallery.
  ///
  /// In en, this message translates to:
  /// **'Saving to gallery...'**
  String get savingToGallery;

  /// No description provided for @imageSaved.
  ///
  /// In en, this message translates to:
  /// **'QR Code saved to Gallery!'**
  String get imageSaved;

  /// No description provided for @imageSaveFailed.
  ///
  /// In en, this message translates to:
  /// **'Failed to save image.'**
  String get imageSaveFailed;

  /// No description provided for @foundNumberClipboard.
  ///
  /// In en, this message translates to:
  /// **'Found number in clipboard: {number}'**
  String foundNumberClipboard(Object number);

  /// No description provided for @use.
  ///
  /// In en, this message translates to:
  /// **'Use'**
  String get use;

  /// No description provided for @clearHistory.
  ///
  /// In en, this message translates to:
  /// **'Clear History'**
  String get clearHistory;

  /// No description provided for @clearHistoryConfirmation.
  ///
  /// In en, this message translates to:
  /// **'Are you sure you want to delete all history?'**
  String get clearHistoryConfirmation;

  /// No description provided for @clear.
  ///
  /// In en, this message translates to:
  /// **'Clear'**
  String get clear;

  /// No description provided for @noHistory.
  ///
  /// In en, this message translates to:
  /// **'No history yet.'**
  String get noHistory;

  /// No description provided for @clearAll.
  ///
  /// In en, this message translates to:
  /// **'Clear All'**
  String get clearAll;

  /// No description provided for @analyticsTitle.
  ///
  /// In en, this message translates to:
  /// **'Usage Analytics'**
  String get analyticsTitle;

  /// No description provided for @noData.
  ///
  /// In en, this message translates to:
  /// **'Not enough data to analyze.'**
  String get noData;

  /// No description provided for @activityDistribution.
  ///
  /// In en, this message translates to:
  /// **'Activity Distribution'**
  String get activityDistribution;

  /// No description provided for @totalActions.
  ///
  /// In en, this message translates to:
  /// **'Total Actions'**
  String get totalActions;

  /// No description provided for @directLinks.
  ///
  /// In en, this message translates to:
  /// **'Direct Links'**
  String get directLinks;

  /// No description provided for @qrCodes.
  ///
  /// In en, this message translates to:
  /// **'QR Codes'**
  String get qrCodes;

  /// No description provided for @vCards.
  ///
  /// In en, this message translates to:
  /// **'vCards'**
  String get vCards;
}

class _AppLocalizationsDelegate
    extends LocalizationsDelegate<AppLocalizations> {
  const _AppLocalizationsDelegate();

  @override
  Future<AppLocalizations> load(Locale locale) {
    return SynchronousFuture<AppLocalizations>(lookupAppLocalizations(locale));
  }

  @override
  bool isSupported(Locale locale) =>
      <String>['en', 'es'].contains(locale.languageCode);

  @override
  bool shouldReload(_AppLocalizationsDelegate old) => false;
}

AppLocalizations lookupAppLocalizations(Locale locale) {
  // Lookup logic when only language code is specified.
  switch (locale.languageCode) {
    case 'en':
      return AppLocalizationsEn();
    case 'es':
      return AppLocalizationsEs();
  }

  throw FlutterError(
    'AppLocalizations.delegate failed to load unsupported locale "$locale". This is likely '
    'an issue with the localizations generation tool. Please file an issue '
    'on GitHub with a reproducible sample app and the gen-l10n configuration '
    'that was used.',
  );
}
