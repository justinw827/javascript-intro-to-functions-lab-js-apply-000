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
  var retVal = ""
  
  if (string.toLowerCase() === lowercase) {
    retVal = "I can\'t hear you!"
  } else if (string.toUpperCase() === uppercase) {
    retVal = "YES INDEED!"
  } else if (string === mixedcase) {
    retVal = "I love you too."
  } else {
    retVal = "Unexpected string."
  }
  
  return retVal;
}