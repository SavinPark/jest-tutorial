const fn = {
    // 더하기
    add : (num1, num2) => num1 + num2,
    // User 생성
    createUser: name => {
        console.log("실제로 사용자가 생성되었습니다.");
        return {
            name,
        };
    },
    // User DB
    connectUserDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res({
                    name: "Ann",
                    age: 17,
                    gender: "female",
                });
            }, 500);
        });
    },
    disconnectUserDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res();
            }, 500);
        });
    },
    // Car DB
    connectCarDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res({
                    brand: "BMW",
                    name: "Z4",
                    color: "black",
                });
            }, 500);
        });
    },
    disconnectCarDb: () => {
        return new Promise(res => {
            setTimeout(() => {
                res();
            }, 500);
        });
    },
};

module.exports = fn;



