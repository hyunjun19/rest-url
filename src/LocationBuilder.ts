import Location from './Location';

export default class LocationBuilder {
    private readonly uriRegex = /((https?:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w\.-]+)(?::(\d+))?)?([\/\\\w\.()-]*)?(?:([?][^#]*)?(#.*)?)*/gi;
    private uri;

    private constructor() {}

    public static newLocation(): LocationBuilder {
        return new LocationBuilder();
    }

    public setUri(uri: string) {
        this.uri = uri;

        return this;
    }

    public build(): Location {
        const matches = this.uriRegex.exec(this.uri);

        if (matches === null) return null;

        return {
            origin: matches[1],
            protocol: matches[2],
            host: matches[5],
            hostname: matches[5],
            href: this.uri,
            pathname: matches[7] || '',
            port: 80,
            search: matches[8] || '',
            hash: matches[9] || ''
        }
    }

}
