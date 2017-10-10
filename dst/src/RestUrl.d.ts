export default class RestUrl {
    private pattern;
    private location;
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
    getParams(): {
        [key: string]: any;
    };
    toString(): string;
}
