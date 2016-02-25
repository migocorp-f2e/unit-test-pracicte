/*
practice

    創建一個 object:
    phone = {
        type   : 'iPhone6s',
        display: '4-7',
        storage: '64GB'
    }
    在 /src 建立 core.js 創建一個 updateDate 的方法

test case:

    1) phone 不能為空 Object , 且必須要有 type, display, storage 這些keys

    2) 更新 phone 的 type = 'iPhone6sPlus' 並通過 test case
*/

// import { expect } from 'chai';
// import { updateDate } from '../src/core.js';

// describe('todo practice', () => {
//     let phone = {
//         type   : 'iPhone6s',
//         display: '4-7',
//         storage: '64GB'
//     };

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