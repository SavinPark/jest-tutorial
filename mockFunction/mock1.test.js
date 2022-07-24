// mock function

const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한 번 이상 호출 ?", () => {
    expect(mockFn).toBeCalled();
});
test("정확히 3번 호출?", () => {
    expect(mockFn).toBeCalledTimes(3);
});
test("10이랑 20을 전달받은 함수가 있는가 ?", () => {
    expect(mockFn).toBeCalledWith(10, 20);
});
test("마지막 함수는 30이랑 40을 전달 받았는가 ?", () => {
    expect(mockFn).lastCalledWith(30, 40);
});
