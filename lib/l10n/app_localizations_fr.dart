// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for French (`fr`).
class AppLocalizationsFr extends AppLocalizations {
  AppLocalizationsFr([String locale = 'fr']) : super(locale);

  @override
  String get appTitle => 'WAssistant';

  @override
  String get history => 'Historique';

  @override
  String get analytics => 'Analytique';

  @override
  String get settings => 'Paramètres';

  @override
  String get biometrics => 'Verrouillage biométrique';

  @override
  String get privacyPolicy => 'Politique de confidentialité';

  @override
  String get shareApp => 'Partager l\'application';

  @override
  String get directChat => 'Chat direct';

  @override
  String get vCardGen => 'Générateur vCard';

  @override
  String get generateLink => 'Générer un lien';

  @override
  String get generateQr => 'Générer un QR';

  @override
  String get openChat => 'Ouvrir le chat';

  @override
  String get phoneLabel => 'Numéro de téléphone';

  @override
  String get messageLabel => 'Message (Optionnel)';

  @override
  String get templateTitle => 'Modèles rapides';

  @override
  String get addTemplate => 'Nouveau modèle';

  @override
  String get save => 'Enregistrer';

  @override
  String get cancel => 'Annuler';

  @override
  String get delete => 'Supprimer';

  @override
  String get copied => 'Copié dans le presse-papiers';

  @override
  String get copyLink => 'Copier le lien';

  @override
  String get shareLink => 'Partager le lien';

  @override
  String get saveToGallery => 'Enregistrer dans la galerie';

  @override
  String get securityTitle => 'Sécurité';

  @override
  String get biometricReason =>
      'Veuillez vous authentifier pour accéder à WAssistant';

  @override
  String get jobTitleLabel => 'Titre du poste';

  @override
  String get websiteLabel => 'Site web (Optionnel)';

  @override
  String get errorEmptyNumber => 'Veuillez entrer un numéro de téléphone.';

  @override
  String get errorNoDigits => 'Aucun chiffre valide trouvé.';

  @override
  String get errorInvalidFormat =>
      'Format invalide. \'+\' peut seulement être au début.';

  @override
  String get errorInvalidLength =>
      'Numéro invalide. Il doit avoir entre 7 et 15 chiffres.';

  @override
  String get errorLaunchFailed => 'Impossible de lancer WhatsApp.';

  @override
  String get errorInvalidNumber => 'Format de numéro invalide.';

  @override
  String get successChatOpened => 'Succès : Ouverture du chat...';

  @override
  String get generatedLinkPrefix => 'Lien généré :\n';

  @override
  String get qrGeneratedPrefix => 'Code QR généré pour :\n';

  @override
  String get vCardMissingName => 'Le prénom est requis pour une vCard.';

  @override
  String vCardGenerated(Object name) {
    return 'Code QR vCard généré pour $name.';
  }

  @override
  String get outputPlaceholder => 'Votre résultat apparaîtra ici.';

  @override
  String get getLink => 'Obtenir le lien';

  @override
  String get templateTitleHint => 'Titre (ex: Adresse)';

  @override
  String get templateContentHint => 'Contenu du message';

  @override
  String get noTemplates => 'Pas encore de modèles. Ajoutez-en un !';

  @override
  String get close => 'Fermer';

  @override
  String get searchCountry => 'Chercher un pays';

  @override
  String get phoneNumberHint => '551234567';

  @override
  String get firstNameLabel => 'Prénom *';

  @override
  String get lastNameLabel => 'Nom de famille';

  @override
  String get companyLabel => 'Entreprise';

  @override
  String get emailLabel => 'E-mail';

  @override
  String get createContactQr => 'Créer un QR de contact';

  @override
  String get scanToOpen => 'Scanner pour ouvrir';

  @override
  String get linkReady => 'Lien prêt';

  @override
  String get targetNumber => 'Numéro cible';

  @override
  String get savingToGallery => 'Enregistrement dans la galerie...';

  @override
  String get imageSaved => 'Code QR enregistré dans la galerie !';

  @override
  String get imageSaveFailed => 'Échec de l\'enregistrement de l\'image.';

  @override
  String get imageSaveUnavailable =>
      'L\'enregistrement dans la galerie n\'est pas disponible dans cette version.';

  @override
  String foundNumberClipboard(Object number) {
    return 'Numéro trouvé dans le presse-papiers : $number';
  }

  @override
  String get use => 'Utiliser';

  @override
  String get clearHistory => 'Effacer l\'historique';

  @override
  String get clearHistoryConfirmation =>
      'Voulez-vous vraiment supprimer tout l\'historique ?';

  @override
  String get clear => 'Effacer';

  @override
  String get noHistory => 'Pas encore d\'historique.';

  @override
  String get clearAll => 'Tout effacer';

  @override
  String get analyticsTitle => 'Analytique d\'utilisation';

  @override
  String get noData => 'Pas assez de données pour analyser.';

  @override
  String get activityDistribution => 'Distribution de l\'activité';

  @override
  String get totalActions => 'Total des actions';

  @override
  String get directLinks => 'Liens directs';

  @override
  String get qrCodes => 'Codes QR';

  @override
  String get vCards => 'vCards';
}
