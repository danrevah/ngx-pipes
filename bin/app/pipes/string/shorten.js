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
var ShortenPipe = (function () {
    function ShortenPipe() {
    }
    ShortenPipe.prototype.transform = function (text, length, suffix, wordBreak) {
        if (length === void 0) { length = 0; }
        if (suffix === void 0) { suffix = ''; }
        if (wordBreak === void 0) { wordBreak = true; }
        return (text.length > length)
            ? (wordBreak
                ? (text.slice(0, length) + suffix)
                : (!!~text.indexOf(' ', length)
                    ? (text.slice(0, text.indexOf(' ', length)) + suffix)
                    : text)) : text;
    };
    ShortenPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'shorten' }), 
        __metadata('design:paramtypes', [])
    ], ShortenPipe);
    return ShortenPipe;
}());
exports.ShortenPipe = ShortenPipe;

//# sourceMappingURL=shorten.js.map
