const fn = require('./fn');

/* Truthiness
* - toBeNull : null 일 경우 테스트 통과
* - toBeUndefined : undefined 일 경우 테스트 통과
* - toBeDefined : Defined 일 경우 테스트 통과

* - toBeTruthy : truthy 일 경우 테스트 통과
* - toBeFalsy : falsy 일 경우 테스트 통과
*/


// --- PASS
test("null 은 null 이다.", () => {
    expect(null).toBeNull();
});

// --- PASS
test("0 은 false 이다.", () => {
    expect(0).toBeFalsy();
});


