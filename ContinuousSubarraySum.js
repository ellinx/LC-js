/*
Given a list of non-negative numbers and a target integer k,
write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k,
that is, sums up to n*k where n is also an integer.

Example 1:

Input: [23, 2, 4, 6, 7],  k=6
Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.

Example 2:

Input: [23, 2, 6, 4, 7],  k=6
Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.

Note:

1. The length of the array won't exceed 10,000.
2. You may assume the sum of all the numbers is in the range of a signed 32-bit integer.

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    var sumToI = {};
    var sum = 0;
    for (var i=0;i<nums.length;i++) {
        sum += nums[i];
        if (k==0) {
            if (sum==0 && i>0) {
                return true;
            }
            if (sum in sumToI) {
                if (i-sumToI[sum]>1) {
                    return true;
                }
            } else {
                sumToI[sum] = i;
            }
            continue;
        }
        var temp = sum%k;
        if (temp==0 && i>0) {
            return true;
        }
        if (temp in sumToI) {
            if (i-sumToI[temp]>1) {
                return true;
            }
        } else {
            sumToI[temp] = i;
        }
    }
    return false;
};
