// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//password character arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"];
var selectedCharType = [];

//takes user input to create password
var passwordParameters = function () {
    //validate value of password length 
    while (isNaN(confirmPassLength) || confirmPassLength < 8 || confirmPassLength > 128) {
        var confirmPassLength = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128.");
        confirmPassLength = parseInt(confirmPassLength);
    }

    //add password character array to selectCharType array if user chooses to include
    var confirmUpperCase = window.confirm("Would you like to include upper case characters in your password?");
    if (confirmUpperCase) {
        selectedCharType = selectedCharType.concat(upperCase);
    };
    var confirmLowerCase = window.confirm("Would you like to include lower case characters in your password?");
    if (confirmLowerCase) {
        selectedCharType = selectedCharType.concat(lowerCase);
    };
    var confirmNumber = window.confirm("Would you like to include numbers in your password?");
    if (confirmNumber) {
        selectedCharType = selectedCharType.concat(number);
    };
    var confirmSpecialChar = window.confirm("Would you like to include special characters in your password?");
    if (confirmSpecialChar) {
        selectedCharType = selectedCharType.concat(specialChar);
    };

    //ensure at least one character type is selected
    while (confirmUpperCase != true && confirmLowerCase != true && confirmNumber != true && confirmSpecialChar != true) {
        alert("You must choose at least one type of character");
        break;
    }

    return [confirmPassLength, confirmUpperCase, confirmLowerCase, confirmNumber, confirmSpecialChar];
};

//randomize selection from selectedChartype
var randomizeChar = function () {
    var randomChar = Math.floor(Math.random() * selectedCharType.length);
    return selectedCharType[randomChar];
};

//create the password
var writePassword = function () {
    //create an array out of passwordParameters function
    var parameters = passwordParameters();

    //iterate randomizeChar function user selected amount of times
    for (var i = 0; i < parameters[0]; i++) {
        randomizeChar();
        console.log(randomizeChar());
    }
};

writePassword();


//functions for randomizing character arrays
// var randomUpperCase = function () {
//     var iUpperCase = Math.floor(Math.random() * upperCase.length);
//     console.log("your random upper case character is " + upperCase[iUpperCase]);
//     return upperCase[iUpperCase];
// }
// var randomLowerCase = function () {
//     var iLowerCase = Math.floor(Math.random() * lowerCase.length);
//     console.log("your random lower case character is " + lowerCase[iLowerCase]);
//     return lowerCase[iLowerCase];
// }
// var randomNumber = function () {
//     var iNumber = Math.floor(Math.random() * number.length);
//     console.log("your random number is " + number[iNumber]);
//     return number[iNumber];
// }
// var randomSpecialChar = function () {
//     var iSpecialChar = Math.floor(Math.random() * specialChar.length);
//     console.log("your random special character is " + specialChar[iSpecialChar]);
//     return specialChar[iSpecialChar];
// }

//array of 'random character' functions. Functions added to array depending on parameters chosen
//var allSelectChar = [randomUpperCase, randomLowerCase, randomNumber, randomSpecialChar];

//function for randomizing which array to access depending on parameters chosen
// var randomAllSelectChar = function () {
//     var iAllSelectChar = Math.floor(Math.random() * allSelectChar.length);
//     console.log("your random character from random array is " + allSelectChar[iAllSelectChar]());
//     return allSelectChar[iAllSelectChar]();
// };

// // //functions for password parameters
// //confirm upper case prompt
// var promptUpperCase = function () {
//     var confirmUpperCase = window.confirm("Would you like to include upper case letters in your password? Press 'OK' for yes, or 'CANCEL' for no.");
//     if (confirmUpperCase) {
//         console.log("Password will contain upper case characters");
//     } else {

//         console.log("Password will not contain upper case characters");
//     }
// };
// //confirm lower case prompt
// var promptLowerCase = function () {
//     var confirmLowerCase = window.confirm("Would you like to include lower case letters in your password? Press 'OK' for yes, or 'CANCEL' for no.");
//     if (confirmLowerCase) {
//         console.log("Password will contain lower case characters");
//     } else {
//         console.log("Password will not contain lower case characters");
//     }
// };
// //confirm number prompt
// var promptNumber = function () {
//     var confirmNumber = window.confirm("Would you like to include numbers in your password? Press 'OK' for yes, or 'CANCEL' for no.");
//     if (confirmNumber) {
//         console.log("Password will contain numbers");
//     } else {
//         console.log("Password will not contain numbers");
//     }
// };
// //confirm special character prompt
// var promptSpecialChar = function () {
//     var confirmSpecialChar = window.confirm("Would you like to include special characters in your password? Press 'OK' for yes, or 'CANCEL' for no.");
//     if (confirmSpecialChar) {
//         console.log("Password will contain special characters");
//     } else {
//         console.log("Password will not contain special characters");
//     }
// };
// //determine password length
// var promptCharQuant = function () {
//     var selectCharQuant = "";
//     while (isNaN(selectCharQuant) || selectCharQuant < 8 || selectCharQuant > 128) {
//         selectCharQuant = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128.")
//         selectCharQuant = parseInt(selectCharQuant);
//     }
//     console.log("your password will be " + selectCharQuant + " characters long.");
//     return selectCharQuant;
// };

// //execute randomizing functions
// randomUpperCase();
// randomLowerCase();
// randomNumber();
// randomSpecialChar();
// randomAllSelectChar();

// promptUpperCase();
// promptLowerCase();
// promptNumber();
// promptSpecialChar();
// promptCharQuant();

// //generate password function
// var generatePassword = function () {

//}

// // Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);