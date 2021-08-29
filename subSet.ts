function subSet(numbers: number[]) {
  const powerset: number[][] = [];
  generatePowerset([], 0);
  function generatePowerset(path: number[], index: number) {
    powerset.push(path);
    for (let i = index; i < numbers.length; i++) {
      generatePowerset([...path, numbers[i]], i + 1);
    }
  }
  return powerset;
}

subSet([2, 7, 11, 15]);
