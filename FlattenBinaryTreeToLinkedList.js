/*
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6

The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6


*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    helper(root);
};

var helper = function(root) {
    if (root==null) {
        return [null,null];
    }
    if (root.left!=null && root.right!=null) {
        var l = helper(root.left);
        root.left = null;
        nextCur = root.right;
        root.right = l[0];
        var r = helper(nextCur);
        l[1].right = r[0];
        return [root,r[1]]
    }
    if (root.left!=null) {
        var l = helper(root.left);
        root.left = null;
        root.right = l[0];
        return [root,l[1]]
    }
    if (root.right!=null) {
        var r = helper(root.right);
        return [root,r[1]]
    }
    return [root,root];
}
