function buildTree(preorder, inorder) {
    if (!preorder || !inorder) return null;
    function generate(ps, pe, is, ie) {
        if (ps > pe || is > ie) return null;
        let root = new TreeNode(preorder[ps]);
        let middle = inorder.indexOf(preorder[ps]);
        let leftNum = middle - is;
        root.left = generate(ps + 1, ps + leftNum, is, middle - 1);
        root.right = generate(ps + leftNum + 1, pe, middle + 1, ie);
        return root;
    }
    return generate(0, preorder.length - 1, 0, inorder.length - 1);
}