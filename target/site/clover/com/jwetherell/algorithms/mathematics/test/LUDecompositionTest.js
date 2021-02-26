var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":46,"id":23046,"methods":[{"el":23,"sc":5,"sl":11},{"el":34,"sc":5,"sl":25},{"el":45,"sc":5,"sl":36}],"name":"LUDecompositionTest","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_41":{"methods":[{"sl":11},{"sl":25}],"name":"decompositionTest1","pass":true,"statements":[{"sl":12},{"sl":15},{"sl":16},{"sl":17},{"sl":22},{"sl":27},{"sl":28},{"sl":29},{"sl":31},{"sl":32},{"sl":33}]},"test_73":{"methods":[{"sl":11},{"sl":36}],"name":"decompositionTest2","pass":true,"statements":[{"sl":12},{"sl":15},{"sl":16},{"sl":17},{"sl":22},{"sl":38},{"sl":39},{"sl":40},{"sl":42},{"sl":43},{"sl":44}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [41, 73], [41, 73], [], [], [41, 73], [41, 73], [41, 73], [], [], [], [], [41, 73], [], [], [41], [], [41], [41], [41], [], [41], [41], [41], [], [], [73], [], [73], [73], [73], [], [73], [73], [73], [], []]
