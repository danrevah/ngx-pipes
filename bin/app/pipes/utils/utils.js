"use strict";
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
exports.isNumberFinite = isNumberFinite;

//# sourceMappingURL=utils.js.map
