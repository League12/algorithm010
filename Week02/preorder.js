function preorder(root) {
    const result = [];
    const arr = [];
    if (root) arr.push(root);

    while (arr.length) {
        const node = arr.pop();
        result.push(node.val);

        if (node.children) arr.push(...node.children.reverse());
    }

    return result;
}