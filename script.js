let welcome = alert("Welcome to password generator!")
let question1 = prompt("Pick a number between 0 and 128.")
let characters = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
let numbers = ("0123456789")
let numberOfCharacters = ("8")
let symbols = ("!@#$%^&*+?")

let charNum = document.getElementById("charNum");
let numBox = document.getElementById("numBox");
let symBox = document.getElementById("sym");
let enter = document.getElementById("enter");
let yourPw = document.getElementById("yourPw");

submit.addEventListener("click", function(e){

  let characters = charcters;
  (btn) ? characters += numbers += symbols : ""; 
});


function writePassword(length, characters) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for (let i = 0; i<length; i++)
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

