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
var ucwords_1 = require('./ucwords');
var ltrim_1 = require('./ltrim');
var repeat_1 = require('./repeat');
var rtrim_1 = require('./rtrim');
var scan_1 = require('./scan');
var shorten_1 = require('./shorten');
var strip_tags_1 = require('./strip-tags');
var trim_1 = require('./trim');
var ucfirst_1 = require('./ucfirst');
exports.STRING_PIPES = [
    ltrim_1.LeftTrimPipe, repeat_1.RepeatPipe, rtrim_1.RightTrimPipe, scan_1.ScanPipe, shorten_1.ShortenPipe,
    strip_tags_1.StripTagsPipe, trim_1.TrimPipe, ucfirst_1.UcFirstPipe, ucwords_1.UcWordsPipe
];
var NgStringPipesModule = (function () {
    function NgStringPipesModule() {
    }
    NgStringPipesModule = __decorate([
        core_1.NgModule({
            declarations: exports.STRING_PIPES.slice(),
            imports: [],
            exports: exports.STRING_PIPES.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], NgStringPipesModule);
    return NgStringPipesModule;
}());
exports.NgStringPipesModule = NgStringPipesModule;
__export(require('./ucwords'));
__export(require('./ltrim'));
__export(require('./repeat'));
__export(require('./rtrim'));
__export(require('./scan'));
__export(require('./shorten'));
__export(require('./strip-tags'));
__export(require('./trim'));
__export(require('./ucfirst'));

//# sourceMappingURL=index.js.map
