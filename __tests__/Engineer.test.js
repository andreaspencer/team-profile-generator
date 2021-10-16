const Engineer = require('../lib/Engineer');

test("can set github account", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer("Wesley", 1, "test@test.com", testValue, "Engineer");
    expect(engineer.github).toBe(testValue);
});

test("return \"Engineer\"", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("Wesley", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(engineer.getRole()).toBe(testValue);
});

test("can get github", () => {
    const testValue = "GitHubUser";
    const engineer = new Engineer("Wesley", 1, "test@test.com", testValue, "Engineer");
    expect(engineer.github()).toBe(testValue);
});