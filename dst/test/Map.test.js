"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Map_1 = require("../src/Map");
describe('Map interface', function () {
    it('addMapValue 추가하려는 키에 값이 존재하면 Array로 값을 변환해서 넣는다.', function () {
        var key = 'tk-1';
        var map = (_a = {},
            _a[key] = 'one',
            _a);
        Map_1.addMapValue(map, key, 'two');
        chai_1.expect(map[key]).to.instanceOf(Array);
        var _a;
    });
    it('addMapValue 등록하려는 값이 Array이면 Array에 값을 추가로 넣는다.', function () {
        var key = 'tk-2';
        var map = (_a = {},
            _a[key] = ['one'],
            _a);
        Map_1.addMapValue(map, key, 'two');
        chai_1.expect(map[key]).to.instanceOf(Array);
        var _a;
    });
    it('addMapValue 등록하려는 키가 [] 문자열로 끝나면 키에서 [] 문자열을 제거하고 값을 배열로 넣는다.', function () {
        var key = 'tk-3[]';
        var key1 = key.replace('[]', '');
        var map = {};
        Map_1.addMapValue(map, key, 'one');
        chai_1.expect(map[key1]).to.instanceOf(Array);
        Map_1.addMapValue(map, key, 'two');
        chai_1.expect(map[key1]).to.deep.equal(['one', 'two']);
    });
});
//# sourceMappingURL=Map.test.js.map