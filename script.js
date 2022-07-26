// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables for the options of the password criteria // Is there a way to combine all 4 as options?
var numbers = "0123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialCharacters = "!@#%^&*()".split("");

// 1. Prompt user with choices using window.prompt/confirm for password criteria
function choices() {
  //Insert variable into window.prompt to prompt user to decide the length
  var userChoice = window.prompt("Choose character length between 8 and 128");
  //Insert varibles into window.prompt to prompt user to decide yes or no with "ok and cancel button"
  var numberChoice = window.confirm(
    "Click OK to confirm that you want to include a number"
  );
  var lowerCaseChoice = window.confirm(
    "Click OK to confirm that you want to include a lowercase character"
  );
  var upperCaseChoice = window.confirm(
    "Click OK to confirm that you want to include an uppercase character"
  );
  var specialCharactersChoice = window.confirm(
    "Click OK to confirm that you want to include a special character"
  );

  // 2. Validate the input
  if (userChoice >= 8 && userChoice <= 128) {
    generatePassword(
      numberChoice,
      upperCaseChoice,
      lowerCaseChoice,
      specialCharactersChoice,
      userChoice
    );
  } else {
    window.alert("You must choose character length between 8 and 128!");
    var userChoice = window.prompt("Choose character length between 8 and 128");
    generatePassword(
      numberChoice,
      upperCaseChoice,
      lowerCaseChoice,
      specialCharactersChoice,
      userChoice
    );
  }
}
//   window.alert("You must select one paremeter!");

// !numberChoice &&
//   !lowerCaseChoice &&
//   !upperCaseChoice &&
//   !specialCharactersChoice

// 3. Generate password based on criteria // Do I need to add choices from previous function to let the generate password know which choices it combine in an array and a string?
function generatePassword(
  numberChoice,
  upperCaseChoice,
  lowerCaseChoice,
  specialCharactersChoice,
  userChoice
) {
  var userLength = [];
  var userEnd = "";

  if (numberChoice) {
    userLength = userLength.concat(numbers);
  }
  if (lowerCaseChoice) {
    userLength = userLength.concat(lowerCase);
  }
  if (upperCaseChoice) {
    userLength = userLength.concat(upperCase);
  }
  if (specialCharactersChoice) {
    userLength = userLength.concat(specialCharacters);
  }
  //console.log("userLength ", userLength);
  for (var i = 0; i < userChoice; i++) {
    userEnd += userLength[Math.floor(Math.random() * userLength.length)];
  }

  writePassword(userEnd);
  return userEnd;
}

// 4. Display password on screen
// Write password to the #password input
function writePassword(final) {
  var password = final; // this isn't defined. How to define the password?
  var passwordText = document.getElementById("password");
  console.log(passwordText);
  passwordText.value = final;
}

// Add event listener to generate button
generateBtn.addEventListener("click", choices);
