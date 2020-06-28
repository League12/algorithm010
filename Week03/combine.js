function combine(n, k) {
    if (!k) return [];
    const result = [];
    const arr = [];
    function generate(start = 1) {
        if (arr.length === k) {
            result.push([...arr]);
            return;
        }
        for (let i = start;i <= n;i++) {
            arr.push(i);
            generate(i + 1);
            arr.pop();
        }
    }
    generate();
    return result;
}