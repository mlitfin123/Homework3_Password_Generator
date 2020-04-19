

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

  if (length < 8 || length > 128){
    alert("Please enter a length between 8 and 128");
  }
  else {
    var upper = confirm("Use uppercase letters?");
    var lower = confirm("Use lowercase letters?");
    var number = confirm("Use numbers?");
    var symbol = confirm("Use symbols?");
    var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var low = "abcdefghijklmnopqrstuvwxyz";
    var num = "0123456789";
    var sym = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var password = "";
    var char = "";
    for (i=0; i<length; i++) {
        e1 = Math.ceil(up.length * Math.random()*Math.random());
        e2 = Math.ceil(low.length * Math.random()*Math.random());
        e3 = Math.ceil(num.length * Math.random()*Math.random());
        e4 = Math.ceil(sym.length * Math.random()*Math.random());
        if (upper == true){
          char += up.charAt(e1);
        }
        if (lower == true){
        char += low.charAt(e2);
        }
        if (number == true){
        char += num.charAt(e3);
        }
        if (symbol == true){
        char += sym.charAt(e4);
        }
        password = char;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,length);
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
