var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":13374,"methods":[{"el":5,"sc":5,"sl":5},{"el":16,"sc":5,"sl":10},{"el":23,"sc":5,"sl":18},{"el":30,"sc":5,"sl":25}],"name":"Distance","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_135":{"methods":[{"sl":18}],"name":"squaredDistance","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22}]},"test_201":{"methods":[{"sl":10}],"name":"chebyshevDistance","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":14},{"sl":15}]},"test_205":{"methods":[{"sl":25}],"name":"euclideanDistance","pass":true,"statements":[{"sl":26},{"sl":27},{"sl":28},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [201], [201], [201], [201], [201], [201], [], [], [135], [135], [135], [135], [135], [], [], [205], [205], [205], [205], [205], [], []]
