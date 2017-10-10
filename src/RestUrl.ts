import Location from './Location';
import LocationBuilder from './LocationBuilder';

export default class RestUrl {
    private pattern: string;
    private location: Location;

    /**
     * 
     * @param uri {string} web URI ex) 'https://www.thegajago.com/pages/map?foo=a'
     * @param urlPattern  {string} web URL pattern ex) '/pages/{pageId}'
     */
    constructor(uri?: string, urlPattern?: string) {
        this.pattern = urlPattern;

        this.location = LocationBuilder
            .newLocation()
            .setUri(this.getDefaultUri(uri))
            .build();
    }

    /**
     * set default value from web brower's location.href
     */
    private getDefaultUri(uri?: string): string {
        if (uri === undefined && location) {
            uri = location.href;
        }
        
        return uri;
    }

    public getParams(): { [key:string]: any; } {
        return {};
    }

    public toString() {
        return `RestUrl("${this.pattern}", "${this.location}")`;
    }
}
