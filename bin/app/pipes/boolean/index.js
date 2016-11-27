"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var is_defined_1 = require('./is-defined');
var is_null_1 = require('./is-null');
var is_undefined_1 = require('./is-undefined');
var is_string_1 = require('./is-string');
var is_function_1 = require('./is-function');
var is_number_1 = require('./is-number');
var is_array_1 = require('./is-array');
var is_object_1 = require('./is-object');
var is_greater_equal_than_1 = require('./is-greater-equal-than');
var is_greater_than_1 = require('./is-greater-than');
var is_less_equal_than_1 = require('./is-less-equal-than');
var is_equal_to_1 = require('./is-equal-to');
var is_not_equal_to_1 = require('./is-not-equal-to');
var is_identical_to_1 = require('./is-identical-to');
var is_not_identical_to_1 = require('./is-not-identical-to');
var is_less_than_1 = require('./is-less-than');
exports.BOOLEAN_PIPES = [
    is_defined_1.IsDefinedPipe, is_null_1.IsNullPipe, is_undefined_1.IsUndefinedPipe, is_string_1.IsStringPipe, is_function_1.IsFunctionPipe, is_number_1.IsNumberPipe,
    is_array_1.IsArrayPipe, is_object_1.IsObjectPipe, is_greater_equal_than_1.IsGreaterEqualThanPipe, is_greater_than_1.IsGreaterThanPipe, is_less_equal_than_1.IsLessEqualThanPipe,
    is_less_equal_than_1.IsLessEqualThanPipe, is_equal_to_1.IsEqualToPipe, is_not_equal_to_1.IsNotEqualToPipe, is_identical_to_1.IsIdenticalToPipe, is_not_identical_to_1.IsNotIdenticalToPipe,
    is_less_than_1.IsLessThanPipe
];
var NgBooleanPipesModule = (function () {
    function NgBooleanPipesModule() {
    }
    NgBooleanPipesModule = __decorate([
        core_1.NgModule({
            declarations: exports.BOOLEAN_PIPES.slice(),
            imports: [],
            exports: exports.BOOLEAN_PIPES.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], NgBooleanPipesModule);
    return NgBooleanPipesModule;
}());
exports.NgBooleanPipesModule = NgBooleanPipesModule;
__export(require('./is-defined'));
__export(require('./is-null'));
__export(require('./is-undefined'));
__export(require('./is-string'));
__export(require('./is-function'));
__export(require('./is-number'));
__export(require('./is-array'));
__export(require('./is-object'));
__export(require('./is-greater-equal-than'));
__export(require('./is-greater-than'));
__export(require('./is-less-equal-than'));
__export(require('./is-equal-to'));
__export(require('./is-not-equal-to'));
__export(require('./is-identical-to'));
__export(require('./is-not-identical-to'));
__export(require('./is-less-than'));

//# sourceMappingURL=index.js.map
