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
  
  var lowercase = "hello"
  var uppercase = "HELLO"
  var mixedcase = "i love you, Grandma."
  if (string.toLowerCase() === lowercase) {
    return "I can\'t hear you!"
  } else if (string.toUpperCase() === uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you too."
  } 
  
}