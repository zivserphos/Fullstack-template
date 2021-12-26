export const palindrome = (string: string) =>
  string.split("").reverse().join("");

export const average = (array: number[]) => {
  const reducer = (sum: number, item: number) => sum + item;

  return array.reduce(reducer, 0) / array.length;
};
