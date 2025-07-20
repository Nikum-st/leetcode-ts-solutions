function romanToInt(s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const arrayS = s.split("");

  return arrayS.reduce((acc, roman) => {
    return acc + romanMap[roman];
  }, 0);
}
