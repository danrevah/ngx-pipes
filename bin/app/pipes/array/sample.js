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
var SamplePipe = (function () {
    function SamplePipe() {
    }
    SamplePipe.prototype.transform = function (arr, len) {
        if (len === void 0) { len = 1; }
        if (!Array.isArray(arr)) {
            return arr;
        }
        var sample = [];
        for (var i = 0, tmp = arr.slice(), l = len < tmp.length ? len : tmp.length; i < l; ++i) {
            var j = Math.floor(Math.random() * tmp.length);
            sample = sample.concat(tmp.splice(j, 1));
        }
        return sample;
    };
    SamplePipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'sample' }), 
        __metadata('design:paramtypes', [])
    ], SamplePipe);
    return SamplePipe;
}());
exports.SamplePipe = SamplePipe;

//# sourceMappingURL=sample.js.map
