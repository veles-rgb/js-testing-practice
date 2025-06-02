// jest.test.js

// Imports
import { capitalize } from "./jest.js";

// Capitalize test
test('First letter capitalized', () => {
    const str = capitalize('test');
    console.log(str);
    expect(str.charAt(0)).toBe(str.charAt(0).toUpperCase());
});