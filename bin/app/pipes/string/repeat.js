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
var RepeatPipe = (function () {
    function RepeatPipe() {
    }
    RepeatPipe.prototype.transform = function (str, _a) {
        var _b = _a === void 0 ? [] : _a, _c = _b[0], n = _c === void 0 ? 1 : _c, _d = _b[1], separator = _d === void 0 ? '' : _d;
        var times = ~~n;
        if (times <= 0) {
            throw new RangeError();
        }
        return times == 1 ? str : this.repeat(str, times - 1, separator);
    };
    RepeatPipe.prototype.repeat = function (str, n, separator) {
        return n == 0 ? str : (str + separator + this.repeat(str, n - 1, separator));
    };
    RepeatPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'repeat' }), 
        __metadata('design:paramtypes', [])
    ], RepeatPipe);
    return RepeatPipe;
}());
exports.RepeatPipe = RepeatPipe;

//# sourceMappingURL=repeat.js.map
