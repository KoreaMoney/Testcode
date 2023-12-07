/**
 * @author KIM DOWON
 * @date Dec 2023
 * @description jest의 기본사용법 내용 정리 및 공부
 */

const fn = require('./fn');
/**
 * toBe : expect의 결과값이 같을 때라고 할 때 사용한다.
 * toEqual : 객체 또는 배열은 재귀적으로 하나씩 확인해야하기 때문에 이럴때는 toBe가 아니라 toEqual을 사용한다.
 * toStrictEqual : toEqual을 엄격하게 검사하는 항목으로 객체 또는 배열의 요소에서 빠질 경우 fail처리되어 확인이 가능하다
 * toBeNull : 값이 null인 경우 통과
 * toBeUndefined : 값이 undefined인 경우 통과
 * toBeDefined : 값이 defined일 경우 통과
 * toBeTruthy or toBeFalsy : boolean값을 test하는 경우 사용된다.
 * toBeGreaterThan : 비교대상보다 크다.
 * toBeGreaterThanOrEqual : 비교대상보다 크거나 같다.
 * toBeLessThan : 비교대상보다 작다.
 * toBeLessThanOrEqual : 비교대상보다 작거나 같다.
 * toMatch : 일치하는 지 확인한다.
 * toContain : 배열에서 특정요소가 있는지 확인한다.
 * toThrow : 예기치못한 경우를 대처하기 위해 일단 통과시키고 에러를 확인할 수 있게 한다.
 * beforeEach : 만약 beforeEach를 사용하지 않을 경우 동일한 num라는 것을 test가 계속 이어나가면 초기에 설정한 0이 아니라
 *              test하면서 중복되어 값이 늘어난 값이 들어가는 문제점을 가지기 때문에 초기값을 다시 확인하고 넘어가는 beforEach를 사용한다.
 * afterEach : test직후에 적용되는 사항
 * beforeAll : beforeEach처럼 매번 호출하는 것이 아니라 가장 먼저 딱 한번 호출됩니다.
 * afterAll : afterEach처럼 매번 호출하는 것이 아니라 가장 마지막에 딱 한번 호출됩니다.
 * describe : test를 해야하는 정보가 여러가지 일 경우 매번 여러개를 적는 것이 아니라 describe를 통해 충돌없이 test를 진행할 수 있다.
 *            그리고 내부에서만 test하기 위해서 describe안에서 한정되는 test를 구축할 수 있다.
 * it.only or test.only : only를 추가하여 설정하면 해당 test구역에 only를 제외하고 skip되고 only만 test진행이 된다.
 *
 */

//-------------------------TEST 진행 또는 하나씩 확인하고 싶을 때는 하나씩 주석을 제거하여 진행해보세요 -------------------------
// // toBe : 단순하게 expect와 toBe관계를 확인 시
// test('1은 1이다', () => {
//     expect(1).toBe(1);
// });

//#############################################################################################

// // toBe : 받아온 함수에 데이터를 넣고 확인 시
// test('2더하기 3은 5이다', () => {
//     expect(fn.add(2, 3)).toBe(5);
// });

//#############################################################################################

// // not.toBe : 받아온 함수에 데이터를 넣고 아닌 것을 확인 시
// test('2더하기 3은 6이다', () => {
//     expect(fn.add(2, 3)).not.toBe(6);
// });

//#############################################################################################

// // toEqual : fn함수 안에 user정보 test진행
// test('이름과 나이를 전달받아서 객체로 반환하시오.', () => {
//     expect(fn.userInfo('Minsu', 30)).toEqual({
//         name: 'Minsu',
//         age: 30,
//     });
// });

//#############################################################################################

// // toStrictEqual : 엄격하게 fn함수 안에 user정보 test진행
// test('엄격한 확인 : 이름과 나이를 전달받아서 객체로 반환하시오.', () => {
//     expect(fn.userInfo('Dowon', 31)).toStrictEqual({
//         name: 'Dowon',
//         age: 31,
//     });
// });

//#############################################################################################

// // toBeNull
// test('it is check to be null', () => {
//     expect(null).toBeNull();
// });

//#############################################################################################

// // toBeTruthy (비어있지 않은 문자열은 true)
// test('it is check to be true', () => {
//     expect(fn.add(1, 0)).toBeTruthy();
// });

//#############################################################################################

// // toBeGreaterThan
// test('it is check to be greater than', () => {
//     const num = 'the Line is greater';
//     expect(num.length).toBeGreaterThan(10);
// });

//#############################################################################################

// // 정규표현식과 toMatch
// test('Does the word Korea include a?', () => {
//     expect('korea').toMatch(/a/);
// });

//#############################################################################################

// // toContain
// test('Does the userList include Mike?', () => {
//     const user = 'Mike';
//     const userList = ['John', 'Mike', 'Jenny', 'Hugh'];
//     expect(userList).toContain(user);
// });

//#############################################################################################

// // 예기치 못한 에러발생 시
// test('An unexpected error', () => {
//     expect(() => fn.throwErr()).toThrow('Error occurred');
// });

//#############################################################################################

// // beforeEach 사용하기 전
// test('0더하기 1은 1이다. ', () => {
//     num = fn.add(num, 1);
//     expect(num).toBe(1);
// });
// test('0더하기 2은 3이다. ', () => {
//     num = fn.add(num, 2);
//     expect(num).toBe(2);
// });
// test('0더하기 3은 3이다. ', () => {
//     num = fn.add(num, 3);
//     expect(num).toBe(3);
// });

//#############################################################################################

// // beforeEach 사용한 후
// let num = 10;

// beforeEach(() => {
//     num = 0;
// });
// // afterEach(() => {
// //     num = 0;
// // });

// test('0더하기 1은 1이다. ', () => {
//     num = fn.add(num, 1);
//     expect(num).toBe(1);
// });
// test('0더하기 2은 3이다. ', () => {
//     num = fn.add(num, 2);
//     expect(num).toBe(2);
// });
// test('0더하기 3은 3이다. ', () => {
//     num = fn.add(num, 3);
//     expect(num).toBe(3);
// });

//#############################################################################################

let user;
beforeEach(async () => {
    user = await fn.connectUserDb();
});
afterEach(() => {
    return fn.disConnectDb();
});
test('name is Mike', () => {
    expect(user.name).toBe('Mike');
});
test('age is 30', () => {
    expect(user.age).toBe(30);
});
test('gender is male', () => {
    expect(user.gender).toBe('male');
});

//#############################################################################################

describe('자동차에 대한 정보 render', () => {
    let car;
    beforeEach(async () => {
        car = await fn.connectCarDb();
    });
    afterEach(() => {
        return fn.disConnectCarDb();
    });
    it('brand is volvo', () => {
        expect(car.brand).toBe('Volvo');
    });
    it('name is XC40', () => {
        expect(car.name).toBe('XC40');
    });
    it('color is black', () => {
        expect(car.color).toBe('black');
    });
});
