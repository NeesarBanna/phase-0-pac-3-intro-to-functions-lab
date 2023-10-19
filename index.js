const { spyOn } = require("expect");

function shout(string) {
    // todo
  }
//----------------------------------------------
function shout(string) {
        return string.toUpperCase();
   }
   "Hello!".toUpperCase(); // 'HELLO!'

function whisper(string) {
    return string.toLowerCase();
   }
   "hello!".toLowerCase(); // 'hello'

function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }  

  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    }
}

function sayHiToHeadphonedRoommate(inputString) {
    if (inputString === inputString.toLowerCase()) {
      return "I can't hear you!";
    } else if (inputString === inputString.toUpperCase()) {
      return "YES INDEED!";
    } else if (inputString === "Let's have dinner together!") {
      return "I would love to!";
    }
  }

