// jest.js

// Capitalize function
function capitalize(str) {
    const newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr;
}

// Exports
export { capitalize };