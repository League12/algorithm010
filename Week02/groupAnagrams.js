function groupAnagrams(strs) {
    const hash = new Map();
    strs.forEach(item => {
        const str = item.split('').sort().join('');
        if (hash.has(str)) {
            hash.set(str, [...hash.get(str), item]);
        } else {
            hash.set(str, [item]);
        }
    });
    return [...hash.values()];
}