const fn = {
    add : (num1, num2) => num1 + num2,
    getName: callback => {
        const name = "Savin";
        setTimeout(() => {
            callback(name);
            // throw new Error("서버 에러..");
        }, 3000);
    },
    getAge: () => {
        const age = 24;
        return new Promise((res, rej) => {
            setTimeout(() => {
                // res(age);
                rej("Error");
            }, 3000);
        });
    }
};

module.exports = fn;


