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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var max_1 = require('./max');
var min_1 = require('./min');
var percentage_1 = require('./percentage');
var sum_1 = require('./sum');
var floor_1 = require('./floor');
var round_1 = require('./round');
var sqrt_1 = require('./sqrt');
var pow_1 = require('./pow');
var ceil_1 = require('./ceil');
var degrees_1 = require('./degrees');
var bytes_1 = require('./bytes');
var radians_1 = require('./radians');
exports.MATH_PIPES = [
    max_1.MaxPipe, min_1.MinPipe, percentage_1.PercentagePipe, sum_1.SumPipe, floor_1.FloorPipe, round_1.RoundPipe, sqrt_1.SqrtPipe, pow_1.PowerPipe,
    ceil_1.CeilPipe, degrees_1.DegreesPipe, bytes_1.BytesPipe, radians_1.RadiansPipe
];
var NgMathPipesModule = (function () {
    function NgMathPipesModule() {
    }
    NgMathPipesModule = __decorate([
        core_1.NgModule({
            declarations: exports.MATH_PIPES.slice(),
            imports: [],
            exports: exports.MATH_PIPES.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], NgMathPipesModule);
    return NgMathPipesModule;
}());
exports.NgMathPipesModule = NgMathPipesModule;
__export(require('./max'));
__export(require('./min'));
__export(require('./percentage'));
__export(require('./sum'));
__export(require('./floor'));
__export(require('./round'));
__export(require('./sqrt'));
__export(require('./pow'));
__export(require('./ceil'));
__export(require('./degrees'));
__export(require('./bytes'));
__export(require('./radians'));

//# sourceMappingURL=index.js.map
