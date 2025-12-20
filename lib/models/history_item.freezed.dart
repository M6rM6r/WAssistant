// GENERATED CODE - DO NOT MODIFY BY HAND
// coverage:ignore-file
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'history_item.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

// dart format off
T _$identity<T>(T value) => value;

/// @nodoc
mixin _$HistoryItem {

 HistoryItemType get type; String get data; DateTime get timestamp; String get display;
/// Create a copy of HistoryItem
/// with the given fields replaced by the non-null parameter values.
@JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
$HistoryItemCopyWith<HistoryItem> get copyWith => _$HistoryItemCopyWithImpl<HistoryItem>(this as HistoryItem, _$identity);

  /// Serializes this HistoryItem to a JSON map.
  Map<String, dynamic> toJson();


@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is HistoryItem&&(identical(other.type, type) || other.type == type)&&(identical(other.data, data) || other.data == data)&&(identical(other.timestamp, timestamp) || other.timestamp == timestamp)&&(identical(other.display, display) || other.display == display));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,type,data,timestamp,display);

@override
String toString() {
  return 'HistoryItem(type: $type, data: $data, timestamp: $timestamp, display: $display)';
}


}

/// @nodoc
abstract mixin class $HistoryItemCopyWith<$Res>  {
  factory $HistoryItemCopyWith(HistoryItem value, $Res Function(HistoryItem) _then) = _$HistoryItemCopyWithImpl;
@useResult
$Res call({
 HistoryItemType type, String data, DateTime timestamp, String display
});




}
/// @nodoc
class _$HistoryItemCopyWithImpl<$Res>
    implements $HistoryItemCopyWith<$Res> {
  _$HistoryItemCopyWithImpl(this._self, this._then);

  final HistoryItem _self;
  final $Res Function(HistoryItem) _then;

/// Create a copy of HistoryItem
/// with the given fields replaced by the non-null parameter values.
@pragma('vm:prefer-inline') @override $Res call({Object? type = null,Object? data = null,Object? timestamp = null,Object? display = null,}) {
  return _then(_self.copyWith(
type: null == type ? _self.type : type // ignore: cast_nullable_to_non_nullable
as HistoryItemType,data: null == data ? _self.data : data // ignore: cast_nullable_to_non_nullable
as String,timestamp: null == timestamp ? _self.timestamp : timestamp // ignore: cast_nullable_to_non_nullable
as DateTime,display: null == display ? _self.display : display // ignore: cast_nullable_to_non_nullable
as String,
  ));
}

}


/// Adds pattern-matching-related methods to [HistoryItem].
extension HistoryItemPatterns on HistoryItem {
/// A variant of `map` that fallback to returning `orElse`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeMap<TResult extends Object?>(TResult Function( _HistoryItem value)?  $default,{required TResult orElse(),}){
final _that = this;
switch (_that) {
case _HistoryItem() when $default != null:
return $default(_that);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// Callbacks receives the raw object, upcasted.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case final Subclass2 value:
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult map<TResult extends Object?>(TResult Function( _HistoryItem value)  $default,){
final _that = this;
switch (_that) {
case _HistoryItem():
return $default(_that);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `map` that fallback to returning `null`.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case final Subclass value:
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? mapOrNull<TResult extends Object?>(TResult? Function( _HistoryItem value)?  $default,){
final _that = this;
switch (_that) {
case _HistoryItem() when $default != null:
return $default(_that);case _:
  return null;

}
}
/// A variant of `when` that fallback to an `orElse` callback.
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return orElse();
/// }
/// ```

@optionalTypeArgs TResult maybeWhen<TResult extends Object?>(TResult Function( HistoryItemType type,  String data,  DateTime timestamp,  String display)?  $default,{required TResult orElse(),}) {final _that = this;
switch (_that) {
case _HistoryItem() when $default != null:
return $default(_that.type,_that.data,_that.timestamp,_that.display);case _:
  return orElse();

}
}
/// A `switch`-like method, using callbacks.
///
/// As opposed to `map`, this offers destructuring.
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case Subclass2(:final field2):
///     return ...;
/// }
/// ```

@optionalTypeArgs TResult when<TResult extends Object?>(TResult Function( HistoryItemType type,  String data,  DateTime timestamp,  String display)  $default,) {final _that = this;
switch (_that) {
case _HistoryItem():
return $default(_that.type,_that.data,_that.timestamp,_that.display);case _:
  throw StateError('Unexpected subclass');

}
}
/// A variant of `when` that fallback to returning `null`
///
/// It is equivalent to doing:
/// ```dart
/// switch (sealedClass) {
///   case Subclass(:final field):
///     return ...;
///   case _:
///     return null;
/// }
/// ```

@optionalTypeArgs TResult? whenOrNull<TResult extends Object?>(TResult? Function( HistoryItemType type,  String data,  DateTime timestamp,  String display)?  $default,) {final _that = this;
switch (_that) {
case _HistoryItem() when $default != null:
return $default(_that.type,_that.data,_that.timestamp,_that.display);case _:
  return null;

}
}

}

/// @nodoc
@JsonSerializable()

class _HistoryItem implements HistoryItem {
  const _HistoryItem({required this.type, required this.data, required this.timestamp, this.display = 'Unknown'});
  factory _HistoryItem.fromJson(Map<String, dynamic> json) => _$HistoryItemFromJson(json);

@override final  HistoryItemType type;
@override final  String data;
@override final  DateTime timestamp;
@override@JsonKey() final  String display;

/// Create a copy of HistoryItem
/// with the given fields replaced by the non-null parameter values.
@override @JsonKey(includeFromJson: false, includeToJson: false)
@pragma('vm:prefer-inline')
_$HistoryItemCopyWith<_HistoryItem> get copyWith => __$HistoryItemCopyWithImpl<_HistoryItem>(this, _$identity);

@override
Map<String, dynamic> toJson() {
  return _$HistoryItemToJson(this, );
}

@override
bool operator ==(Object other) {
  return identical(this, other) || (other.runtimeType == runtimeType&&other is _HistoryItem&&(identical(other.type, type) || other.type == type)&&(identical(other.data, data) || other.data == data)&&(identical(other.timestamp, timestamp) || other.timestamp == timestamp)&&(identical(other.display, display) || other.display == display));
}

@JsonKey(includeFromJson: false, includeToJson: false)
@override
int get hashCode => Object.hash(runtimeType,type,data,timestamp,display);

@override
String toString() {
  return 'HistoryItem(type: $type, data: $data, timestamp: $timestamp, display: $display)';
}


}

/// @nodoc
abstract mixin class _$HistoryItemCopyWith<$Res> implements $HistoryItemCopyWith<$Res> {
  factory _$HistoryItemCopyWith(_HistoryItem value, $Res Function(_HistoryItem) _then) = __$HistoryItemCopyWithImpl;
@override @useResult
$Res call({
 HistoryItemType type, String data, DateTime timestamp, String display
});




}
/// @nodoc
class __$HistoryItemCopyWithImpl<$Res>
    implements _$HistoryItemCopyWith<$Res> {
  __$HistoryItemCopyWithImpl(this._self, this._then);

  final _HistoryItem _self;
  final $Res Function(_HistoryItem) _then;

/// Create a copy of HistoryItem
/// with the given fields replaced by the non-null parameter values.
@override @pragma('vm:prefer-inline') $Res call({Object? type = null,Object? data = null,Object? timestamp = null,Object? display = null,}) {
  return _then(_HistoryItem(
type: null == type ? _self.type : type // ignore: cast_nullable_to_non_nullable
as HistoryItemType,data: null == data ? _self.data : data // ignore: cast_nullable_to_non_nullable
as String,timestamp: null == timestamp ? _self.timestamp : timestamp // ignore: cast_nullable_to_non_nullable
as DateTime,display: null == display ? _self.display : display // ignore: cast_nullable_to_non_nullable
as String,
  ));
}


}

// dart format on
