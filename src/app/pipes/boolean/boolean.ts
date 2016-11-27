import {IsDefinedPipe} from './is-defined';
import {IsNullPipe} from './is-null';
import {IsUndefinedPipe} from './is-undefined';
import {IsStringPipe} from './is-string';
import {IsFunctionPipe} from './is-function';
import {IsNumberPipe} from './is-number';
import {IsArrayPipe} from './is-array';
import {IsObjectPipe} from './is-object';
import {IsGreaterEqualThanPipe} from './is-greater-equal-than';
import {IsGreaterThanPipe} from './is-greater-than';
import {IsLessEqualThanPipe} from './is-less-equal-than';
import {IsEqualToPipe} from './is-equal-to';
import {IsNotEqualToPipe} from './is-not-equal-to';
import {IsIdenticalToPipe} from './is-identical-to';
import {IsNotIdenticalToPipe} from './is-not-identical-to';
import {IsLessThanPipe} from './is-less-than';

export const BOOLEAN_PIPES = [
  IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe,
  IsArrayPipe, IsObjectPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsLessEqualThanPipe,
  IsLessEqualThanPipe, IsEqualToPipe, IsNotEqualToPipe, IsIdenticalToPipe, IsNotIdenticalToPipe,
  IsLessThanPipe
];
