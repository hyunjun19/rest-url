import ValueMap, { Values } from './ValueMap';
import Location from './Location';
import LocationBuilder from './LocationBuilder';

export default class RestUrl {
    private pattern: string;
    private location: Location;
    private params: ValueMap;

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

    private extractParams(location: Location): ValueMap {
        // 1. location.pathname => urlPattern
        // 2. location.search => split
        // 3. key[] make array

        return null;
    }

    private extractUrlPatternParams() {
        
    }

    private extractSearchParams() {

    }

    private getArrayOrSingleValues(): Values {
        
        return null;
    }

    public getParams(): ValueMap {
        return this.params;
    }

    public toString() {
        return `RestUrl("${this.pattern}", ${JSON.stringify(this.location, null, 2)})`;
    }
}
