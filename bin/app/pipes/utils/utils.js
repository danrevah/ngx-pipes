"use strict";
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
exports.isNumberFinite = isNumberFinite;
function extractProperty(obj, map) {
    var keys = map.split('.');
    var key = keys.shift();
    return keys.length > 0 && !isUndefined(obj[key])
        ? extractProperty(obj[key], keys.join('.'))
        : obj[key];
}
exports.extractProperty = extractProperty;

//# sourceMappingURL=utils.js.map
