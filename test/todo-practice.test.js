/*
practice

    延續 practice2 todo 加入 before
    將 phone 初始值在 before 中處理
*/

// import { expect } from 'chai';
// import { updateDate } from '../src/core.js';

// describe('todo practice', () => {
//     let phone;
//     before(() => {
//         phone = {
//             type   : 'iPhone6s',
//             display: '4-7',
//             storage: '64GB'
//         };
//     });
//     it('has all keys', () => {
//         expect(phone).to.not.be.empty;
//         expect(phone).to.have.all.keys('type', 'display', 'storage');
//     });
//     it('update phone', () => {
//         let update = {
//             type: 'iPhone6sPlus'
//         },
//         newPhone = updateDate(phone, update);
//         expect(newPhone).to.have.deep.property('type', 'iPhone6sPlus');
//     });
// });