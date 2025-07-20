function twoSum(nums: number[], target: number): number[] {
  let map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (difference in map) {
      return [map[difference], i];
    }

    map[nums[i]] = i;
  }
  throw new Error("No two sum solution");
}
