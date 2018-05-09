/**
 * Given an encoded string, return it's decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
 * Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
 * Examples:
 * s = "3[a]2[bc]", return "aaabcbc".
 * s = "3[a2[c]]", return "accaccacc".
 * s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 * 
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    var res = "";
    var i = 0;
    while (i<s.length) {
        var charCode = s.charCodeAt(i);
        if (charCode>="0".charCodeAt(0) && charCode<="9".charCodeAt(0)) {
            var end = i+1;
            while (s.charAt(end)!="[") {
                end++;
            }
            var repeat = parseInt(s.substring(i,end),10);
            //console.log("s[i-end]="+s.substring(i,end)+", repeat="+repeat);
            i = end;
            end++;
            var leftCount = 1;
            while (true) {
                if (s.charAt(end)=="[") {
                    leftCount++;
                } else if (s.charAt(end)=="]") {
                    leftCount--;
                }
                if (leftCount==0 && s.charAt(end)=="]") {
                    break;
                }
                end++;
            }
            var tmp = decodeString(s.substring(i+1,end));
            res += tmp.repeat(repeat);
            i = end+1;
            continue;
        }
        res += s.charAt(i);
        i++;
    }
    return res;
};

//test
var s = "3[a]2[bc]";
var result = decodeString(s);
console.log(result);