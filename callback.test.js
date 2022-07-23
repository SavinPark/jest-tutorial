const fn = require('./fn');

// Callback | done

// --- PASS
test("3초 후에 받아온 이름은 Savin", (done) => {
    function callback(name) {
        expect(name).toBe("Savin");
        done();
    }
    fn.getName(callback);
});

// --- FAIL
test("3초 후에 받아온 이름은 Tom", (done) => {
    function callback(name) {
        expect(name).toBe("Tom");
        done();
    }
    fn.getName(callback);
});



