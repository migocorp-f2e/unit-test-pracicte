import { expect } from 'chai';
import { updateDate } from '../src/core.js';

describe('practice 2', () => {
    let book = {
        name : 'unit test',
        price: 100
    };
    it('is object', () => {
        expect(book).to.be.an('object');
    });
    it('object update', () => {
        let update = {
            name: 'redux unit test',
            author: {
                firstName: 'Albert',
                lastName : 'Einstein'
            }
        },
        newBooks = updateDate(book, update);

        expect(newBooks).to.deep.equal({
            name  : 'redux unit test',
            price : 100,
            author: {
                firstName: 'Albert',
                lastName : 'Einstein'
            }
        });

        expect(newBooks).to.have.deep.property('author.lastName', 'Einstein');

    });
});