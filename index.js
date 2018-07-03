function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  var retVal = string
  
  var lowercase = "hello"
  var uppercase = "HELLO"
  var mixedcase = "i love you, Grandma."
  if (string.toLowerCase() === lowercase) {
    retVal = "I can\'t hear you!";
  } else if (string === uppercase) {
    retVal = "YES INDEED!";
  } else if (string === mixedcase) {
    retVal = "I love you too.";
  } else {
    retVal = "Unexpected string.";
  }
  
  return retVal;
}