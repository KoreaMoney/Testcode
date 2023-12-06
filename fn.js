//-------------------------TEST 진행 또는 하나씩 확인하고 싶을 때는 하나씩 주석을 제거하여 진행해보세요 -------------------------

// // jest test를 위한 함수 생성
// const fn = {
//     add: (num, num2) => num + num2,
//     userInfo: (name, age, date) => ({ name, age, date: undefined }),
//     throwErr: () => {
//         throw new Error('Error occurred');
//     },
// };

// module.exports = fn;

// 테스트 전후 작업 진행
const fn = {
    add: (num, num2) => num + num2,
    connectUserDb: () => {
        return new Promise((res) => {
            setTimeout(() => {
                res(
                    {
                        name: 'Mike',
                        age: 30,
                        get: 'male',
                    },
                    500
                );
            });
        });
    },
    disConnectDb: () => {
        return new Promise((res) => {
            setTimeout(() => {
                res();
            }, 500);
        });
    },
};

module.exports = fn;
