"use strict";
var ltrim_1 = require("./ltrim");
var repeat_1 = require("./repeat");
var rtrim_1 = require("./rtrim");
var scan_1 = require("./scan");
var shorten_1 = require("./shorten");
var strip_tags_1 = require("./strip-tags");
var trim_1 = require("./trim");
var ucfirst_1 = require("./ucfirst");
var ucwords_1 = require("./ucwords");
exports.STRING_PIPES = [
    ltrim_1.LeftTrimPipe, repeat_1.RepeatPipe, rtrim_1.RightTrimPipe, scan_1.ScanPipe, shorten_1.ShortenPipe,
    strip_tags_1.StripTagsPipe, trim_1.TrimPipe, ucfirst_1.UcFirstPipe, ucwords_1.UcWordsPipe
];

//# sourceMappingURL=string.js.map
