/*
practice

	創建一個陣列型別的變數phone = ['iphone6s', 'iphone6s+']
	使用 expect, assert, should 任一種做 test case

test case:

	1) 陣列長度為 2

	2) 陣列不為空

	3) 陣列內有 Iphone6s+

*/

import { expect } from 'chai';

describe('todo practice', () => {
    let phone = ['Iphone6s', 'Iphone6s+'];

    it('array length', () => {
        expect(phone).to.have.length(2);
    });

    it('array not empty', () => {
        expect(phone).to.not.be.empty;
    });

    it('array include', () => {
        expect(phone).to.include('Iphone6s');
    });
});