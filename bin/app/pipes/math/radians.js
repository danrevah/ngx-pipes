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
var utils_1 = require('../utils/utils');
var RadiansPipe = (function () {
    function RadiansPipe() {
    }
    RadiansPipe.prototype.transform = function (degrees) {
        if (!utils_1.isNumberFinite(degrees)) {
            return NaN;
        }
        return degrees * Math.PI / 180;
    };
    RadiansPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'radians' }), 
        __metadata('design:paramtypes', [])
    ], RadiansPipe);
    return RadiansPipe;
}());
exports.RadiansPipe = RadiansPipe;

//# sourceMappingURL=radians.js.map
