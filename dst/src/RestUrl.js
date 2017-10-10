"use strict";
exports.__esModule = true;
var LocationBuilder_1 = require("./LocationBuilder");
var RestUrl = /** @class */ (function () {
    /**
     *
     * @param uri {string} web URI ex) 'https://www.thegajago.com/pages/map?foo=a'
     * @param urlPattern  {string} web URL pattern ex) '/pages/{pageId}'
     */
    function RestUrl(uri, urlPattern) {
        this.pattern = urlPattern;
        this.location = LocationBuilder_1["default"]
            .newLocation()
            .setUri(this.getDefaultUri(uri))
            .build();
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
    RestUrl.prototype.getParams = function () {
        return {};
    };
    RestUrl.prototype.toString = function () {
        return "RestUrl(\"" + this.pattern + "\", \"" + this.location + "\")";
    };
    return RestUrl;
}());
exports["default"] = RestUrl;
//# sourceMappingURL=RestUrl.js.map