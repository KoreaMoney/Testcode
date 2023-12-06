//-------------------------TEST 진행 또는 하나씩 확인하고 싶을 때는 하나씩 주석을 제거하여 진행해보세요 -------------------------

// callback를 사용한 경우 : jest 비동기 test를 위한 함수 생성
// const fn = {
//     add: (num, num2) => num + num2,
//     getName: (cb) => {
//         const name = 'Mike';
//         setTimeout(() => {
//             cb(name);
//             // throw new Error("server error");
//         }, 3000);
//     },
// };

// module.exports = fn;

// ------------------------------------------------------------------------

// promise를 사용한 비동기 jest test방식
// promise로 작성하게되면 jest는 setTimeout이 진행될 때까지 기다려준다.
const fn = {
    add: (num, num2) => num + num2,
    getName: (cb) => {
        const name = 'Mike';
        setTimeout(() => {
            cb(name);
        }, 3000);
    },
    getAge: () => {
        const age = 30;
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(age);
                // rej('error');
            }, 3000);
        });
    },
};

module.exports = fn;
