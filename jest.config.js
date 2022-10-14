/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/!(*.d).{js,ts}"],
  // 收集测试覆盖率
  collectCoverage: true
};
