const uppercase = require('./01');

test("if uppercase function returns a string uppercased", (done) => {
  uppercase("string", (str) => {
    expect(str).toBe("STRING");
    done();
  });
});



