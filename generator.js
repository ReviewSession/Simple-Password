// VARIABLES ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var specialChar = "01234567890!@#$%^&*()__+-={}[]|";

// Uses the above variables to create a giant string of many possible passwords 
var characterBank = lowercase + uppercase + specialChar;

// The password generated will be contained here
var randomPass = [];

// FUNCTIONS ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function createPassword(length){
  
  setProperty("passDisplay", "text", "");
  randomPass = [];

  for (var i = 0; i < length; i+= 1){
  
    var randomIndex = randomNumber(0,characterBank.length - 1);
    appendItem(randomPass, characterBank[randomIndex]);
  }
  
  setProperty("passDisplay", "text", randomPass.join(""));
}

// MAIN SETUP -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


onEvent("lengthInput", "input", function(){
  
  var getLength = getNumber("lengthInput");
  createPassword(getLength);

});

