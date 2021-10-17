const Manager = require("../lib/Manager");

test("set office", () => {
    const testValue = 111;
    const e = new Manager("Wesley", 1, "test@test.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("retunr \"Manager\"", () => {
    const testValue = "Manager",
    const e = new Manager("Wesley", 1, "test@test.com", 111, "Manager");
    expect(e.getRole()).toBe(testValue);
});

test("get office", () => {
    const testValue = 111;
    const e = new Manager("Wesley", 1, "test@test.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});