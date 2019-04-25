/*
Given a char array representing tasks CPU need to do.
It contains capital letters A to Z where different letters represent different tasks.
Tasks could be done without original order. Each task could be done in one interval.
For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks,
there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.

Note:
1. The number of tasks is in the range [1, 10000].
2. The integer n is in the range [0, 100].
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let counter = {}
    let most_freq = 0
    for (let c of tasks) {
        if (!counter.hasOwnProperty(c)) {
            counter[c] = 0
        }
        counter[c]++
        most_freq = Math.max(most_freq, counter[c])
    }
    //console.log(counter)
    let total_most_freq = 0
    for (const k in counter) {
        if (counter[k]==most_freq) {
            total_most_freq++
        }
    }
    if (total_most_freq-1>n) {
        return tasks.length
    }
    return Math.max(tasks.length, (most_freq-1)*(n+1)+total_most_freq)
};
