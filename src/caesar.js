// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift = 0, encode = true) {
    // if shift is less than -25, greater than 25, or zero, function returns false
    if (shift > 25 || shift < -25 || shift === 0) return false
    let result = []
    input = input.toLowerCase()
    
    
    if (encode) {
      // if encode is true...
      return encoded(input, shift)
    } else {
      // if encode is false...
      return decode(input, shift)
    }

    function encoded(input, shift) {
      // if shift is positive
      if (Math.sign(shift) === 1) {
        for (let i = 0; i < input.length; i++) {
          let num = input.charCodeAt(i)
          if (num >= 97 && num <= 122) {
            num += shift
            num > 122 ? result.push(String.fromCharCode(num - 26)) : result.push(String.fromCharCode(num))
          } else {
            result.push(String.fromCharCode(num))
          }
        }
        return result.join("")
      }
      // if shift is negative
      if (Math.sign(shift) === -1) {
        for (let i = 0; i < input.length; i++) {
          let num = input.charCodeAt(i)
          if (num >= 97 && num <= 122) {
            num += shift
            num < 97 ? result.push(String.fromCharCode(num + 26)) : result.push(String.fromCharCode(num))
          } else {
            result.push(String.fromCharCode(num))
          }
        }
        return result.join("")
      }
    }

    function decode(input, shift) {
      // if shift is positive
      if (Math.sign(shift) === 1) {
        for (let i = 0; i < input.length; i++) {
          let num = input.charCodeAt(i)
          if (num >= 97 && num <= 122) {
            num -= shift
            num < 97 ? result.push(String.fromCharCode(num + 26)) : result.push(String.fromCharCode(num))
          } else {
            result.push(String.fromCharCode(num))
          }
        }
        return result.join("")
      }
      // if shift is negative
      if (Math.sign(shift) === -1) {
        for (let i = 0; i < input.length; i++) {
          let num = input.charCodeAt(i)
          if (num >= 97 && num <= 122) {
            num -= shift
            num > 122 ? result.push(String.fromCharCode(num - 26)) : result.push(String.fromCharCode(num))
          } else {
            result.push(String.fromCharCode(num))
          }
        }
        return result.join("")
      }
    }

decode("xczpy kyeyxglc", -2)
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };