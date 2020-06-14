

var trap = function(height) {
    let res = 0;
    for (let i = 1;i < height.length - 1;i++) {
        let leftMax = 0;
        let rightMax = 0;
        for (let j = i;j >= 0;j--) {
            leftMax = Math.max(leftMax, height[j]);
        }
        for (let m = i;m < height.length;m++) {
            rightMax = Math.max(rightMax, height[m]);
        }
        if (Math.min(leftMax, rightMax) >= height[i]) {
            res += Math.min(leftMax, rightMax) - height[i];
        }
    }
    return res;
};
