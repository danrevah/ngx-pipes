"use strict";
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
exports.ARRAY_PIPES = [
    diff_1.DiffPipe, flatten_1.FlattenPipe, initial_1.InitialPipe, intersection_1.IntersectionPipe, reverse_1.ReversePipe, tail_1.TailPipe,
    truthify_1.TrurthifyPipe, union_1.UnionPipe, unique_1.UniquePipe, without_1.WithoutPipe, pluck_1.PluckPipe, shuffle_1.ShufflePipe,
    every_1.EveryPipe, some_1.SomePipe
];

//# sourceMappingURL=array.js.map
