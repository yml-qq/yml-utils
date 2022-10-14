import { deepClone } from "../src/object/deepClone";

describe("#deepClone", function () {
  it("deepClone(undefined) should return undefined", function () {
    const person = undefined;
    expect(deepClone(person)).toBe(undefined);
  });
  it("deepClone(null) should return null", function () {
    const person = null;
    expect(deepClone(person)).toBe(person);
  });
  it("deepClone(123) should return 123", function () {
    const person = 123;
    expect(deepClone(person)).toBe(person);
  });
  it("deepClone('abc') should return 'abc'", function () {
    const person = "abc";
    expect(deepClone(person)).toBe(person);
  });
  it("deepClone(new Date()) should return timestamp", function () {
    const date = new Date();
    expect(deepClone(date)).not.toBeNull();
  });
  it("deepClone(arr) should return arr", function () {
    const arr = [123, "abc", { name: "abc" }];
    expect(deepClone(arr)).toContain("abc");
  });
  it("deepClone(obj) should return obj", function () {
    const obj = {
      id: 3,
      name: "abc",
      list: [123, "name", { age: 18 }]
    };
    expect(deepClone(obj)).toHaveProperty("id", 3);
    expect(deepClone(obj)).toHaveProperty("list");
  });
  it("deepClone(fun) should return Error", function () {
    const obj = () => "3";
    expect(deepClone(obj)).not.toThrow();
    expect(deepClone(obj)).not.toThrow("不支持该数据类型");
  });
});
