function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  const str = x.toString();

  return str === str.split("").reverse().join("");
}
