const { hasUncaughtExceptionCaptureCallback } = require("process");
const Intern = require("../lib/Intern");

test("can set school", () => {
    const testValue = "UCLA";
    const intern = new Intern("Wesley", 1, "test@test.com", testValue, "Intern");
    expect(intern.school).toBe(testValue);
});

test("return \"Intern\"", () => {
    const testValue = "Intern";
    const intern = new Intern("Wesley", 1, "test@test.com", "UCLA", "Intern");
    expect(intern.getRole()).toBe(testValue);
});

test("can get school", () => {
    const testValue = "UCLA";
    const intern = new Intern("Wesley", 1, "test@test.com", testValue, "Intern");
    expect(intern.getSchool()).toBe(testValue);
});