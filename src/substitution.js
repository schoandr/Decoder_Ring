// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// const alphabet ="xoyqmcgrukswaflnthdjpzibev"
// const input = "thinkful"

const substitutionModule = (function () {
  
  const alphLoop = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    // create accumulator array
    const result = []
    // if there isn't an alphabet provided to decode or encode return false
    if (!alphabet) return false
    // create an array from alphabet string
    const text = alphabet.split("");
    // if an element of the array repeats then function returns true, else false and stores as a variable.
    const checkRepeat = text.some(function(v,i,a){
      return a.lastIndexOf(v)!=i;
    });

    // so if checkRepeat is true then there is a repeat, thus return false.
    if (checkRepeat) return false
    // if encoding alphabet isn't long enough return false.
    if (alphabet.length !== 26) return false
    // turn input into all lowercase
    input = input.toLowerCase()

    // if encode is true then encrypt the input
    if (encode) return encoded(input, alphabet)
    // if encode is false then decrypt the input
    if (!encode) return decoded(input, alphabet)
  
    // encoded
    function encoded(input, alphabet) {
      // make variables of each string split into an array for looping...
      const alphLoopArr = alphLoop.split("")
      const inputArr = input.split("")
      const alphabetArr = alphabet.split("")
      // for each character of input...
        // find the index of current character in the normal a-z alphabet
        // if current character isn't in normal a-z alphabet, it's likely a space or symbol
          // push that space or symbol and continue
        // push the character from encrypting alphabet that matches that index

      inputArr.map(char => {
        let current = alphLoopArr.indexOf(char)
        if (!alphLoopArr.some(character => character === char)) result.push(char)
        result.push(alphabetArr[current])
      })
      // return result array joined back into string
      return result.join("")
    }
    
    function decoded(input, alphabet) {
      // make variables of each string split into an array for looping...
      const alphLoopArr = alphLoop.split("")
      const inputArr = input.split("")
      const alphabetArr = alphabet.split("")
      // for each character of encrypted input...
        // find the index of current character in the encrypt alphabet
        // if current character isn't in normal a-z alphabet, it's likely a space or symbol
          // push that space or symbol and continue
        // push the character from regular a-z alphabet that matches that index in the encrypt alphabet
      inputArr.map(char => {
        let current = alphabetArr.indexOf(char)
        if(!alphabetArr.some(character => character === char)) result.push(char)
        result.push(alphLoopArr[current])
      })
      // return result array joined back into string
      return result.join("")
    }

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
