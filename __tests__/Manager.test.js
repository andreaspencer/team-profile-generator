const Manager = require("../lib/Manager");

test("set office", () => {
    const testValue = 111;
    const manager = new Manager("Wesley", 1, "test@test.com", testValue, "Manager");
    expect(manager.office).toBe(testValue);
});

test("retunr \"Manager\"", () => {
    const testValue = "Manager",
    const manager = new Manager("Wesley", 1, "test@test.com", 111, "Manager");
    expect(manager.getRole()).toBe(testValue);
});

test("get office", () => {
    const testValue = 111;
    const manager = new Manager("Wesley", 1, "test@test.com", testValue, "Manager");
    expect(manager.getOffice()).toBe(testValue);
});