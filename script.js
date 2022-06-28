function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var specialChars = "!@#$%^&*()_+";
  var userSelections = "";
  var password = "";
  //1. prompt user for parameters
  var legnth = prompt("Enter the number of characters from 8 - 128");

  //a while loop that makes the user enter the correct legnt
  while (legnth < 8 || legnth > 128) {
    legnth = prompt("Enter a number from 8 - 128");
  }

  //confirms used ask the user if tey want to include the specific things
  var includeUpperCase = confirm(
    "Would you like to include Upper Case letter?"
  );
  var includeLowerCase = confirm(
    "Would you like to include lower case letters?"
  );
  var includeNumbers = confirm("Would you like to include number?");
  var includeSpecialChars = confirm(
    "Would you like to include Special Characters?"
  );
  //while loop that requires user to include atleast one option
  //loop will keep running if they keep clicking cancel
  while (
    includeUpperCase === false &&
    includeLowerCase === false &&
    includeNumbers === false &&
    includeSpecialChars === false
  ) {
    alert("ERROR: You need to atleast inlude upper or lower case letters.");
    var includeUpperCase = confirm(
      "Would you like to include Upper Case letter?"
    );
    var includeLowerCase = confirm(
      "Would you like to include lower case letters?"
    );
    var includeNumbers = confirm("Would you like to include number?");
    var includeSpecialChars = confirm(
      "Would you like to include Special Characters?"
    );
  }
  // adds string to array if user clicks ok or cancel
  if (includeUpperCase === true) {
    userSelections = userSelections.concat(upperCase);
  }

  if (includeLowerCase === true) {
    userSelections = userSelections.concat(lowerCase);
  }

  if (includeNumbers === true) {
    userSelections = userSelections.concat(numbers);
  }

  if (includeSpecialChars === true) {
    userSelections = userSelections.concat(specialChars);
  }
  console.log(userSelections);

  //now the for loop will run through the user selection array x amount of times and grab a random char to add to the password string

  for (let i = 0; i < legnth; i++) {
    password += userSelections.charAt(
      Math.floor(Math.random() * userSelections.length)
    )
  }
  //return password
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

