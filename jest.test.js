// jest.test.js

// Imports
import { capitalize, reverseString, calculator, caesarCipher } from "./jest.js";

// capitalize test
test('First letter capitalized', () => {
    const str = capitalize('test');
    console.log(str);
    expect(str.charAt(0)).toBe(str.charAt(0).toUpperCase());
});

// reverseString test
test('Reversed string', () => {
    const str = 'is this string reversed?';
    const reversedStr = reverseString(str);
    console.log(reversedStr);
    expect(reversedStr).toBe(str.split('').reverse().join(''));
});

// calculator test
describe("Calculator", () => {
    test("Adds two given numbers", () => {
        const num1 = 9, num2 = 10;
        const result = calculator.add(num1, num2);
        console.log(result);
        expect(result).toEqual(num1 + num2);
    });
    test("Subtracts two given numbers", () => {
        const num1 = 25, num2 = 4;
        const result = calculator.subtract(num1, num2);
        console.log(result);
        expect(result).toEqual(num1 - num2);
    });
    describe("Divide two given numbers unless zero", () => {
        test("Divide two given numbers", () => {
            const num1 = 6, num2 = 2;
            const result = calculator.divide(num1, num2);
            console.log(result);
            expect(result).toEqual(num1 / num2);
        });
        test('Do not divide by 0', () => {
            const num1 = 10, num2 = 0;
            const result = calculator.divide(num1, num2);
            console.log(result);
            expect(result).toBe("Cannot divide by 0");
        });
    });
    test("Multiply two given numbers", () => {
        const num1 = 3, num2 = 6;
        const result = calculator.multiply(num1, num2);
        console.log(result);
        expect(result).toEqual(num1 * num2);
    });
});

// caesarCipher test
test("Caesar Cipher", () => {
    const str = "HELLO, World!";
    const shiftFactor = 10;
    const result = caesarCipher(str, shiftFactor);
    console.log(result);
    expect(result).toBe("ROVVY, Gybvn!");
});