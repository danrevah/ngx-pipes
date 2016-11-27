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
var array_1 = require('./pipes/array');
var string_1 = require('./pipes/string');
var math_1 = require('./pipes/math');
var boolean_1 = require('./pipes/boolean');
var NgPipesModule = (function () {
    function NgPipesModule() {
    }
    NgPipesModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [],
            exports: [array_1.NgArrayPipesModule, string_1.NgStringPipesModule, math_1.NgMathPipesModule, boolean_1.NgBooleanPipesModule]
        }), 
        __metadata('design:paramtypes', [])
    ], NgPipesModule);
    return NgPipesModule;
}());
exports.NgPipesModule = NgPipesModule;
__export(require('./pipes/array'));
__export(require('./pipes/string'));
__export(require('./pipes/math'));
__export(require('./pipes/boolean'));

//# sourceMappingURL=pipes.module.js.map
