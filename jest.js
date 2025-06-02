// jest.js

// capitalize
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// reverseString
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Exports
export { capitalize, reverseString };