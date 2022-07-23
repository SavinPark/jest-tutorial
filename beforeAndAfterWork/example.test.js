const fn = require('./fn');

let num = 0;

test("0 더하기 1 은 1 이다.", () => {
    num = fn.add(num, 1);  // 여기서 num 은 1로 바뀜
    expect(num).toBe(1);
});
test("0 더하기 2 은 2 이다.", () => {
    num = fn.add(num, 2);  // 여기서 num 은 3으로 바뀜
    expect(num).toBe(2);
});
test("0 더하기 3 은 3 이다.", () => {
    num = fn.add(num, 3);  // 여기서 num 은 6으로 바뀜
    expect(num).toBe(3);
});
test("0 더하기 4 은 4 이다.", () => {
    num = fn.add(num, 4);  // 여기서 num 은 8로 바뀜
    expect(num).toBe(4);
});


