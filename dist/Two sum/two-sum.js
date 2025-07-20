function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (difference in map) {
            return [map[difference], i];
        }
        map[nums[i]] = i;
    }
    throw new Error("No two sum solution");
}
export {};
//# sourceMappingURL=two-sum.js.map