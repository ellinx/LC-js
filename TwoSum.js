/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var numMap = new Map();
    for ( var i=0;i<nums.length;i++ ) {
        if (numMap.has(target-nums[i])) {
            return [numMap.get(target-nums[i]), i];
        }
        numMap.set(nums[i],i);
    }
};

//test
var nums = [2, 7, 11, 15];
var target = 9;
var result = twoSum(nums, target);
console.log(result);