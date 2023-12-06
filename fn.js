// jest test를 위한 함수 생성
const fn = {
    add: (num, num2) => num + num2,
    userInfo: (name, age, date) => ({ name, age, date: undefined }),
    throwErr: () => {
        throw new Error('Error occurred');
    },
};

module.exports = fn;
