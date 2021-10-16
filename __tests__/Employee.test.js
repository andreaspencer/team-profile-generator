const Employee = require("../lib/Employee");

test('set a name', () => {
    const name = "Wesley";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("set id", () => {
    const testValue = 111;
    const employee = new Employee("Wesley", testValue);
    expect(employee.id).toBe(testValue);
});

test ("can set email", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Wesley", 1, testValue);
    expect(employee.email).toBe(testValue);
});

test("can get name", () => {
    const testValue = "Wesley";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

test("can get id", () => {
    const testValue = 111;
    const employee = new Employee("Wesley", testValue);
    expect(employee.getId()).toBe(testValue);
});

test("cen get email", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Wesley", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test("return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Wesley", 1, "test@test.com", "Employee");
    expect(employee.getRole()).toBe(testValue);
});
