/*
Given a string, determine if it is a palindrome,
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0
    let r = s.length-1
    const alnum = /[0-9a-z]/i
    while (l<r) {
        while (l<r && !alnum.test(s.charAt(l))) {
            l++
        }
        while (r>l && !alnum.test(s.charAt(r))) {
            r--
        }
        //console.log(s.charAt(l)+","+s.charAt(r))
        if (s.charAt(l).toUpperCase()!=s.charAt(r).toUpperCase()) {
            return false
        }
        l++
        r--
    }
    return true
};
