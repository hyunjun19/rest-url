export type Values = string | number | boolean | string[] | number[] | boolean[];

export default interface ValueMap {
    [key:string]: Values
}
