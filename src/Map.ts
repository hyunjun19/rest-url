/**
 * TODO Map interface and utils function ===> Map class
 */
export default interface Map<T> {
    [key:string]: T
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function isArrayKey(key: string): boolean {
    if (!key) return false;

    return key.indexOf('[]') === (key.length - 2);
}

export function addMapValue(map, key: string, value): boolean {
    try {
        if (!key) throw new Error(`key must be exist. key: '${key}'`);
        if (value === undefined) throw new Error(`value can not be undefined.`);

        const isNeedURLDecode = value.indexOf('%') > -1;
        const decodedValue = isNeedURLDecode ? decodeURIComponent(value) : value;

        const isArrayVal = isArray(map[key]);
        const isExistKey = key in map;

        if (isArrayVal || isExistKey || isArrayKey(key)) {
            let origin = map[key] || [];

            if (isArray(origin) === false) {
                origin = [origin];
            }

            origin.push(decodedValue);
            
            map[key] = origin;
        } else {
            map[key] = decodedValue;
        }

        return true;
    } catch (error) {
        console.error('addMapValue error', error);
        return false;
    }
}

export function removeMapValue(map, key: string) {
    delete map[key];
}
