var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":23001,"methods":[{"el":23,"sc":5,"sl":15},{"el":33,"sc":5,"sl":25},{"el":44,"sc":5,"sl":35}],"name":"ExponentiationTest","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_188":{"methods":[{"sl":35}],"name":"fastRecusriveExponentiationModuloTest","pass":true,"statements":[{"sl":37},{"sl":38},{"sl":39},{"sl":40},{"sl":42},{"sl":43}]},"test_228":{"methods":[{"sl":15}],"name":"recusriveExponentiationTest","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":21},{"sl":22}]},"test_7":{"methods":[{"sl":25}],"name":"fastRecusriveExponentiationTest","pass":true,"statements":[{"sl":27},{"sl":28},{"sl":29},{"sl":31},{"sl":32}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [228], [], [228], [228], [228], [], [228], [228], [], [], [7], [], [7], [7], [7], [], [7], [7], [], [], [188], [], [188], [188], [188], [188], [], [188], [188], [], []]
