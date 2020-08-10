

const caesar = function(str, shift){
    return str
    .split("")
    .map(select => charShifed(select, shift))
    .join("")
}

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const charShifed = (select, shift) => {
  const code = select.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 46) + codeSet(code)
    );
  }
  return select;
};

console.log(caesar('lspe', -4));
module.exports = caesar

