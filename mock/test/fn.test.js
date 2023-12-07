/**
 * @author KIM DOWON
 * @date Dec 2023
 * @description Mock함수에 대한 학습진행
 *
 * mock or mock up : 모형, 모의
 * mock함수에는 몇번 호출되었는지 어떤 인자를 받는지 전부 저장을 한다.
 * mock.calls : mock함수에 저장된 값을 불러서 사용할 수 있습니다.
 * mock.results : mock함수가 가지고 있는 저장된 결과값을 볼 수 있습니다.
 * mockReturnValueOnce : mock함수를 실행할 때마다 각각 다른 값을 return할 수 있습니다.
 * mockReturnValue : ReturnValueOnce의 마지막에 작성하여 return될 수 있게 합니다.
 */

//-------------------------TEST 진행 또는 하나씩 확인하고 싶을 때는 하나씩 주석을 제거하여 진행해보세요 -------------------------

// // mock함수를 먼저 setting한다
// const mockFn = jest.fn();
// mockFn();
// mockFn(1); //인수를 넘길 수도 있다.

// //mock함수의 기본 세팅
// test('test', () => {
//     console.log(mockFn.mock.calls);
//     expect('test').toBe('test');
// });

// // mock함수의 calls
// test('2번호출해서 길이를 측정합니다', () => {
//     expect(mockFn.mock.calls.length).toBe(2);
// });
// test('2번호출해서 호출되어 전달된 첫번째 인자는 1입니다.', () => {
//     expect(mockFn.mock.calls[1][0]).toBe(1);
// });

//#############################################################################################

// // mock함수를 활용하여 실제 함수에서 사용하는 방법
// describe('mock함수 calls test합니다', () => {
//     const mockFn = jest.fn();

//     function forEachAdd(arr) {
//         arr.forEach((num) => {
//             // mock함수를 활용한 num이 1씩 증가하는 데이터를 생성
//             mockFn(num + 1);
//         });
//     }
//     forEachAdd([10, 20, 30]);

//     it('함수를 3번 호출합니다.', () => {
//         expect(mockFn.mock.calls.length).toBe(3);
//     });

//     it('forEachAdd함수에서 나온 결과값은 1씩 증가하는 값입니다.', () => {
//         expect(mockFn.mock.calls[0][0]).toBe(11);
//         expect(mockFn.mock.calls[1][0]).toBe(21);
//         expect(mockFn.mock.calls[2][0]).toBe(31);
//     });
// });

//#############################################################################################

// describe('mock함수 results test합니다', () => {
//     const mockFn = jest.fn((num) => num + 1);

//     mockFn(10);
//     mockFn(20);
//     mockFn(30);

//     it('result에 대해 확인합니다.', () => {
//         // console.log(mockFn.mock.results);
//         expect(mockFn.mock.results[0].value).toBe(11);
//         expect(mockFn.mock.results[1].value).toBe(21);
//         expect(mockFn.mock.results[2].value).toBe(31);
//     });
// });

//#############################################################################################

// describe('mock함수 results test합니다', () => {
//     const mockFn = jest.fn();
//     // mockFn
//     //     .mockReturnValueOnce(true)
//     //     .mockReturnValueOnce(false)
//     //     .mockReturnValueOnce(true)
//     //     .mockReturnValueOnce(false)
//     //     .mockReturnValue(true);

//     //비동기 함수 처리하기
//     mockFn.mockResolvedValue({ name: 'Mike' });

//     // // 홀수만 return하는 함수
//     // const results = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

//     // it('홀수는 1,3,5입니다', () => {
//     //     // console.log(mockFn.mock.results);
//     //     expect(results).toStrictEqual([1, 3, 5]);
//     // });

//     it('출력되어야 하는 값은 Mike입니다.', () => {
//         mockFn().then((res) => {
//             expect(res.name).toBe('Mike');
//         });
//     });
// });

//#############################################################################################

// 실제 적용되는 함수에는 영향을 미치지 않고 유저를 mock으로 생성하여 test할 수 있다.
describe('render is create user', () => {
    const fn = require('../fn');

    jest.mock('../fn');
    fn.createUser.mockReturnValue({ name: 'Mike' });

    it('유저를 생성합니다.', () => {
        const user = fn.createUser('Mike');
        expect(user.name).toBe('Mike');
    });
});
