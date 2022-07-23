const fn = require('./fn');

// toBe
test("1 + 2 는 3 이다.", () => {
    expect(fn.add(1, 2)).toBe(3);
});

// toBe | not
test("1 + 2 는 5 가 아니다.", () => {
    expect(fn.add(1, 2)).not.toBe(5);
});


// 객체나 배열은 toEqual 을 사용해서 테스트 해야 한다.
test("name 과 age 를 전달받아서 {name: 'Ann', age: 20} 객체를 반환한다.", () => {
    expect(fn.makeUser("Ann", 20)).toBe( {name: "Ann", age: 20} );
});


// toEqual
test("name 과 age 를 전달받아서 {name: 'Ann', age: 20} 객체를 반환한다.", () => {
    expect(fn.makeUser("Ann", 20)).toEqual( {name: "Ann", age: 20} );
});

// toEqual | not
test("name 과 age 를 전달받아서 {name: 'Tom', age: 28} 객체를 반환하지 않는다.", () => {
    expect(fn.makeUser("Ann", 20)).not.toEqual( {name: "Tom", age: 28} );
});