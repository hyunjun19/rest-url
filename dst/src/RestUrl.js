"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = require("./Map");
var LocationBuilder_1 = require("./LocationBuilder");
var RestUrl = /** @class */ (function () {
    /**
     *
     * @param uri {string} web URI ex) 'https://www.thegajago.com/pages/map?foo=a'
     * @param urlPattern  {string} web URL pattern ex) '/pages/{pageId}'
     */
    function RestUrl(uri, urlPattern) {
        this.pattern = urlPattern;
        this.location = LocationBuilder_1.default
            .newLocation()
            .setUri(this.getDefaultUri(uri))
            .build();
        this.params = this.extractParams(this.location);
    }
    /**
     * set default value from web brower's location.href
     */
    RestUrl.prototype.getDefaultUri = function (uri) {
        if (uri === undefined && location) {
            uri = location.href;
        }
        return uri;
    };
    RestUrl.prototype.extractUrlPatternParams = function (pattern, pathname) {
        if (!pattern)
            return null;
        var routers = pattern.split('/');
        var urls = pathname.split('/');
        var params = {};
        for (var i = 0; i < routers.length; i++) {
            var matches = routers[i].match(/\{(\w+)\}/);
            if (matches) {
                var key = matches[1];
                var val = urls[i];
                Map_1.addMapValue(params, key, val);
            }
        }
        return params;
    };
    RestUrl.prototype.extractSearchParams = function (queryString) {
        if (!queryString)
            return null;
        var params = {};
        var keyVals = queryString.substring(1).split('&');
        for (var i = 0; i < keyVals.length; i++) {
            var keyVal = keyVals[i].split('=');
            var key = keyVal[0];
            var val = keyVal[1];
            Map_1.addMapValue(params, key, val);
        }
        return params;
    };
    /**
     * Location 에서 파라미터 값을 추출한다
     * @return 만약 URL 패턴에서 추출된 키와 queryString에서 추출된 키가 중복되는 경우 URL 패턴에서 추출된 키값으로 덮어쓴다.
     */
    RestUrl.prototype.extractParams = function (location) {
        var urlParam = this.extractUrlPatternParams(this.pattern, location.pathname);
        var searchParam = this.extractSearchParams(this.location.search);
        var mergedParam = {};
        Object.assign(mergedParam, searchParam, urlParam);
        return mergedParam;
    };
    RestUrl.prototype.getLocation = function () {
        return this.location;
    };
    RestUrl.prototype.getParams = function () {
        return this.params;
    };
    RestUrl.prototype.toString = function () {
        return "RestUrl class \npaatern: \"" + this.pattern + "\" \nlocation: " + JSON.stringify(this.location, null, 2) + ") \nparams: " + JSON.stringify(this.params, null, 2);
    };
    return RestUrl;
}());
exports.default = RestUrl;
//# sourceMappingURL=RestUrl.js.map