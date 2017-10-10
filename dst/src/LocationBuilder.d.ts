import Location from './Location';
export default class LocationBuilder {
    private readonly uriRegex;
    private uri;
    private constructor();
    static newLocation(): LocationBuilder;
    setUri(uri: string): this;
    build(): Location;
}
