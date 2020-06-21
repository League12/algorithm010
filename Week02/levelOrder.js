function levelOrder(root) {
    const result = [];
    const arr = [];
    if (root) arr.push(root);

    while (arr.length) {
        const level = [];
        const len = arr.length;
        for (let i = 0;i < len;i++) {
            const node = arr.shift();
            level.push(node.val);
            if (node.children && node.children.length) arr.push(...node.children); 
        }

        result.push(level);
    }

    return result;
}