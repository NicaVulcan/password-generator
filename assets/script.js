//password character arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];

//functions for randomizing character arrays
var randomUpperCase = function () {
    var iUpperCase = Math.floor(Math.random() * upperCase.length);
    //console.log("your randome upper case character is " + upperCase[iUpperCase]);
    return upperCase[iUpperCase];
}
var randomLowerCase = function () {
    var iLowerCase = Math.floor(Math.random() * lowerCase.length);
    //console.log("your random lower case character is " + lowerCase[iLowerCase]);
    return lowerCase[iLowerCase];
}
var randomNumber = function () {
    var iNumber = Math.floor(Math.random() * number.length);
    //console.log("your random number is " + number[iNumber]);
    return number[iNumber];
}
var randomSpecialChar = function () {
    var iSpecialChar = Math.floor(Math.random() * specialChar.length);
    //console.log("your random special character is " + specialChar[iSpecialChar]);
    return specialChar[iSpecialChar];
}

//array of 'random character' functions
var allSelectChar = [randomUpperCase, randomLowerCase, randomNumber, randomSpecialChar];

//function for randomizing which array to access
var randomAllSelectChar = function () {
    var iAllSelectChar = Math.floor(Math.random() * allSelectChar.length);
    console.log("your random character from random array is " + allSelectChar[iAllSelectChar]());
    return allSelectChar[iAllSelectChar]();
}


//execute randomizing functions
randomUpperCase();
randomLowerCase();
randomNumber();
randomSpecialChar();
randomAllSelectChar();


generate password function
var generatePassword = function () {

    //upper case confirm
    var promptUpperCase = function () {
        var confirmUpperCase = window.confirm("Would you like to include upper case letters in your password? Press 'OK' for yes, or 'CANCEL' for no.");
        if (confirmUpperCase) {
            confirmUpperCase = true;
            console.log("Select upper case: " + confirmUpperCase);
            return confirmUpperCase;
        } else {
            confirmUpperCase = false;
            console.log("Select upper case: " + confirmUpperCase);
            return confirmUpperCase;
        }

    }

    //lower case confirm
    var promptLowerCase = function () {
        var confirmLowerCase = window.confirm("Would you like to include lower case letters in your password? Press 'OK' for yes, or 'CANCEL' for no.");
        if (confirmLowerCase) {
            confirmLowerCase = true;
            console.log("Select lower case: " + confirmLowerCase);
            return confirmLowerCase;
        } else {
            confirmLowerCase = false;
            console.log("Select lower case: " + confirmLowerCase);
            return confirmLowerCase;
        }

    }

    //number confirm
    var promptNumber = function () {
        var confirmNumber = window.confirm("Would you like to include numbers in your password? Press 'OK' for yes, or 'CANCEL' for no.");
        if (confirmNumber) {
            confirmNumber = true;
            console.log("Select number: " + confirmNumber);
            return confirmNumber;
        } else {
            confirmNumber = false;
            console.log("Select number: " + confirmNumber);
            return confirmNumber;
        }

    }

    //special character confirm
    var promptSpecialChar = function () {
        var confirmSpecialChar = window.confirm("Would you like to include special characters in your password? Press 'OK' for yes, or 'CANCEL' for no.");
        if (confirmSpecialChar) {
            confirmSpecialChar = true;
            console.log("Select special character: " + confirmSpecialChar);
            return confirmSpecialChar;
        } else {
            confirmSpecialChar = false;
            console.log("Select special character: " + confirmSpecialChar);
            return confirmSpecialChar;
        }

    }


    //prompt for character quantity
    var promptCharQuant = function () {
        var selectCharQuant = "";
        while (isNaN(selectCharQuant) || selectCharQuant < 8 || selectCharQuant > 128) {
            selectCharQuant = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128.")
            selectCharQuant = parseInt(selectCharQuant);
        }
        console.log("your password will be " + selectCharQuant + " characters long.");
        return selectCharQuant;
    }

    promptUpperCase();
    promptLowerCase();
    promptNumber();
    promptSpecialChar();
    promptCharQuant();

}
generatePassword();






// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);