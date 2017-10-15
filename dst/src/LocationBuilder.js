"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LocationBuilder = /** @class */ (function () {
    function LocationBuilder() {
        this.uriRegex = /((https?:)(\/\/\/?)([\w]*(?::[\w]*)?@)?([\d\w\.-]+)(?::(\d+))?)?([\/\\\w\.()-]*)?(?:([?][^#]*)?(#.*)?)*/gi;
    }
    LocationBuilder.newLocation = function () {
        return new LocationBuilder();
    };
    LocationBuilder.prototype.setUri = function (uri) {
        this.uri = uri;
        return this;
    };
    LocationBuilder.prototype.build = function () {
        var matches = this.uriRegex.exec(this.uri);
        if (matches === null)
            return null;
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
        };
    };
    return LocationBuilder;
}());
exports.default = LocationBuilder;
//# sourceMappingURL=LocationBuilder.js.map