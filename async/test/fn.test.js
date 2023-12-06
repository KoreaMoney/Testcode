/**
 * @author KIM DOWON
 * @date Dec 2023
 * @description jest의 비동기 시 사용법 내용 정리 및 공부
 *
 * 비동기 test함에 있어서 일단 done을 넣어서 done이 실행되기 전까지는 대기하도록 한다.
 * 하지만 promise를 사용한다면 done과 같은 과정을 거칠 필요없이 더 간편하게 할 수 있다.
 */

const fn = require('../fn');
// // callback를 사용한 경우에 대한 비동기 test 생성
// test('3초 후에 받아온 이름은 Mike입니다.', (done) => {
//     function callback(name) {
//         expect(name).toBe('Mike');
//         try {
//             done();
//         } catch (err) {
//             done();
//         }
//     }
//     fn.getName(callback);
// });

// Promise를 사용한 경우에 대한 비동기 test생성
test('3초 후에 받아온 이름은 Mike입니다.', () => {
    return fn.getAge().then((age) => {
        expect(age).toBe(30);
    });
});

// Promise사용에서 더 간단하게 사용하고자 할 경우 (resolves)
// return 대신 await를 넣어서 처리할 수도 있다.
test('promise를 더 간단하게 test하기', () => {
    return expect(fn.getAge()).resolves.toBe(30);
});

// async, await 비동기 처리방식
test('async, await 비동기 처리방식으로 test진행하기', async () => {
    const age = await fn.getAge();
    expect(age).toBe(30);
});

// // Promise사용에서 더 간단하게 사용하고자 할 경우 (rejects)
// test('3초후에 에러가 발생합니다.', () => {
//     return expect(fn.getAge()).rejects.toMatch('error');
// });

// 비동기 영향 확인을 위한 시도
test('비동기 여부 확인', () => {
    expect(fn.add(0, 1)).toBe(1);
});
