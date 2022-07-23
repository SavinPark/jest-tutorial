const fn = require('../fn');

// Async Await | Matchers ( resolves )

// --- PASS
test("3초 후에 받아온 나이는 24", async () => {
    await expect(fn.getAge()).resolves.toBe(24);
});

// --- FAIL
test("3초 후에 받아온 나이는 27", async () => {
    await expect(fn.getAge()).resolves.toBe(27);
});



// Async Await | Matchers ( rejects )

// --- PASS
test("3초 후에 Error 발생", async () => {
    await expect(fn.getAge()).rejects.toMatch("Error");
});

// --- FAIL
test("3초 후에 받아온 나이는 24", async () => {
    await expect(fn.getAge()).rejects.toBe(24);
});