const palindromes = function (string) {
  let strArray = Array.from(string.toLowerCase());
  strArray = strArray.filter(item => {
    if (item !== ',' && item !== '!' && item !== '.' && item !== ' ') {
      return true;
    }
  });
  let normal = strArray.toString().replace(/,/g,'');
  let reversed = strArray.reverse().toString().replace(/,/g,'');

  return normal === reversed ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
