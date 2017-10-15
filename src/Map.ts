/**
 * TODO Map interface and utils function ===> Map class
 */
export default interface Map<T> {
    [key:string]: T
}

function isArray(obj): boolean {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function isArrayKey(key: string): boolean {
    if (!key) return false;

    return key.indexOf('[]') === (key.length - 2);
}

function addArrayValue(map, key, value): void {
    let origin = map[key] || [];
    
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
export function addMapValue(map, key: string, value): void {
    if (!key) return;
    if (value === undefined) return;

    const isNeedURLDecode = value.indexOf('%') > -1;
    const decodedValue = isNeedURLDecode ? decodeURIComponent(value) : value;

    const isArrayVal = isArray(map[key]);
    const isExistKey = key in map;

    if (isArrayVal || isExistKey) {
        addArrayValue(map, key, decodedValue);
    } else if (isArrayKey(key)) {
        const arrayKey = key.substring(0, key.length - 2);
        addArrayValue(map, arrayKey, decodedValue);
    } else {
        map[key] = decodedValue;
    }
}

export function removeMapValue(map, key: string): void {
    delete map[key];
}
