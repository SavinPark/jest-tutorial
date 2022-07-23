const fn = require('../fn');

// Promise | Matchers ( resolves )

// --- PASS
test("3초 후에 받아온 나이는 24", () => {
    return expect(fn.getAge()).resolves.toBe(24);
});

// --- FAIL
test("3초 후에 받아온 나이는 27", () => {
    return expect(fn.getAge()).resolves.toBe(27);
});


// // Promise | Matchers ( rejects )

// --- PASS
test("3초 후에 Error 발생", () => {
    return expect(fn.getAge()).rejects.toMatch("Error");
});

// --- FAIL
test("3초 후에 받아온 나이는 24", () => {
    return expect(fn.getAge()).rejects.toBe(24);
});


