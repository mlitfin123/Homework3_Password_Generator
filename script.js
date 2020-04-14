

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate password prompts
function generatePassword(){
  var length = prompt("Enter a password length between 8 and 128");
  var lower = confirm("Use lowercase letters?")
  var upper = confirm("Use uppercase letters?")
  var number = confirm("Use numbers?")
  var symbol = confirm("Use symbols?")

  if (length < 8 || length > 128){
    alert("Please enter a length between 8 and 128");
  }

  if (lower == true){
    randomLower();
    console.log(randomLower());
  }
  if (upper == true){
    randomUpper();
    console.log(randomUpper());
  }
  if (number == true){
    randomNumber();
    console.log(randomNumber());
  }
  if (symbol == true){
    randomSymbol();
    console.log(randomSymbol());
  }
}

//Generate random lower letter
function randomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Generate random upper letter
function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Generate random number
function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Generate random symbol
function randomSymbol(){
  const symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
