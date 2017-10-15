import { expect } from 'chai';
import { Values } from '../src/types';
import Map from '../src/Map';
import Location from '../src/Location';
import RestUrl from '../src/RestUrl';

describe('RestUrl class', () => {
    it('RestUrl.getLocation() 메서드를 호출하면 Location이 반환된다.', () => {
        const uri = 'https://www.thegajago.com/hotel/deals?foo=bar#header';

        const restUrl = new RestUrl(uri, '/{groupCode}/{dealType}');
        const location: Location = restUrl.getLocation();
        
        expect(location).to.deep.equal({
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

    it('RestUrl.getParams() 메서드를 호출하면 파라미터 Map이 반환된다.', () => {
        const uri = 'https://www.thegajago.com/hotel/deals?checkIn=2017-09-27&checkOut=2017-09-28&array1=foo1&array1=bar1&array2[]=foo2&array2[]=bar2#header';

        const restUrl = new RestUrl(uri, '/{groupCode}/{dealType}');
        const params: Map<Values> = restUrl.getParams();
        
        expect(params).to.deep.equal({
            "groupCode": "hotel",
            "dealType": "deals",
            "checkIn": "2017-09-27",
            "checkOut": "2017-09-28",
            "array1": ["foo1", "bar1"],
            "array2": ["foo2", "bar2"]
        });
    });
});
