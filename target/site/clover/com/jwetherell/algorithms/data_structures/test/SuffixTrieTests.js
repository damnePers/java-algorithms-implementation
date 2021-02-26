var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":18,"id":18020,"methods":[{"el":17,"sc":5,"sl":12}],"name":"SuffixTrieTests","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_193":{"methods":[{"sl":12}],"name":"testSuffixTrie","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":16}]},"test_236":{"methods":[{"sl":12}],"name":"testSuffixTrie","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":16}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [193, 236], [], [193, 236], [193, 236], [193, 236], [], []]
