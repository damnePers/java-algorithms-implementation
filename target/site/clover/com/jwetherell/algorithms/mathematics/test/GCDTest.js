var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":40,"id":23026,"methods":[{"el":18,"sc":5,"sl":13},{"el":39,"sc":5,"sl":20}],"name":"GCDTest","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_20":{"methods":[{"sl":20}],"name":"testEuclideanGCD","pass":true,"statements":[{"sl":22},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":28},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":34},{"sl":35},{"sl":36},{"sl":37},{"sl":38}]},"test_246":{"methods":[{"sl":13}],"name":"testRecursiveGCD","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [246], [], [246], [246], [246], [], [], [20], [], [20], [20], [20], [20], [20], [], [20], [20], [20], [20], [20], [], [20], [20], [20], [20], [20], [], []]
