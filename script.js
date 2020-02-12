let characterNumber = prompt("How many characters do you want for your password?")

if (characterNumber > 8 ) {
   
    console.log(characterNumber)
}else{
    characterNumber = prompt("Pick a number > 8 and < 128");
}







let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
