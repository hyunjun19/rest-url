import { expect } from 'chai';
import RestUrl from '../src/RestUrl';

describe('RestUrl class', () => {
    it('RestUrl.getParams() 메서드를 호출하면 ValueMap이 반환된다.', () => {
        const uri = 'https://www.thegajago.com/api/v4/hotel/deals?pageNumber=0&pageSize=20&sort=BEST&checkIn=2017-09-27&checkOut=2017-09-28&adultCount=3&regionId=1261&typeIds=1644%2C1645&isSearchable=true#header';

        const restUrl = new RestUrl(uri, '/api/v4/{groupCode}/{dealType}');
        const params = restUrl.getParams();
        console.log('params', params);
        console.log('restUrl', restUrl.toString());
        // expect(location.origin).to.equal('https://www.thegajago.com');
    });
});
