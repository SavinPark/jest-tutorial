const fn = require('../fn');

// Promise | return

/* Promise 를 사용할 경우, return 을 해주어야 테스트가 실행된다.
   return 하지 않으면 테스트가 실행되지 않고 그냥 결과가 PASS 로 나온다.
*/

// RETURN X
// --- FAIL
test("3초 후에 받아온 나이는 24", () => {
    fn.getAge()
    .then(age => {
        expect(age).toBe(24);
    })
});


// RETURN O
// --- PASS
test("3초 후에 받아온 나이는 24", () => {
    return fn.getAge()
    .then(age => {
        expect(age).toBe(24);
    })
});

// --- FAIL
test("3초 후에 받아온 나이는 27", () => {
    return fn.getAge()
    .then(age => {
        expect(age).toBe(27);
    })
});

