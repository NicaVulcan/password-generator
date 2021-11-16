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
        alert("Your password WILL include upper case characters.");
    } else {
        alert("Your password WILL NOT include upper case characters.");
    };
    var confirmLowerCase = window.confirm("Would you like to include lower case characters in your password?");
    if (confirmLowerCase) {
        selectedCharType = selectedCharType.concat(lowerCase);
        alert("Your password WILL include lower case characters.");
    } else {
        alert("Your password WILL NOT include lower case characters.");
    };
    var confirmNumber = window.confirm("Would you like to include numbers in your password?");
    if (confirmNumber) {
        selectedCharType = selectedCharType.concat(number);
        alert("Your password WILL include numbers.");
    } else {
        alert("Your password WILL NOT include numbers.");
    };
    var confirmSpecialChar = window.confirm("Would you like to include special characters in your password?");
    if (confirmSpecialChar) {
        selectedCharType = selectedCharType.concat(specialChar);
        alert("Your password WILL include special characters");
    } else {
        alert("Your password WILL NOT include special characters");
    };

    //ensure at least one character type is selected
    while (confirmUpperCase != true && confirmLowerCase != true && confirmNumber != true && confirmSpecialChar != true) {
        alert("You must choose at least one type of character");
        break;
    }

    return [confirmPassLength, confirmUpperCase, confirmLowerCase, confirmNumber, confirmSpecialChar];
};

//create the password
var writePassword = function () {
    //create an array out of passwordParameters function
    var parameters = passwordParameters();

    //empty variable for generated password
    var generatedPW = "";

    //iterate random character from selected character arrays
    for (var i = 0; i < parameters[0]; i++) {
        generatedPW += selectedCharType[Math.floor(Math.random() * selectedCharType.length)];
    }

    //reset the array so that each click of 'generate password' button yields password with selected character types
    selectedCharType = [];

    console.log("Your password is " + parameters[0] + " characters long. Contains upper case characters: " + parameters[2] + ". Contains lower case characters: " + parameters[2] + ". Contains numbers: " + parameters[3] + ". Contains special characters: " + parameters[4] + ".");
    console.log("Your password is " + generatedPW);
    return generatedPW;
};

// // Write password to the #password input
function typePassword() {
    var password = writePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", typePassword);