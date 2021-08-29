function twoSum(numbers: number[], target: number): number[] | undefined {
  const hash: Record<number, number> = {};
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (complement in hash) {
      return [hash[complement], i];
    }
    hash[numbers[i]] = i;
  }
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
