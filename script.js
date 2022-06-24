
function generatePassword(){
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "1234567890"
  var specialChars = "!@#$%^&*()_+"
  var userSelections = ""
  var password = ""
  //1. prompt user for parameters
  var legnth = prompt("Enter the number of characters from 8 - 128")
  if (legnth < 8 || legnth > 128) {
    legnth = prompt("Invalid input")
  }
 //length, special chars, numbers, upperscase, lowercase
  var includeUpperCase = confirm("Would you like to include Upper Case letter?")
  var includeLowerCase = confirm("Would you like to include lower case letters?")
  var includeNumbers = confirm("Would you like to include number?")
  var includeSpecialChars = confirm("Would you like to include Special Characters?")


  //checks to see if the user entered no for Upper and lower case, if they did it will ask them again
  if(includeUpperCase === false && includeLowerCase === false){
    alert("You need atleast choose lower or upper case")
    var includeUpperCase = confirm("Would you like to include Upper Case letter?")
    var includeLowerCase = confirm("Would you like to include lower case letters?")
  }

  // adds string to array if user clicks ok or cancel
  if (includeUpperCase === true) {
    userSelections = userSelections.concat(upperCase)
  }

  if(includeLowerCase === true){
    userSelections = userSelections.concat(lowerCase)
  }

  if(includeNumbers === true){
    userSelections = userSelections.concat(numbers)
  }

  if(includeSpecialChars === true){
    userSelections = userSelections.concat(specialChars)
  }
  console.log(userSelections)

  //now the for loop will run through the user selection array x amount of times and grab a random char to add to the password string

for (let i = 0; i < legnth; i++) {
  password += userSelections.charAt(Math.floor(Math.random() * userSelections.length))
  
}

console.log(password)



return password
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


function getParameters() {
  //set legnth via prompt
  length = prompt ()
  if(length < 8){
    //tell user password must be 8 characters or more
  }else if(length > 128){

  }
  //tell user passowrd must be less than 129 characters
  //add characters to availableCharacters via prompts

}