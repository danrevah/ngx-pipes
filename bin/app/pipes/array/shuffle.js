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
var ShufflePipe = (function () {
    function ShufflePipe() {
    }
    // Using a version of the Fisher-Yates shuffle algorithm
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    ShufflePipe.prototype.transform = function (arr) {
        if (!Array.isArray(arr)) {
            return arr;
        }
        var shuffled = Array.from(arr);
        for (var i = 0, n = arr.length - 1, l = n - 1; i < l; ++i) {
            var j = Math.floor(Math.random() * (n - i + 1)) + i;
            _a = [shuffled[j], shuffled[i]], shuffled[i] = _a[0], shuffled[j] = _a[1];
        }
        return shuffled;
        var _a;
    };
    ShufflePipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'shuffle' }), 
        __metadata('design:paramtypes', [])
    ], ShufflePipe);
    return ShufflePipe;
}());
exports.ShufflePipe = ShufflePipe;

//# sourceMappingURL=shuffle.js.map
