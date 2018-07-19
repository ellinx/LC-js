/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3


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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var ret = [];
    if (root==null) {
        return ret;
    }
    dfs(root, "", ret);
    return ret;
};

var dfs = function(root, path, ret) {
    if (root.left==null && root.right==null) {
        if (path=="") {
            ret.push(""+root.val);
        } else {
            ret.push(path+"->"+root.val);
        }
    }
    if (root.left!=null) {
        if (path=="") {
            dfs(root.left, ""+root.val, ret);
        } else {
            dfs(root.left, path+"->"+root.val, ret);
        }
    }
    if (root.right!=null) {
        if (path=="") {
            dfs(root.right, ""+root.val, ret);
        } else {
            dfs(root.right, path+"->"+root.val, ret);
        }
    }

};
