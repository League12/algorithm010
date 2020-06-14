

function moveZeroes(nums) {
    let count = 0;
    for (let i = 0;i < nums.length;i++) {
        if (nums[i] === 0) {
            count++;
        } else if (count > 0) {
            nums[i - count] = nums[i];
            nums[i] = 0;
        }
    }
}

