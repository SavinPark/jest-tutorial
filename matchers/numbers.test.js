const fn = require('./fn');

/* Truthiness
* - toBeGreaterThan 크다
* - toBeGreaterThanOrEqual 크거나 같다
* - toBeLessThan 작다
* - toBeLessThanOrEqual 작거나 같다
*/


// --- FAIL
test("ID 는 10자 이내여야 한다.", () => {
    const ID = "Hello_Happy_World";
    expect(ID.length).toBeLessThanOrEqual(10);
});

// --- PASS
test("ID 는 10자 이내여야 한다.", () => {
    const ID = "Hi_World";
    expect(ID.length).toBeLessThanOrEqual(10);
});


