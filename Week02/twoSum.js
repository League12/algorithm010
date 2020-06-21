function twoSum(nums, target) {
    let obj = {};
    for (let i = 0;i < nums.length;i++) {
        if (nums[i] in obj) {
            return [obj[nums[i]], i]
        }
        obj[target - nums[i]] = i;
    }
}