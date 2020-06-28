function permute(nums) {
    if (!nums.length) return [];
    const result = [];
    const arr = [];
    function generate() {
        if (arr.length === nums.length) {
            result.push([...arr]);
            return;
        }
        for (let i = 0;i < nums.length;i++) {
            if (arr.indexOf(nums[i]) === -1) {
                arr.push(nums[i]);
                generate();
                arr.pop();
            }
        }
    }
    generate();
    return result;
}