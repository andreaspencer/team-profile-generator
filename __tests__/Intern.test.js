const { hasUncaughtExceptionCaptureCallback } = require("process");
const Intern = require("../lib/Intern");

test("can set school", () => {
    const testValue = "UCLA";
    const e = new Intern("Wesley", 1, "test@test.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Wesley", 1, "test@test.com", "UCLA", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("can get school", () => {
    const testValue = "UCLA";
    const e = new Intern("Wesley", 1, "test@test.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});