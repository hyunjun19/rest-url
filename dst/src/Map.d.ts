/**
 * TODO Map interface and utils function ===> Map class
 */
export default interface Map<T> {
    [key: string]: T;
}
/**
 * add value to Map.
 * @param key if key is null or undefined, this method swallow error and fail.
 * @param value if value is undefined, this method swallow error and fail.
 */
export declare function addMapValue(map: any, key: string, value: any): void;
export declare function removeMapValue(map: any, key: string): void;
