var topKFrequent = function(nums, k) {
    const map = new Map();
    const arr = Array.from(new Set(nums));
    nums.forEach(item => {
        if (map.has(item)) map.set(item, map.get(item) + 1);
        else map.set(item, 0);
    });
    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
};