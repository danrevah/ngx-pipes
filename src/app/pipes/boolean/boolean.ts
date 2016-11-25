import {IsDefinedPipe} from "./is-defined";
import {IsNullPipe} from "./is-null";
import {IsUndefinedPipe} from "./is-undefined";
import {IsStringPipe} from "./is-string";
import {IsFunctionPipe} from "./is-function";
import {IsNumberPipe} from "./is-number";
import {IsArrayPipe} from "./is-array";
import {IsObjectPipe} from "./is-object";

export const BOOLEAN_PIPES = [
  IsDefinedPipe, IsNullPipe, IsUndefinedPipe, IsStringPipe, IsFunctionPipe, IsNumberPipe,
  IsArrayPipe, IsObjectPipe
];
