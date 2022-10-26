function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function reverseString(s) {
  return s.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b
}



export {capitalize, reverseString, calculator};