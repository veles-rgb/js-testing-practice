// jest.js

// capitalize
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// reverseString
function reverseString(str) {
    return str.split('').reverse().join('');
}

// calculator
const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    divide: function (num1, num2) {
        if (num2 !== 0) return num1 / num2;
        return `Cannot divide by 0`;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    }
};

// Modular function (for caesarCipher)
function mod(n, p) {
    let r = n % p;
    if (r < 0) {
        r += p;
    }
    return r;
}

// caesarCipher
function caesarCipher(str, shiftFactor) {
    let newStr = "";

    for (let letter of str) {
        // Get the ASCII code (number)
        let charCode = letter.codePointAt(0);

        // Capital letters
        if (letter === letter.toUpperCase()) {
            // ASCII Code of letter A (65)
            const codeA = "A".codePointAt(0);
            // ASCII Code of letter Z (	90)
            const codeZ = "Z".codePointAt(0);

            // If a letter between A-Z (uppercase)
            if (charCode >= codeA && charCode <= codeZ) {
                // Remove 65 from charCode (0-25)
                charCode -= codeA;
                // Wrap around using modular
                charCode = mod(charCode + shiftFactor, 26);
                // Add 65 back to charCode
                charCode += codeA;
            }
        }
        // Lowercase letters 
        else if (letter !== letter.toUpperCase()) {
            // ASCII Code of letter A (97)
            const codeA = "a".codePointAt(0);
            // ASCII Code of letter Z (122)
            const codeZ = "z".codePointAt(0);

            // If a letter between a-z (lowercase)
            if (charCode >= codeA && charCode <= codeZ) {
                // Remove 97 from charCode (0-25)
                charCode -= codeA;
                // Wrap around using modular
                charCode = mod(charCode + shiftFactor, 26);
                // Add 97 back to charCode
                charCode += codeA;
            }
        }
        // Turn charCode back to a letter and add to newStr
        newStr += String.fromCodePoint(charCode);
    }

    return newStr;
};

// Exports
export { capitalize, reverseString, calculator, caesarCipher };