// Multiply: Equation whose result equals 62
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2; // 31 * 2 = 62

// Random: Generates a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1; // Generates a random number > 0

// Mod: Equation that calculates a remainder equal to 4
const num3 = 24;
const num4 = 5;
const mod = num3 % num4; // 24 % 5 = 4

// Max: Returns the highest number in the set
const max = Math.max(1, 5, 10, 15, 20); // Highest value is 20

// Export variables for testing
module.exports = { multiply, random, mod, max };
