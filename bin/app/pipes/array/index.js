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
var diff_1 = require('./diff');
var initial_1 = require('./initial');
var flatten_1 = require('./flatten');
var intersection_1 = require('./intersection');
var reverse_1 = require('./reverse');
var tail_1 = require('./tail');
var truthify_1 = require('./truthify');
var union_1 = require('./union');
var unique_1 = require('./unique');
var without_1 = require('./without');
var pluck_1 = require('./pluck');
var shuffle_1 = require('./shuffle');
var every_1 = require('./every');
var some_1 = require('./some');
var sample_1 = require('./sample');
var core_1 = require('@angular/core');
var ARRAY_PIPES = [
    diff_1.DiffPipe, flatten_1.FlattenPipe, initial_1.InitialPipe, intersection_1.IntersectionPipe, reverse_1.ReversePipe, tail_1.TailPipe,
    truthify_1.TrurthifyPipe, union_1.UnionPipe, unique_1.UniquePipe, without_1.WithoutPipe, pluck_1.PluckPipe, shuffle_1.ShufflePipe,
    every_1.EveryPipe, some_1.SomePipe, sample_1.SamplePipe
];
var NgArrayPipesModule = (function () {
    function NgArrayPipesModule() {
    }
    NgArrayPipesModule = __decorate([
        core_1.NgModule({
            declarations: ARRAY_PIPES.slice(),
            imports: [],
            exports: ARRAY_PIPES.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], NgArrayPipesModule);
    return NgArrayPipesModule;
}());
exports.NgArrayPipesModule = NgArrayPipesModule;
__export(require('./diff'));
__export(require('./initial'));
__export(require('./flatten'));
__export(require('./intersection'));
__export(require('./reverse'));
__export(require('./tail'));
__export(require('./truthify'));
__export(require('./union'));
__export(require('./unique'));
__export(require('./without'));
__export(require('./pluck'));
__export(require('./shuffle'));
__export(require('./every'));
__export(require('./some'));
__export(require('./sample'));

//# sourceMappingURL=index.js.map
