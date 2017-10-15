"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var RestUrl_1 = require("../src/RestUrl");
describe('RestUrl class', function () {
    it('RestUrl.getLocation() 메서드를 호출하면 Location이 반환된다.', function () {
        var uri = 'https://www.thegajago.com/hotel/deals?foo=bar#header';
        var restUrl = new RestUrl_1.default(uri, '/{groupCode}/{dealType}');
        var location = restUrl.getLocation();
        chai_1.expect(location).to.deep.equal({
            "origin": "https://www.thegajago.com",
            "protocol": "https:",
            "host": "www.thegajago.com",
            "hostname": "www.thegajago.com",
            "href": "https://www.thegajago.com/hotel/deals?foo=bar#header",
            "pathname": "/hotel/deals",
            "port": 80,
            "search": "?foo=bar",
            "hash": "#header"
        });
    });
    it('RestUrl.getParams() 메서드를 호출하면 파라미터 Map이 반환된다.', function () {
        var uri = 'https://www.thegajago.com/hotel/deals?checkIn=2017-09-27&checkOut=2017-09-28&array1=foo1&array1=bar1&array2[]=foo2&array2[]=bar2#header';
        var restUrl = new RestUrl_1.default(uri, '/{groupCode}/{dealType}');
        var params = restUrl.getParams();
        chai_1.expect(params).to.deep.equal({
            "groupCode": "hotel",
            "dealType": "deals",
            "checkIn": "2017-09-27",
            "checkOut": "2017-09-28",
            "array1": ["foo1", "bar1"],
            "array2": ["foo2", "bar2"]
        });
    });
});
//# sourceMappingURL=RestUrl.test.js.map