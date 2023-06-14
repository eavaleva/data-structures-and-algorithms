/**
 * Create a function called checkPassword() that takes password as a parameter. Inside the checkPassword() function, 
 * if the length of password is less than 6, throw a new error with the message: 'Password is too short! Generate another password.'.
 * Lastly, export the generatePassword() and checkPassword() functions at the bottom of the code.
 * If the code works correctly, clicking on the “Generate Password” button should generate a password with a length of 4 to 8 digits. 
 * If the generated password length is less than 6, the error message will be displayed.
 */

const generatePassword = () => {
    let passwordLength = Math.floor(Math.random() * 5 + 4);
    let generatedPassword = Math.floor(Math.random() * Math.pow(10, passwordLength));
    return generatedPassword.toString();
};

const checkPassword = (password) => {
    if (password.length < 6) {
        throw new Error('Password is too short! Generate another password.');
    }
};

module.exports = {
    generatePassword,
    checkPassword,
};


const { generatePassword, checkPassword } = require('./password');

try {
    let password = generatePassword();
    checkPassword(password);
    console.log(`Generated password: ${password}`);
} catch (error) {
    console.error(error.message);
}
