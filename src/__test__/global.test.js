const text = "Hola Mundo";

const fruits = ["manzana", "melon", "banana"];

test("Debe contener un texto", () => {
  expect(text).toMatch(/Mundo/);
});

test("¿Tenemos una banana?", () => {
  expect(fruits).toContain("banana");
});

test("Mayor que ", () => {
  expect(10).toBeGreaterThan(9);
});

test("Verdadero", () => {
  expect(true).toBeTruthy();
});

/* test to callback */

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

// pruebas a promesas

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Probar una promesa", () => {
  reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});

// pruebas a async / await

test("Probar async/await", async () => {
  const string = await reverseString2("Hola");
  expect(string).toBe("aloH");
});

// afterEach(() => console.log("Despues de cada prueba"));

// afterAll(() => console.log("Despues de todas las pruebas"));

// beforeEach(() => console.log("Antes de cada prueba"));

// beforeAll(() => console.log("Antes de todas las pruebas"));
