const fn = require('./fn');

// Async Await | Matcher ( rejects )

// --- 실패
test("3초 후에 받아온 나이는 24이다.", async () => {
    await expect(fn.getAge()).rejects.toBe(25);
});

// --- 성공
test("3초 후에 Error가 발생한다.", async () => {
    await expect(fn.getAge()).rejects.toMatch("Error");
});



test("0 + 1 은 1이다.", () => {
    expect(fn.add(0, 1)).toBe(1);
});

