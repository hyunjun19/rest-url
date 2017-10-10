import { expect } from 'chai';
import Location from '../src/Location';
import LocationBuilder from '../src/LocationBuilder';

describe('LocationBuilder class', () => {
    it('Location 인터페이스에 맞는 인스턴스를 리턴', () => {
        const uri = 'https://www.thegajago.com/api/v4/hotel/deals?pageNumber=0&pageSize=20&sort=BEST&checkIn=2017-09-27&checkOut=2017-09-28&adultCount=3&regionId=1261&typeIds=1644%2C1645&isSearchable=true#header';
        const location = LocationBuilder
            .newLocation()
            .setUri(uri)
            .build();

        expect(location.origin).to.equal('https://www.thegajago.com');
        expect(location.protocol).to.equal('https:');
        expect(location.host).to.equal('www.thegajago.com');
        expect(location.hostname).to.equal('www.thegajago.com');
        expect(location.href).to.equal('https://www.thegajago.com/api/v4/hotel/deals?pageNumber=0&pageSize=20&sort=BEST&checkIn=2017-09-27&checkOut=2017-09-28&adultCount=3&regionId=1261&typeIds=1644%2C1645&isSearchable=true#header');
        expect(location.pathname).to.equal('/api/v4/hotel/deals');
        expect(location.port).to.equal(80);
        expect(location.search).to.equal('?pageNumber=0&pageSize=20&sort=BEST&checkIn=2017-09-27&checkOut=2017-09-28&adultCount=3&regionId=1261&typeIds=1644%2C1645&isSearchable=true');
        expect(location.hash).to.equal('#header');
    });
});
