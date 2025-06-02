// jest.test.js

// Imports
import { capitalize, reverseString } from "./jest.js";

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