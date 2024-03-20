export function getNumberOfChars(name: string) {
  // number of characters in: name
  let numberOfCharacters = name.length;
  return numberOfCharacters;
}

export function getFirstChar(name: string) {
  // first character of: name
  let firstCharacter = name.charAt(0);
  return firstCharacter;
}

export function getLastChar(name: string) {
  // last character of: name
  let lastCharacter = name.charAt(name.length - 1);
  return lastCharacter;
}

export function getLower(name: string) {
  // name all in lower case (example: "ABC" becomes "abc")
  let lowerCase = name.toLowerCase();
  return lowerCase;
}

export function getUpper(name: string) {
  // name all in upper case (example: "abc" becomes "ABC")
  let upperCase = name.toUpperCase();
  return upperCase;
}