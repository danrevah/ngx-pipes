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
var FlattenPipe = (function () {
    function FlattenPipe() {
    }
    FlattenPipe.prototype.transform = function (array, _a) {
        var _b = (_a === void 0 ? [] : _a)[0], shallow = _b === void 0 ? false : _b;
        return shallow
            ? [].concat.apply([], array)
            : this.flatten(array);
    };
    FlattenPipe.prototype.flatten = function (array) {
        var _this = this;
        return array.reduce(function (arr, elm) { return elm instanceof Array ?
            arr.concat(_this.flatten(elm)) : arr.concat(elm); }, []);
    };
    FlattenPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'flatten' }), 
        __metadata('design:paramtypes', [])
    ], FlattenPipe);
    return FlattenPipe;
}());
exports.FlattenPipe = FlattenPipe;

//# sourceMappingURL=flatten.js.map
