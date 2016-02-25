import fetch from 'node-fetch';
import { expect } from 'chai';

describe('promise test', () => {
    it('get github api', () => {
        return fetch('https://api.github.com')
            .then((res) => {
                return res.json();
            }).then((json) => {
                expect(json).to.be.an('object');
            });
    });
});