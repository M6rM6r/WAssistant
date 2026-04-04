import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:wassistant/services/local_storage_service.dart';

/// Template category types
enum TemplateCategory {
  greetings('Greetings', '👋'),
  business('Business', '💼'),
  support('Customer Support', '🎧'),
  sales('Sales', '💰'),
  personal('Personal', '🏠'),
  appointment('Appointments', '📅'),
  delivery('Delivery', '📦'),
  custom('Custom', '✨');

  final String label;
  final String emoji;

  const TemplateCategory(this.label, this.emoji);
}

/// Template model
class MessageTemplate {
  final String id;
  final String title;
  final String content;
  final TemplateCategory category;
  final DateTime createdAt;
  final DateTime? lastUsed;
  final int useCount;
  final bool isFavorite;
  final List<String> tags;

  const MessageTemplate({
    required this.id,
    required this.title,
    required this.content,
    required this.category,
    required this.createdAt,
    this.lastUsed,
    this.useCount = 0,
    this.isFavorite = false,
    this.tags = const [],
  });

  MessageTemplate copyWith({
    String? id,
    String? title,
    String? content,
    TemplateCategory? category,
    DateTime? createdAt,
    DateTime? lastUsed,
    int? useCount,
    bool? isFavorite,
    List<String>? tags,
  }) {
    return MessageTemplate(
      id: id ?? this.id,
      title: title ?? this.title,
      content: content ?? this.content,
      category: category ?? this.category,
      createdAt: createdAt ?? this.createdAt,
      lastUsed: lastUsed ?? this.lastUsed,
      useCount: useCount ?? this.useCount,
      isFavorite: isFavorite ?? this.isFavorite,
      tags: tags ?? this.tags,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'title': title,
    'content': content,
    'category': category.name,
    'createdAt': createdAt.toIso8601String(),
    'lastUsed': lastUsed?.toIso8601String(),
    'useCount': useCount,
    'isFavorite': isFavorite,
    'tags': tags,
  };

  factory MessageTemplate.fromJson(Map<String, dynamic> json) {
    return MessageTemplate(
      id: json['id'] as String,
      title: json['title'] as String,
      content: json['content'] as String,
      category: TemplateCategory.values.byName(json['category'] as String),
      createdAt: DateTime.parse(json['createdAt'] as String),
      lastUsed: json['lastUsed'] != null
          ? DateTime.parse(json['lastUsed'] as String)
          : null,
      useCount: json['useCount'] as int? ?? 0,
      isFavorite: json['isFavorite'] as bool? ?? false,
      tags: (json['tags'] as List<dynamic>?)?.cast<String>() ?? [],
    );
  }
}

/// Smart Template Service with categories, search, and analytics
class SmartTemplateService extends ChangeNotifier {
  SmartTemplateService({required LocalStorageService storage})
      : _storage = storage {
    _loadTemplates();
  }

  final LocalStorageService _storage;
  static const _templatesKey = 'smart_templates';

  List<MessageTemplate> _templates = [];
  List<MessageTemplate> get templates => List.unmodifiable(_templates);

  // Filter state
  TemplateCategory? _selectedCategory;
  String _searchQuery = '';
  bool _showFavoritesOnly = false;

  TemplateCategory? get selectedCategory => _selectedCategory;
  String get searchQuery => _searchQuery;
  bool get showFavoritesOnly => _showFavoritesOnly;

  /// Get filtered templates
  List<MessageTemplate> get filteredTemplates {
    var filtered = _templates;

    // Category filter
    if (_selectedCategory != null) {
      filtered = filtered
          .where((t) => t.category == _selectedCategory)
          .toList();
    }

    // Search filter
    if (_searchQuery.isNotEmpty) {
      final query = _searchQuery.toLowerCase();
      filtered = filtered.where((t) {
        return t.title.toLowerCase().contains(query) ||
            t.content.toLowerCase().contains(query) ||
            t.tags.any((tag) => tag.toLowerCase().contains(query));
      }).toList();
    }

    // Favorites filter
    if (_showFavoritesOnly) {
      filtered = filtered.where((t) => t.isFavorite).toList();
    }

    // Sort by favorites first, then by use count, then by last used
    filtered.sort((a, b) {
      if (a.isFavorite != b.isFavorite) {
        return a.isFavorite ? -1 : 1;
      }
      if (a.useCount != b.useCount) {
        return b.useCount.compareTo(a.useCount);
      }
      if (a.lastUsed != null && b.lastUsed != null) {
        return b.lastUsed!.compareTo(a.lastUsed!);
      }
      return 0;
    });

    return filtered;
  }

  /// Get templates by category
  Map<TemplateCategory, List<MessageTemplate>> get templatesByCategory {
    final map = <TemplateCategory, List<MessageTemplate>>{};
    for (final category in TemplateCategory.values) {
      final categoryTemplates = _templates
          .where((t) => t.category == category)
          .toList();
      if (categoryTemplates.isNotEmpty) {
        map[category] = categoryTemplates;
      }
    }
    return map;
  }

  /// Get most used templates
  List<MessageTemplate> get mostUsedTemplates {
    final sorted = List<MessageTemplate>.from(_templates)
      ..sort((a, b) => b.useCount.compareTo(a.useCount));
    return sorted.take(5).toList();
  }

  /// Get recently used templates
  List<MessageTemplate> get recentlyUsedTemplates {
    final withUsage = _templates.where((t) => t.lastUsed != null).toList()
      ..sort((a, b) => b.lastUsed!.compareTo(a.lastUsed!));
    return withUsage.take(5).toList();
  }

  /// Add new template
  Future<void> addTemplate({
    required String title,
    required String content,
    required TemplateCategory category,
    List<String> tags = const [],
  }) async {
    final template = MessageTemplate(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      title: title,
      content: content,
      category: category,
      createdAt: DateTime.now(),
      tags: tags,
    );

    _templates.add(template);
    await _saveTemplates();
    notifyListeners();
  }

  /// Update template
  Future<void> updateTemplate(MessageTemplate template) async {
    final index = _templates.indexWhere((t) => t.id == template.id);
    if (index != -1) {
      _templates[index] = template;
      await _saveTemplates();
      notifyListeners();
    }
  }

  /// Delete template
  Future<void> deleteTemplate(String id) async {
    _templates.removeWhere((t) => t.id == id);
    await _saveTemplates();
    notifyListeners();
  }

  /// Record template usage
  Future<void> recordUsage(String id) async {
    final index = _templates.indexWhere((t) => t.id == id);
    if (index != -1) {
      final template = _templates[index];
      _templates[index] = template.copyWith(
        useCount: template.useCount + 1,
        lastUsed: DateTime.now(),
      );
      await _saveTemplates();
      notifyListeners();
    }
  }

  /// Toggle favorite status
  Future<void> toggleFavorite(String id) async {
    final index = _templates.indexWhere((t) => t.id == id);
    if (index != -1) {
      final template = _templates[index];
      _templates[index] = template.copyWith(
        isFavorite: !template.isFavorite,
      );
      await _saveTemplates();
      notifyListeners();
    }
  }

  /// Set category filter
  void setCategoryFilter(TemplateCategory? category) {
    _selectedCategory = category;
    notifyListeners();
  }

  /// Set search query
  void setSearchQuery(String query) {
    _searchQuery = query;
    notifyListeners();
  }

  /// Toggle favorites filter
  void toggleFavoritesFilter() {
    _showFavoritesOnly = !_showFavoritesOnly;
    notifyListeners();
  }

  /// Clear all filters
  void clearFilters() {
    _selectedCategory = null;
    _searchQuery = '';
    _showFavoritesOnly = false;
    notifyListeners();
  }

  /// Get smart suggestions based on time of day
  List<MessageTemplate> getSmartSuggestions() {
    final hour = DateTime.now().hour;
    
    // Morning suggestions (6-12)
    if (hour >= 6 && hour < 12) {
      return _templates
          .where((t) => t.tags.contains('morning') || 
                       t.title.toLowerCase().contains('good morning'))
          .toList();
    }
    
    // Evening suggestions (17-22)
    if (hour >= 17 && hour < 22) {
      return _templates
          .where((t) => t.tags.contains('evening') || 
                       t.title.toLowerCase().contains('good evening'))
          .toList();
    }
    
    return mostUsedTemplates;
  }

  /// Export templates as JSON
  String exportTemplates() {
    final exportData = {
      'version': '1.0',
      'exportDate': DateTime.now().toIso8601String(),
      'templates': _templates.map((t) => t.toJson()).toList(),
    };
    return jsonEncode(exportData);
  }

  /// Import templates from JSON
  Future<void> importTemplates(String jsonString) async {
    try {
      final data = jsonDecode(jsonString) as Map<String, dynamic>;
      final templatesList = data['templates'] as List<dynamic>;
      
      final imported = templatesList
          .map((json) => MessageTemplate.fromJson(json as Map<String, dynamic>))
          .toList();
      
      // Merge with existing, avoiding duplicates by content
      final existingContents = _templates.map((t) => t.content).toSet();
      final newTemplates = imported
          .where((t) => !existingContents.contains(t.content))
          .toList();
      
      _templates.addAll(newTemplates);
      await _saveTemplates();
      notifyListeners();
    } catch (e) {
      throw Exception('Failed to import templates: $e');
    }
  }

  /// Predefined template suggestions
  static List<MessageTemplate> getSuggestedTemplates() {
    return [
      MessageTemplate(
        id: 'suggestion_1',
        title: 'Business Inquiry',
        content: 'Hi, I\'m interested in your services. Can you provide more information about pricing and availability?',
        category: TemplateCategory.business,
        createdAt: DateTime.now(),
        tags: ['business', 'inquiry'],
      ),
      MessageTemplate(
        id: 'suggestion_2',
        title: 'Quick Hello',
        content: 'Hey! Just wanted to check in. How are you doing?',
        category: TemplateCategory.personal,
        createdAt: DateTime.now(),
        tags: ['personal', 'casual'],
      ),
      MessageTemplate(
        id: 'suggestion_3',
        title: 'Delivery Confirmation',
        content: 'Hi, I\'m confirming my delivery address. Please deliver to: [ADDRESS]',
        category: TemplateCategory.delivery,
        createdAt: DateTime.now(),
        tags: ['delivery', 'address'],
      ),
      MessageTemplate(
        id: 'suggestion_4',
        title: 'Meeting Request',
        content: 'Hello, I\'d like to schedule a meeting to discuss [TOPIC]. What time works for you?',
        category: TemplateCategory.appointment,
        createdAt: DateTime.now(),
        tags: ['meeting', 'professional'],
      ),
    ];
  }

  /// Load templates from storage
  Future<void> _loadTemplates() async {
    final jsonString = await _storage.getString(_templatesKey);
    if (jsonString != null) {
      try {
        final data = jsonDecode(jsonString) as List<dynamic>;
        _templates = data
            .map((json) => MessageTemplate.fromJson(json as Map<String, dynamic>))
            .toList();
        notifyListeners();
      } catch (e) {
        _templates = [];
      }
    }
  }

  /// Save templates to storage
  Future<void> _saveTemplates() async {
    final data = _templates.map((t) => t.toJson()).toList();
    await _storage.setString(_templatesKey, jsonEncode(data));
  }
}
