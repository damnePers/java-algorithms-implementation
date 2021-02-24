var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":50,"id":16655,"methods":[{"el":23,"sc":5,"sl":13},{"el":36,"sc":5,"sl":25},{"el":48,"sc":5,"sl":38}],"name":"LCPArrayTest","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":13}],"name":"smallTest","pass":true,"statements":[{"sl":15},{"sl":16},{"sl":17},{"sl":18},{"sl":20},{"sl":22}]},"test_11":{"methods":[{"sl":25}],"name":"longTest","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":32},{"sl":35}]},"test_134":{"methods":[{"sl":38}],"name":"singleLetterTest","pass":true,"statements":[{"sl":40},{"sl":41},{"sl":42},{"sl":43},{"sl":45},{"sl":47}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [102], [], [102], [102], [102], [102], [], [102], [], [102], [], [], [11], [], [11], [11], [11], [11], [], [11], [], [], [11], [], [], [134], [], [134], [134], [134], [134], [], [134], [], [134], [], [], []]
