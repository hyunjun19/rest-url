import { expect } from 'chai';
import { Values } from '../src/types';
import Map, { addMapValue } from '../src/Map';

describe('Map interface', () => {
    it('addMapValue 추가하려는 키에 값이 존재하면 Array로 값을 변환해서 넣는다.', () => {
        const key = 'tk-1';
        const map: Map<Values> = {
            [key]: 'one'
        };

        addMapValue(map, key, 'two')
        expect(map[key]).to.instanceOf(Array);
    });

    it('addMapValue 등록하려는 값이 Array이면 Array에 값을 추가로 넣는다.', () => {
        const key = 'tk-2';
        const map: Map<Values> = {
            [key]: ['one']
        };

        addMapValue(map, key, 'two');
        expect(map[key]).to.instanceOf(Array);
    });

    it('addMapValue 등록하려는 키가 [] 문자열로 끝나면 값을 배열로 넣는다.', () => {
        const key = 'tk-3[]';
        const map: Map<Values> = {};

        addMapValue(map, key, 'one');
        expect(map[key]).to.instanceOf(Array);

        addMapValue(map, key, 'two');
        expect(map[key]).to.deep.equal(['one', 'two']);
    });
});
