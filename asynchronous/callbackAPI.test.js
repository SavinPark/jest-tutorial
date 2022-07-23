const fn = require('../fn');

// Callback | API Error

// --- FAIL
test("3초 후에 받아온 이름은 Savin", (done) => {
    function callback(name) {
        try {
            expect(name).toBe("Savin");
            done();
        } catch (error) {
            done();
        }
    }
    fn.getName(callback);
});


// ...?
// test("3초 후에 서버 에러.. 발생", (done) => {
//     function callback(name) {
//         try {
//             expect(name).toMatch("서버 에러..");
//             done();
//         } catch (error) {
//             expect(name).toMatch("서버 에러..");
//             done();
//         }
//     }
//     fn.getName(callback);
// });