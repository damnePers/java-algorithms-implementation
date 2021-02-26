var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":59,"id":13542,"methods":[{"el":27,"sc":5,"sl":23},{"el":58,"sc":5,"sl":35}],"name":"GreatestCommonDivisor","sl":12}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_20":{"methods":[{"sl":35}],"name":"testEuclideanGCD","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":43},{"sl":44},{"sl":45},{"sl":46},{"sl":47},{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54},{"sl":57}]},"test_246":{"methods":[{"sl":23}],"name":"testRecursiveGCD","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26}]},"test_67":{"methods":[{"sl":23}],"name":"divideTest","pass":true,"statements":[{"sl":24},{"sl":25},{"sl":26}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [246, 67], [246, 67], [246, 67], [246, 67], [], [], [], [], [], [], [], [], [20], [20], [20], [20], [], [], [], [], [20], [20], [20], [20], [20], [], [], [20], [20], [20], [20], [20], [], [], [20], [], []]