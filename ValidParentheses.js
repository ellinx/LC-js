/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true

Example 2:

Input: "()[]{}"
Output: true

Example 3:

Input: "(]"
Output: false

Example 4:

Input: "([)]"
Output: false

Example 5:

Input: "{[]}"
Output: true



*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    stk = [];
    for (var i=0;i<s.length;i++) {
        var c = s.charAt(i);
        if (c=='(' || c=='[' || c=='{') {
            stk.push(c);
        } else if (c==')') {
            if (stk.length==0) {
                return false;
            }
            if (stk.pop()!='(') {
                return false;
            }
        } else if (c==']') {
            if (stk.length==0) {
                return false;
            }
            if (stk.pop()!='[') {
                return false;
            }
        } else if (c=='}') {
            if (stk.length==0) {
                return false;
            }
            if (stk.pop()!='{') {
                return false;
            }
        }
    }
    return stk.length==0;
};
