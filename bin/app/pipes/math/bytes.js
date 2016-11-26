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
var utils_1 = require("../utils/utils");
var BytesPipe = (function () {
    function BytesPipe() {
    }
    BytesPipe.prototype.transform = function (value) {
        if (!utils_1.isNumberFinite(value)) {
            return NaN;
        }
        var dictionary = [
            { max: 1e3, type: 'B' },
            { max: 1e6, type: 'KB' },
            { max: 1e9, type: 'MB' },
            { max: 1e12, type: 'GB' }
        ];
        var format = dictionary.find(function (d) { return value < d.max; }) || dictionary[dictionary.length - 1];
        var num = value / (format.max / 1e3);
        return num + " " + format.type;
    };
    BytesPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'bytes' }), 
        __metadata('design:paramtypes', [])
    ], BytesPipe);
    return BytesPipe;
}());
exports.BytesPipe = BytesPipe;

//# sourceMappingURL=bytes.js.map
