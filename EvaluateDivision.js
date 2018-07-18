/*
Equations are given in the format A / B = k, where A and B are variables represented as strings,
and k is a real number (floating point number). Given some queries, return the answers.
If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0.
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries ,
where equations.size() == values.size(), and the values are positive.
This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].

The input is always valid.
You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

*/


/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    var g = {};
    equations.forEach(function(equation, i){
        if (!(equation[0] in g)) {
            g[equation[0]] = {};
        }
        if (!(equation[1] in g)) {
            g[equation[1]] = {};
        }
        g[equation[0]][equation[1]] = values[i];
        g[equation[1]][equation[0]] = 1/values[i];
    });
    var ret = new Array(queries.length);
    queries.forEach(function(query, i){
        if (!(query[0] in g) || !(query[1] in g)) {
            ret[i] = -1;
            return;
        }
        q = [[query[0],1]];
        visited = new Set([query[0]]);
        while (q.length>0) {
            var cur = q.shift();
            for (var k in g[cur[0]]) {
                if (k==query[1]) {
                    ret[i] = cur[1]*g[cur[0]][k];
                    return;
                }
                if (!visited.has(k)) {
                    visited.add(k);
                    q.push([k,cur[1]*g[cur[0]][k]]);
                }
            }
        }
        ret[i] = -1;
    });
    return ret;
};
