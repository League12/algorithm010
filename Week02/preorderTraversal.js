function preorderTraversal(root) {
    const result = [];
    const arr = [];
    let current = root;

    while (current || arr.length > 0) {
        while (current) {
            result.push(current.val);
            arr.push(current);
            current = current.left;
        }

        current = arr.pop();
        current = current.right;
    }

    return result;
}