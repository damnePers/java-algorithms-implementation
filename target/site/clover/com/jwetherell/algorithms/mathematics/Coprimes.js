var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":42,"id":13118,"methods":[{"el":15,"sc":5,"sl":15},{"el":41,"sc":5,"sl":26}],"name":"Coprimes","sl":13}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_149":{"methods":[{"sl":26}],"name":"totientTest","pass":true,"statements":[{"sl":27},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":38},{"sl":39},{"sl":40}]},"test_78":{"methods":[{"sl":26}],"name":"divideTest","pass":true,"statements":[{"sl":27},{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":35},{"sl":38},{"sl":39},{"sl":40}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [149, 78], [149, 78], [], [149, 78], [149, 78], [149, 78], [149, 78], [149, 78], [149, 78], [149, 78], [], [], [149, 78], [149, 78], [149, 78], [], []]
