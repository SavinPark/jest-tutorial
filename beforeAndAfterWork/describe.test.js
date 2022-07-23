const fn = require('./fn');

let user;

beforeAll(async () => {
  user = await fn.connectUserDb();
});
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

describe("Car 관련 작업", () => {
    let car;

    beforeAll(async () => {
        car = await fn.connectCarDb();
    });
    afterAll(async () => {
        return fn.disconnectCarDb();
    });

    test("브랜드는 BMW", () => {
        expect(car.brand).toBe("BMW");
    });
    test("제품명 Z4", () => {
        expect(car.name).toBe("Z4");
    });
    test("색상은 black", () => {
        expect(car.color).toBe("black");
    });
})


// --- 실행 순서 --- //
// beforeAll(() => console.log("밖 beforeAll"));    // 1
// beforeEach(() => console.log("밖 beforeEach"));    // 2, 6
// afterEach(() => console.log("밖 afterEach"));    // 4
// afterAll(() => console.log("밖 afterAll"));    // 마지막 (11)

// test("0 + 1 = 1", () => {
//     console.log("Outer Test");
//     expect(fn.add(0,1)).toBe(1);    // 3
// });

// describe("describe 영역", () => {
//     beforeAll(() => console.log("안 beforeAll"));    // 5
//     beforeEach(() => console.log("안 beforeEach"));    // 7
//     afterEach(() => console.log("안 afterEach"));    // 9
//     afterAll(() => console.log("안 afterAll"));    // 마지막 - 1 (9)

//     test("0 + 1 = 1", () => {
//         console.log("Inner Test");
//         expect(fn.add(0,1)).toBe(1);    // 8
//     });
// });