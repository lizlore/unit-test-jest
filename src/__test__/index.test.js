const { TestScheduler } = require("jest");
const randomStrings = require("./index");

test("Probar la funcionalidad", () => {
  expect(typeof randomStrings()).toBe("string");
});

describe("Probar funcionalidades de randomStrings", () => {
  test("Probar la funcionalidad", () => {
    expect(typeof randomStrings()).toBe("string");
  });
  test("Comprobar que no existe una cudad", () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  });
});
