"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
function isArrayKey(key) {
    if (!key)
        return false;
    return key.indexOf('[]') === (key.length - 2);
}
function addArrayValue(map, key, value) {
    var origin = map[key] || [];
    if (isArray(origin) === false) {
        origin = [origin];
    }
    origin.push(value);
    map[key] = origin;
}
/**
 * add value to Map.
 * @param key if key is null or undefined, this method swallow error and fail.
 * @param value if value is undefined, this method swallow error and fail.
 */
function addMapValue(map, key, value) {
    if (!key)
        return;
    if (value === undefined)
        return;
    var isNeedURLDecode = value.indexOf('%') > -1;
    var decodedValue = isNeedURLDecode ? decodeURIComponent(value) : value;
    var isArrayVal = isArray(map[key]);
    var isExistKey = key in map;
    if (isArrayVal || isExistKey) {
        addArrayValue(map, key, decodedValue);
    }
    else if (isArrayKey(key)) {
        var arrayKey = key.substring(0, key.length - 2);
        addArrayValue(map, arrayKey, decodedValue);
    }
    else {
        map[key] = decodedValue;
    }
}
exports.addMapValue = addMapValue;
function removeMapValue(map, key) {
    delete map[key];
}
exports.removeMapValue = removeMapValue;
//# sourceMappingURL=Map.js.map