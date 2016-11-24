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
var UnionPipe = (function () {
    function UnionPipe() {
    }
    UnionPipe.prototype.transform = function (arr, args) {
        if (args === void 0) { args = []; }
        return args.reduce(function (newArr, currArr) {
            return newArr.concat(currArr.reduce(function (noDupArr, curr) {
                return ((!~noDupArr.indexOf(curr) && !~newArr.indexOf(curr))
                    ? noDupArr.push(curr)
                    : noDupArr, noDupArr);
            }, []));
        }, arr);
    };
    UnionPipe = __decorate([
        core_1.Injectable(),
        core_1.Pipe({ name: 'union' }), 
        __metadata('design:paramtypes', [])
    ], UnionPipe);
    return UnionPipe;
}());
exports.UnionPipe = UnionPipe;

//# sourceMappingURL=union.js.map
