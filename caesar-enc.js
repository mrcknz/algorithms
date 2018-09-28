/* function caesarShift (str, shift) {
  let cipher = [];
  let uni;
  cipher = str.split().map( (c, i) => {
    console.log(c)
    uni = str.charCodeAt(i);
    console.log('uni: ', uni);
    uni = uni > 89 && uni < 97 ? uni - 64 - shift : (uni > 96 && uni < 122 ? uni - 97 - shift : uni - shift);
    console.log(String.fromCharCode(uni));
    return String.fromCharCode(uni);
  });
  return cipher;
}

console.log(caesarShift('adsfuz', 2)) */


/*
/* Solution from Leon
/*
function caesarShift (clearText, shift) {
  if (shift < 0) return caesarShift(clearText, shift + 26);
  return clearText.split('').reduce((cipherText, char) => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      char = (code >= 65 && code <= 90) ?
      String.fromCharCode(((code + shift - 65) % 26) + 65) :
      String.fromCharCode(((code + shift - 97) % 26) + 97);
    }
    return cipherText + char;
  }, '');
} */

const ciphers = {
  cipherText11: 'Av il vy uva av il: aoha pz aol xblzapvu.',
  cipherText12: 'Axee bl xfimr, tee max wxobel tkx axkx.',
  cipherText13: 'Espdp gtzwpye opwtrsed slgp gtzwpye pyod.',
  cipherText14: 'Fqq ymfy lqnyyjw nx sty ltqi.',
  cipherText15: 'D kruvh! D kruvh! Pb nlqjgrp iru d kruvh!',
  cipherText16: 'Em svwe epib em izm, jcb svwe vwb epib em uig jm.',
  cipherText17: 'Bss jvgu uvf urnq!'
};

function breakCaesarShift (cipher) {
  const solutions = [];
  const counts = [];
  for (let i = 0; i <= 26; i++) {
    solutions.push(caesarShift(cipher, -i));
    counts[i] = 0
    counts[i] += (solutions[i].match(/e/g) || []).length;
    counts[i] += (solutions[i].match(/a/g) || []).length;
    counts[i] += (solutions[i].match(/t/g) || []).length;
  }
  return solutions[counts.indexOf(Math.max(...counts))];
}



for (i = 0; i < 7 ; i++) {
  console.log(breakCaesarShift(ciphers['cipherText'+(11+i)]));
}

/*/
/// Solution from Leon
/*/

/* const scoreText = input => input
.toLowerCase()
.split('')
.reduce((acc, char) => {
  return acc += frequencies[char] ? frequencies[char] : 0;
}, 0) / input.length;


function breakCaesarShift (cipherText) {

let bestGuess = {
  shift: 0,
  score: 0
};

for (let shift = 0; shift <= 25; shift++) {
  let score = scoreText(caesarShift(cipherText, -shift));
  if (score > bestGuess.score) bestGuess = { shift, score }
}

const clearText = caesarShift(cipherText, -bestGuess.shift);
const shift = bestGuess.shift.toString().padStart(2, ' ');1
const score = bestGuess.score.toFixed(3);
console.log(`Shift: ${shift} | Score: ${score} | Cleartext: ${clearText}`);

return clearText;
} */