function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) {
    return "";
  }

  let prefix: string = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
const strs = ["flower", "flow", "flight"];
const sdf = longestCommonPrefix(strs);
