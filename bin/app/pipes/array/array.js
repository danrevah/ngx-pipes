"use strict";
var diff_1 = require("./diff");
var initial_1 = require("./initial");
var flatten_1 = require("./flatten");
var intersection_1 = require("./intersection");
var range_1 = require("./range");
var reverse_1 = require("./reverse");
var tail_1 = require("./tail");
var truthify_1 = require("./truthify");
var union_1 = require("./union");
var unique_1 = require("./unique");
var without_1 = require("./without");
exports.ARRAY_PIPES = [
    diff_1.DiffPipe, flatten_1.FlattenPipe, initial_1.InitialPipe, intersection_1.IntersectionPipe, range_1.RangePipe, reverse_1.ReversePipe, tail_1.TailPipe,
    truthify_1.TrurthifyPipe, union_1.UnionPipe, unique_1.UniquePipe, without_1.WithoutPipe
];

//# sourceMappingURL=array.js.map
