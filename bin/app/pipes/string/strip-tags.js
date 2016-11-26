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
var StripTagsPipe = (function () {
    function StripTagsPipe() {
    }
    StripTagsPipe.prototype.transform = function (text) {
        var allowedTags = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            allowedTags[_i - 1] = arguments[_i];
        }
        return allowedTags.length > 0
            ? text.replace(new RegExp("<(?!/?(" + allowedTags.join('|') + ")s*/?)[^>]+>", 'g'), '')
            : text.replace(/<(?:.|\s)*?>/g, '');
    };
    StripTagsPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'stripTags' }), 
        __metadata('design:paramtypes', [])
    ], StripTagsPipe);
    return StripTagsPipe;
}());
exports.StripTagsPipe = StripTagsPipe;

//# sourceMappingURL=strip-tags.js.map
