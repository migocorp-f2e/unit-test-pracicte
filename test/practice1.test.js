import { expect, assert } from 'chai';

describe('practice basis', () => {
    describe('expect', () => {
        it('is string', () => {
            let foo = 'foo';
            expect(foo).to.be.a('string');
            expect(foo).to.equal('foo');
        });
    });

    describe('should', () => {
        it('is number', () => {
            let should = require('chai').should();
            let num = 10;
            num.should.be.a('number');
            num.should.equal(10);
        });
    });

    describe('assert', () => {
        it('is boolean', () => {
            let isMe = true;
            assert.typeOf(isMe, 'boolean');
            assert.equal(isMe, true);
        });
    });
});



