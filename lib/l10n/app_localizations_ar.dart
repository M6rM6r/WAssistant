// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Arabic (`ar`).
class AppLocalizationsAr extends AppLocalizations {
  AppLocalizationsAr([String locale = 'ar']) : super(locale);

  @override
  String get appTitle => 'WAssistant';

  @override
  String get history => 'السجل';

  @override
  String get analytics => 'التحليلات';

  @override
  String get settings => 'الإعدادات';

  @override
  String get biometrics => 'القفل الحيوي';

  @override
  String get privacyPolicy => 'سياسة الخصوصية';

  @override
  String get shareApp => 'مشاركة التطبيق';

  @override
  String get directChat => 'دردشة مباشرة';

  @override
  String get vCardGen => 'vCard Gen';

  @override
  String get generateLink => 'إنشاء رابط';

  @override
  String get generateQr => 'إنشاء رمز QR';

  @override
  String get openChat => 'فتح الدردشة';

  @override
  String get phoneLabel => 'رقم الهاتف';

  @override
  String get messageLabel => 'رسالة (اختياري)';

  @override
  String get templateTitle => 'قوالب سريعة';

  @override
  String get addTemplate => 'قالب جديد';

  @override
  String get save => 'حفظ';

  @override
  String get cancel => 'إلغاء';

  @override
  String get delete => 'حذف';

  @override
  String get copied => 'تم النسخ إلى الحافظة';

  @override
  String get copyLink => 'نسخ الرابط';

  @override
  String get shareLink => 'مشاركة الرابط';

  @override
  String get saveToGallery => 'حفظ في المعرض';

  @override
  String get securityTitle => 'الأمان';

  @override
  String get biometricReason => 'يرجى المصادقة للوصول إلى WAssistant';

  @override
  String get jobTitleLabel => 'المسمى الوظيفي';

  @override
  String get websiteLabel => 'الموقع الإلكتروني (اختياري)';

  @override
  String get errorEmptyNumber => 'يرجى إدخال رقم الهاتف.';

  @override
  String get errorNoDigits => 'لم يتم العثور على أرقام صالحة.';

  @override
  String get errorInvalidFormat =>
      'تنسيق غير صالح. \'+\' يمكن أن يكون في البداية فقط.';

  @override
  String get errorInvalidLength =>
      'رقم هاتف غير صالح. يجب أن يكون بين 7 و 15 رقمًا.';

  @override
  String get errorLaunchFailed => 'تعذر تشغيل WhatsApp.';

  @override
  String get errorInvalidNumber => 'تنسيق الرقم غير صالح.';

  @override
  String get successChatOpened => 'تم بنجاح: جاري فتح الدردشة...';

  @override
  String get generatedLinkPrefix => 'الرابط المنشأ:\n';

  @override
  String get qrGeneratedPrefix => 'تم إنشاء رمز QR لـ:\n';

  @override
  String get vCardMissingName => 'الاسم الأول مطلوب لـ vCard.';

  @override
  String vCardGenerated(Object name) {
    return 'تم إنشاء رمز QR لـ vCard لـ $name.';
  }

  @override
  String get outputPlaceholder => 'سيظهر ناتجك هنا.';

  @override
  String get getLink => 'احصل على الرابط';

  @override
  String get templateTitleHint => 'العنوان (مثلاً: العنوان)';

  @override
  String get templateContentHint => 'محتوى الرسالة';

  @override
  String get noTemplates => 'لا توجد قوالب بعد. أضف واحدة!';

  @override
  String get close => 'إغلاق';

  @override
  String get searchCountry => 'البحث عن بلد';

  @override
  String get phoneNumberHint => '551234567';

  @override
  String get firstNameLabel => 'الاسم الأول *';

  @override
  String get lastNameLabel => 'اسم العائلة';

  @override
  String get companyLabel => 'الشركة';

  @override
  String get emailLabel => 'البريد الإلكتروني';

  @override
  String get createContactQr => 'إنشاء رمز QR لجهة اتصال';

  @override
  String get scanToOpen => 'مسح للفتح';

  @override
  String get linkReady => 'الرابط جاهز';

  @override
  String get targetNumber => 'الرقم المستهدف';

  @override
  String get savingToGallery => 'جاري الحفظ في المعرض...';

  @override
  String get imageSaved => 'تم حفظ رمز QR في المعرض!';

  @override
  String get imageSaveFailed => 'فشل حفظ الصورة.';

  @override
  String get imageSaveUnavailable =>
      'حفظ الصور في المعرض غير متاح في هذا الإصدار.';

  @override
  String foundNumberClipboard(Object number) {
    return 'تم العثور على رقم في الحافظة: $number';
  }

  @override
  String get use => 'استخدام';

  @override
  String get clearHistory => 'مسح السجل';

  @override
  String get clearHistoryConfirmation =>
      'هل أنت متأكد أنك تريد حذف السجل بالكامل؟';

  @override
  String get clear => 'مسح';

  @override
  String get noHistory => 'لا يوجد سجل بعد.';

  @override
  String get clearAll => 'مسح الكل';

  @override
  String get analyticsTitle => 'تحليلات الاستخدام';

  @override
  String get noData => 'لا توجد بيانات كافية للتحليل.';

  @override
  String get activityDistribution => 'توزيع النشاط';

  @override
  String get totalActions => 'إجمالي الإجراءات';

  @override
  String get directLinks => 'الروابط المباشرة';

  @override
  String get qrCodes => 'رموز QR';

  @override
  String get vCards => 'vCards';
}
