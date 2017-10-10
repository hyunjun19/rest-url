"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
var LocationBuilder_1 = require("../src/LocationBuilder");
describe('LocationBuilder class', function () {
    it('Location 인터페이스에 맞는 인스턴스를 리턴', function () {
        var uri = 'https://www.thegajago.com/api/v4/hotel/deals?pageNumber=0&pageSize=20&sort=BEST&checkIn=2017-09-27&checkOut=2017-09-28&adultCount=3&regionId=1261&typeIds=1644%2C1645&isSearchable=true#header';
        var location = LocationBuilder_1["default"]
            .newLocation()
            .setUri(uri)
            .build();
        chai_1.expect(location.origin).to.equal('https://www.thegajago.com');
        chai_1.expect(location.protocol).to.equal('https:');
        chai_1.expect(location.host).to.equal('www.thegajago.com');
        chai_1.expect(location.hostname).to.equal('www.thegajago.com');
        chai_1.expect(location.href).to.equal('https://www.thegajago.com/api/v4/hotel/deals?pageNumber=0&pageSize=20&sort=BEST&checkIn=2017-09-27&checkOut=2017-09-28&adultCount=3&regionId=1261&typeIds=1644%2C1645&isSearchable=true#header');
        chai_1.expect(location.pathname).to.equal('/api/v4/hotel/deals');
        chai_1.expect(location.port).to.equal(80);
        chai_1.expect(location.search).to.equal('?pageNumber=0&pageSize=20&sort=BEST&checkIn=2017-09-27&checkOut=2017-09-28&adultCount=3&regionId=1261&typeIds=1644%2C1645&isSearchable=true');
        chai_1.expect(location.hash).to.equal('#header');
    });
});
//# sourceMappingURL=LocationBuilder.test.js.map