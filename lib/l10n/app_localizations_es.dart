// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Spanish Castilian (`es`).
class AppLocalizationsEs extends AppLocalizations {
  AppLocalizationsEs([String locale = 'es']) : super(locale);

  @override
  String get appTitle => 'WAssistant';

  @override
  String get history => 'Historial';

  @override
  String get analytics => 'Analítica';

  @override
  String get settings => 'Ajustes';

  @override
  String get biometrics => 'Bloqueo Biométrico';

  @override
  String get privacyPolicy => 'Política de Privacidad';

  @override
  String get shareApp => 'Compartir App';

  @override
  String get directChat => 'Chat Directo';

  @override
  String get vCardGen => 'Generar vCard';

  @override
  String get generateLink => 'Crear Enlace';

  @override
  String get generateQr => 'Crear QR';

  @override
  String get openChat => 'Abrir Chat';

  @override
  String get phoneLabel => 'Número de Teléfono';

  @override
  String get messageLabel => 'Mensaje (Opcional)';

  @override
  String get templateTitle => 'Plantillas Rápidas';

  @override
  String get addTemplate => 'Nueva Plantilla';

  @override
  String get save => 'Guardar';

  @override
  String get cancel => 'Cancelar';

  @override
  String get delete => 'Borrar';

  @override
  String get copied => 'Copiado al portapapeles';

  @override
  String get copyLink => 'Copiar Enlace';

  @override
  String get shareLink => 'Compartir Enlace';

  @override
  String get saveToGallery => 'Guardar en Galería';

  @override
  String get securityTitle => 'Seguridad';

  @override
  String get biometricReason => 'Autentíquese para acceder a WAssistant';

  @override
  String get jobTitleLabel => 'Título del Trabajo';

  @override
  String get websiteLabel => 'Sitio Web (Opcional)';

  @override
  String get errorEmptyNumber => 'Por favor ingrese un número de teléfono.';

  @override
  String get errorNoDigits => 'No se encontraron dígitos válidos.';

  @override
  String get errorInvalidFormat =>
      'Formato inválido. \"+\" solo puede ir al inicio.';

  @override
  String get errorInvalidLength =>
      'Número inválido. Debe tener entre 7 y 15 dígitos.';

  @override
  String get errorLaunchFailed => 'No se pudo abrir WhatsApp.';

  @override
  String get errorInvalidNumber => 'Formato de número inválido.';

  @override
  String get successChatOpened => 'Éxito: Abriendo chat...';

  @override
  String get generatedLinkPrefix => 'Enlace Generado:\n';

  @override
  String get qrGeneratedPrefix => 'Código QR generado para:\n';

  @override
  String get vCardMissingName => 'El nombre es obligatorio para una vCard.';

  @override
  String vCardGenerated(Object name) {
    return 'Código QR de vCard generado para $name.';
  }

  @override
  String get outputPlaceholder => 'Su resultado aparecerá aquí.';

  @override
  String get getLink => 'Obtener Enlace';

  @override
  String get templateTitleHint => 'Título (ej. Dirección)';

  @override
  String get templateContentHint => 'Contenido del Mensaje';

  @override
  String get noTemplates => 'Sin plantillas. ¡Agregue una!';

  @override
  String get close => 'Cerrar';

  @override
  String get searchCountry => 'Buscar País';

  @override
  String get phoneNumberHint => '551234567';

  @override
  String get firstNameLabel => 'Nombre *';

  @override
  String get lastNameLabel => 'Apellido';

  @override
  String get companyLabel => 'Empresa';

  @override
  String get emailLabel => 'Correo';

  @override
  String get createContactQr => 'Crear Código QR de Contacto';

  @override
  String get scanToOpen => 'Escanear para Abrir';

  @override
  String get linkReady => 'Enlace Listo';

  @override
  String get targetNumber => 'Número Destino';

  @override
  String get savingToGallery => 'Guardando en galería...';

  @override
  String get imageSaved => '¡Código QR guardado en Galería!';

  @override
  String get imageSaveFailed => 'Error al guardar imagen.';

  @override
  String get imageSaveUnavailable =>
      'Guardar en la galería no está disponible en esta versión.';

  @override
  String foundNumberClipboard(Object number) {
    return 'Número encontrado en portapapeles: $number';
  }

  @override
  String get use => 'Usar';

  @override
  String get clearHistory => 'Borrar Historial';

  @override
  String get clearHistoryConfirmation =>
      '¿Está seguro de querer borrar todo el historial?';

  @override
  String get clear => 'Borrar';

  @override
  String get noHistory => 'Aún no hay historial.';

  @override
  String get clearAll => 'Borrar Todo';

  @override
  String get analyticsTitle => 'Analítica de Uso';

  @override
  String get noData => 'No hay suficientes datos para analizar.';

  @override
  String get activityDistribution => 'Distribución de Actividad';

  @override
  String get totalActions => 'Acciones Totales';

  @override
  String get directLinks => 'Enlaces Directos';

  @override
  String get qrCodes => 'Códigos QR';

  @override
  String get vCards => 'vCards';
}
