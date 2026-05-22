const typing =
document.querySelector(".typing");

const words = [

  "Full Stack Developer",
  "Frontend Enthusiast",
  "React Developer"

];

let wordIndex = 0;

let charIndex = 0;

let currentWord = "";

let currentChars = "";

function typeEffect(){

  if(wordIndex >= words.length){

    wordIndex = 0;
  }

  currentWord = words[wordIndex];

  currentChars =
  currentWord.slice(0,++charIndex);

  typing.textContent =
  currentChars;

  if(currentChars.length === currentWord.length){

    wordIndex++;

    charIndex = 0;
  }

  setTimeout(typeEffect,150);

}

typeEffect();