const Engineer = require('../lib/Engineer');

test("can set github account", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Wesley", 1, "test@test.com", testValue, "Engineer");
    expect(e.gitHub).toBe(testValue);
});

test("return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Wesley", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("can get github", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Wesley", 1, "test@test.com", testValue, "Engineer");
    expect(e.getGithub()).toBe(testValue);
});