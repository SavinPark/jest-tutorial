const fn = require('../fn');

// Async Await

// --- PASS
test("3초 후에 받아온 나이는 24", async () => {
    const age = await fn.getAge();
    expect(age).toBe(24);
});

// --- FAIL
test("3초 후에 받아온 나이는 27", async () => {
    const age = await fn.getAge();
    expect(age).toBe(27);
});


