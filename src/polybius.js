// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const cypher = [
    {"a" : "11"}, {"b" : "21"}, {"c" : "31"}, {"d" : "41"}, {"e": "51"},

    {"f" : "12"}, {"g" : "22"}, {"h" : "32"}, {"i" : "42"}, {"j" : "42"},
    {"k" : "52"},

    {"l" : "13"}, {"m" : "23"}, {"n" : "33"}, {"o" : "43"}, {"p" : "53"},

    {"q" : "14"}, {"r" : "24"}, {"s" : "34"}, {"t" : "44"}, {"u" : "54"},

    {"v" : "15"}, {"w" : "25"}, {"x" : "35"}, {"y" : "45"}, {"z" : "55"}
  ]
  
  const returnCypher = [
      {"11" : "a"}, {"21" : "b"}, {"31" : "c"}, {"41" : "d"}, {"51" : "e"},
  
      {"12" : "f"}, {"22" : "g"}, {"32" : "h"}, {"42" : "(i/j)"}, {"52" : "k"},
  
      {"13" : "l"}, {"23" : "m"}, {"33" : "n"}, {"43" : "o"}, {"53" : "p"},
  
      {"14" : "q"}, {"24" : "r"}, {"34" : "s"}, {"44" : "t"}, {"54" : "u"},
  
      {"15" : "v"}, {"25" : "w"}, {"35" : "x"}, {"45" : "y"}, {"55" : "z"}
  ]

  function polybius(input, encode = true) {

    let result = []
    input = input.toLowerCase()
    if(typeof input !== "string") return false

    if (encode) {
      return encoded(input)
    } 
    if (!encode) {
      return decode(input)
    }

    function encoded(input) {
      // loop through input string
        // loop through input string
      for (let i = 0; i < input.length; i++) {
        let letter = input[i]
        // if current letter is " ", push " " into result
        if (letter == " ") result.push(letter)
        cypher.forEach(char => {
          // if current letter is found in cypher, push to result that current key's value
          if (letter == Object.keys(char)) result.push(Object.values(char))
        })
      }
      // return result.join("") to recombine into string
      return result.join("")
    }

    function decode(input) {
      // if string to be decoded is odd, return false as it wasn't encoded properly if at all
      if (input.split(" ").join('').length % 2 === 1) return false
      // split input into an array of number pairs and spaces
      let splitInput = []
      for (let i = 0; i < input.length; i += 2) {
        if(input[i] === " ") {
          input = input.replace(" ", "")
          splitInput.push(" ")
        }
        splitInput.push(input.substring(i, i + 2))
      }
      // loop through split input
      splitInput.forEach(pair => {
        // if current pairing is a space push it into result
        if (pair === " ") result.push(pair)
        // loop though returnCypher
        returnCypher.forEach(char => {
          // if current pairing matches a key in returnCypher, push that current key's value 
          if (pair == Object.keys(char)) result.push(Object.values(char)) 
        })
      })
      // return the joined array as a string
      return result.join("")
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
