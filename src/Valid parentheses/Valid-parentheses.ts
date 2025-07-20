function isValid(s: string): boolean {
  let stack: string[] = [];

  const open = ["(", "{", "["];
  const close = [")", "}", "]"];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];

    if (open.includes(current)) {
      stack.push(current);
    } else if (close.includes(current)) {
      const top = stack.pop() as string;
      if (close.indexOf(current) !== open.indexOf(top)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
