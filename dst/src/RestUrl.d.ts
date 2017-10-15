import { Values } from './types';
import Map from './Map';
import Location from './Location';
export default class RestUrl {
    private pattern;
    private location;
    private params;
    /**
     *
     * @param uri {string} web URI ex) 'https://www.thegajago.com/pages/map?foo=a'
     * @param urlPattern  {string} web URL pattern ex) '/pages/{pageId}'
     */
    constructor(uri?: string, urlPattern?: string);
    /**
     * set default value from web brower's location.href
     */
    private getDefaultUri(uri?);
    private extractUrlPatternParams(pattern, pathname);
    private extractSearchParams(queryString);
    /**
     * Location 에서 파라미터 값을 추출한다
     * @return 만약 URL 패턴에서 추출된 키와 queryString에서 추출된 키가 중복되는 경우 URL 패턴에서 추출된 키값으로 덮어쓴다.
     */
    private extractParams(location);
    getLocation(): Location;
    getParams(): Map<Values>;
    toString(): string;
}
