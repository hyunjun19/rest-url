import { Values } from './types';
import Map, { addMapValue } from './Map';
import Location from './Location';
import LocationBuilder from './LocationBuilder';

export default class RestUrl {
    private pattern: string;
    private location: Location;
    private params: Map<Values>;

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
        this.params = this.extractParams(this.location);
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

    private extractUrlPatternParams(pattern: string, pathname: string): Map<Values> {
        if (!pattern) return null;

        const routers = pattern.split('/');
        const urls = pathname.split('/');
    
        const params = {};
        for (let i = 0; i < routers.length; i++) {
          const matches = routers[i].match(/\{(\w+)\}/);
          if (matches) {
            const key = matches[1];
            const val = urls[i];
            addMapValue(params, key, val);
          }
        }

        return params;
    }

    private extractSearchParams(queryString: string): Map<Values> {
        if (!queryString) return null;
    
        const params = {};
        const keyVals = queryString.substring(1).split('&');
        for (let i = 0; i < keyVals.length; i++) {
          var keyVal = keyVals[i].split('=');
          var key = keyVal[0];
          var val = keyVal[1];
    
          addMapValue(params, key, val);
        }

        return params;
    }

    /**
     * Location 에서 파라미터 값을 추출한다
     * @return 만약 URL 패턴에서 추출된 키와 queryString에서 추출된 키가 중복되는 경우 URL 패턴에서 추출된 키값으로 덮어쓴다.
     */
    private extractParams(location: Location): Map<Values> {
        const urlParam = this.extractUrlPatternParams(this.pattern, location.pathname);
        const searchParam = this.extractSearchParams(this.location.search);
        let mergedParam = {};

        Object.assign(mergedParam, searchParam, urlParam);
        return mergedParam;
    }

    public getLocation(): Location {
        return this.location;
    }

    public getParams(): Map<Values> {
        return this.params;
    }

    public toString() {
        return `RestUrl class \npaatern: "${this.pattern}" \nlocation: ${JSON.stringify(this.location, null, 2)}) \nparams: ${JSON.stringify(this.params, null, 2)}`;
    }
}
