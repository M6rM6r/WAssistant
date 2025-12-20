import 'package:equatable/equatable.dart';

// OCPD: Structured Failure Hierarchy
abstract class Failure extends Equatable {
  final String message;
  const Failure(this.message);

  @override
  List<Object> get props => [message];
}

class ValidationFailure extends Failure {
  const ValidationFailure(super.message);
}

class SystemFailure extends Failure {
  const ValidationFailure(super.message);
}
