const Employee = require("../lib/Employee");

test('set a name', () => {
    const name = "Wesley";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("set id", () => {
    const testValue = 111;
    const e = new Employee("Wesley", testValue);
    expect(e.id).toBe(testValue);
});

test ("can set email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Wesley", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("can get name", () => {
    const testValue = "Wesley";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("can get id", () => {
    const testValue = 111;
    const e = new Employee("Wesley", testValue);
    expect(e.getId()).toBe(testValue);
});

test("cen get email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Wesley", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Wesley", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});
