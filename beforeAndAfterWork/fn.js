const fn = {
    add : (num1, num2) => num1 + num2,
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



