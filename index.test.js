import calculate from "./logic/calculate";
import operate from "./logic/operate";

describe("Calculator", () => {
  test("returns empty obj for AC", () => {
    const testObj = {
      total: 5,
      next: 3,
      operation: '+',
    };

    const retObj = {
      total: 0,
      next: null,
      operation: null,
    };

    const buttonName = "AC";
    const obj = calculate(testObj, buttonName);

    expect(obj).toEqual(retObj);
  });

  test("returns result obj for =", () => {
    const testObj = {
      total: 5,
      next: 3,
      operation: '+',
    };

    const res = operate(testObj.total, testObj.next, testObj.operation);
    const retObj = {
      total: res,
      next: null,
      operation: null,
    };

    const buttonName = "=";
    const obj = calculate(testObj, buttonName);

    expect(obj).toEqual(retObj);
  });

  test("returns result obj for +/- with only 1 value", () => {
    const testObj = {
      total: 5,
      next: null,
      operation: null,
    };

    const res = (testObj.total * -1).toString();
    const retObj = {
      total: res,
      next: null,
      operation: null,
    };

    const buttonName = "+/-";
    const obj = calculate(testObj, buttonName);
    expect(obj).toEqual(retObj);
  });

  test("returns result obj for +/- with 2 values", () => {
    const testObj = {
      total: 5,
      next: 3,
      operation: null,
    };

    const res = (testObj.next * -1).toString();
    const retObj = {
      total: 5,
      next: res,
      operation: null,
    };

    const buttonName = "+/-";
    const obj = calculate(testObj, buttonName);
    expect(obj).toEqual(retObj);
  });
});

describe("Operate", () => {
  test("returns the expected sum", () => {
    const num1 = 12;
    const num2 = 3;
    const operation = "+";
    const result = operate(num1, num2, operation);

    expect(result).toMatch(`15`);
  });

  test("returns the expected difference", () => {
    const num1 = 12;
    const num2 = 3;
    const operation = "-";
    const result = operate(num1, num2, operation);

    expect(result).toMatch(`9`);
  });

  test("returns the expected product", () => {
    const num1 = 12;
    const num2 = 3;
    const operation = "x";
    const result = operate(num1, num2, operation);

    expect(result).toMatch(`36`);
  });

  test("returns the expected division", () => {
    const num1 = 12;
    const num2 = 0;
    const operation = "÷";
    const result = operate(num1, num2, operation);
    if (num2 === 0) {
      expect(result).toMatch(`Can't divide by 0.`);
    } else {
      expect(result).toMatch(`4`);
    }
  });

  test("returns the expected mod", () => {
    const num1 = 12;
    const num2 = 3;
    const operation = "%";
    const result = operate(num1, num2, operation);
    if (num2 === 0) {
      expect(result).toMatch(`Can't find modulo as can't divide by 0.`);
    } else {
      expect(result).toMatch(`0`);
    }
  });
});
