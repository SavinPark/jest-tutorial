const fn = require('./fn');

let user;


// beforeAll : 최초 DB 연결 (0.5초)
beforeAll(async () => {
    user = await fn.connectUserDb();
});
// afterAll : 최후 DB 연결 끊기 (0.5초)
afterAll(async () => {
    return fn.disconnectUserDb();
});


test("이름은 Ann", () => {
    expect(user.name).toBe("Ann");
});

test("나이는 17", () => {
    expect(user.age).toBe(17);
});

test("성별은 female", () => {
    expect(user.gender).toBe("female");
});


