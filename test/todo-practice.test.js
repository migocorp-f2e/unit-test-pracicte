/*
practice

    用 fetch 取得 https://api.github.com

test case:

    1) 檢驗 api 的 result 不能返回空 object

    2) 檢驗 api 的 result 內容必須要有兩個 key > 'current_user_url', 'emails_url'

*/

import fetch from 'node-fetch';
import { expect } from 'chai';

describe('todo practice', () => {
    let result;
    before(() => {
        return fetch('https://api.github.com')
            .then((res) => {
                return res.json();
            }).then((json) => {
                result = json;
            });
    });
    it('api result length', () => {
        expect(result).to.not.be.empty;
    });
    it('api result keys', () => {
        expect(result).to.contain.all.keys(['current_user_url', 'emails_url']);
    })
});