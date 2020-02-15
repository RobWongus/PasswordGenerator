let welcome = alert("Welcome to password generator!")
let characters = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
let numbers = ("0123456789")
let numberOfCharacters = i > 8; i < 128;
let symbols = ("!@#$%^&*+?")

let randomFunction = {
  characters: getRandomCharacters,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

submit.addEventListener("click", () =>{


function generatePassword(characters, numbers, symbols) {
  let password = generate(characters + numbers + symbols);
  let textCount = numberOfCharacters
  let passwordText = document.querySelector("#password");

  for (let i = 0; i < length; i++)
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));

  }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword(length, characters) {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   for (let i = 0; i<length; i++)
//     pwd += characters.charAt(Math.floor(Math.random() * characters.length));

//   }

//   passwordText.value = password;



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
}
