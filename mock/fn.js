//-------------------------TEST 진행 또는 하나씩 확인하고 싶을 때는 하나씩 주석을 제거하여 진행해보세요 -------------------------
// 테스트 전후 작업 진행
const fn = {
    add: (num, num2) => num + num2,
    createUser: (name) => {
        console.log('사용자가 생성되었습니다.');
        return {
            name,
        };
    },
    connectUserDb: () => {
        return new Promise((res) => {
            setTimeout(() => {
                res(
                    {
                        name: 'Mike',
                        age: 30,
                        gender: 'male',
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
    //-------또 다른 정보 등록하기
    connectCarDb: () => {
        return new Promise((res) => {
            setTimeout(() => {
                res(
                    {
                        brand: 'Volvo',
                        name: 'XC40',
                        color: 'black',
                    },
                    500
                );
            });
        });
    },
    disConnectCarDb: () => {
        return new Promise((res) => {
            setTimeout(() => {
                res();
            }, 500);
        });
    },
};

module.exports = fn;
