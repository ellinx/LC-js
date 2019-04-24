/*
Given a binary tree, return the vertical order traversal of its nodes' values.
(ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:
Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]

Examples 2:
Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]

Examples 3:
Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    let mm = {}
    if (root==null) {
        return []
    }
    cur = [[root,0]]
    while (cur.length>0) {
        next = []
        for (let i=0;i<cur.length;i++) {
            if (!mm.hasOwnProperty(cur[i][1])) {
                mm[cur[i][1]] = []
            }
            mm[cur[i][1]].push(cur[i][0].val)
            if (cur[i][0].left!=null) {
                next.push([cur[i][0].left, cur[i][1]-1])
            }
            if (cur[i][0].right!=null) {
                next.push([cur[i][0].right,cur[i][1]+1])
            }
        }
        cur = next
    }
    let ret = []
    //console.log(mm)
    let keys = Object.keys(mm).sort(function(a,b){
        return parseInt(a)-parseInt(b)
    })
    //console.log(keys)
    keys.forEach(function(key){
        ret.push(mm[key])
    })
    return ret
};
