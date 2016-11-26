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
var core_1 = require('@angular/core');
var IsNotEqualToPipe = (function () {
    function IsNotEqualToPipe() {
    }
    IsNotEqualToPipe.prototype.transform = function (value, other) {
        return value != other;
    };
    IsNotEqualToPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'isNotEqualTo' }), 
        __metadata('design:paramtypes', [])
    ], IsNotEqualToPipe);
    return IsNotEqualToPipe;
}());
exports.IsNotEqualToPipe = IsNotEqualToPipe;

//# sourceMappingURL=is-not-equal-to.js.map
