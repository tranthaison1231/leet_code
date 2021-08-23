function twoSum(numbers: number[], target: number) {
  const hash: Record<number, number> = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (hash[num]) {
      return [hash[num], i];
    }
    hash[target - num] = i;
  }
  return [];
}

twoSum([2, 7, 11, 15], 9); // [0, 1]
