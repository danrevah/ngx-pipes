"use strict";
var is_defined_1 = require("./is-defined");
var is_null_1 = require("./is-null");
var is_undefined_1 = require("./is-undefined");
var is_string_1 = require("./is-string");
var is_function_1 = require("./is-function");
var is_number_1 = require("./is-number");
var is_array_1 = require("./is-array");
var is_object_1 = require("./is-object");
exports.BOOLEAN_PIPES = [
    is_defined_1.IsDefinedPipe, is_null_1.IsNullPipe, is_undefined_1.IsUndefinedPipe, is_string_1.IsStringPipe, is_function_1.IsFunctionPipe, is_number_1.IsNumberPipe,
    is_array_1.IsArrayPipe, is_object_1.IsObjectPipe
];

//# sourceMappingURL=boolean.js.map
