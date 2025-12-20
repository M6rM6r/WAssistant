import 'package:equatable/equatable.dart';

/// OCPD: Structured Failure Hierarchy for Functional Error Handling.
/// INTJ Strategy: Errors are first-class citizens, not side-effects.
abstract class Failure extends Equatable {
  const Failure(this.message);
  final String message;

  @override
  List<Object?> get props => [message];
}

class ValidationFailure extends Failure {
  const ValidationFailure(super.message);
}

class SystemFailure extends Failure {
  const SystemFailure(super.message);
}
