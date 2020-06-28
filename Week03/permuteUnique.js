function permuteUnique(nums) {
    if (!nums.length) return [];
    nums.sort((a, b) => a - b);
    const result = [];
    const arr = [];
    const hash = {};
    function generate() {
        if (nums.length === arr.length) {
            result.push([...arr]);
            return;
        }
        for (let i = 0;i < nums.length;i++) {
            if (hash[i] || (i > 0 && nums[i] === nums[i - 1] && !hash[i - 1])) continue
            hash[i] = true;
            arr.push(nums[i]);
            generate();
            arr.pop();
            hash[i] = false;
        }
    }
    generate();
    return result;
}