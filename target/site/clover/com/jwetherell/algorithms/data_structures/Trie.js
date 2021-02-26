var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":493,"id":11780,"methods":[{"el":33,"sc":13,"sl":30},{"el":35,"sc":5,"sl":25},{"el":42,"sc":5,"sl":40},{"el":50,"sc":5,"sl":47},{"el":107,"sc":5,"sl":59},{"el":120,"sc":5,"sl":112},{"el":134,"sc":5,"sl":125},{"el":162,"sc":5,"sl":136},{"el":171,"sc":5,"sl":167},{"el":198,"sc":5,"sl":180},{"el":206,"sc":5,"sl":203},{"el":217,"sc":5,"sl":211},{"el":237,"sc":5,"sl":219},{"el":245,"sc":5,"sl":242},{"el":253,"sc":5,"sl":250}],"name":"Trie","sl":18},{"el":328,"id":11936,"methods":[{"el":271,"sc":9,"sl":267},{"el":279,"sc":9,"sl":273},{"el":296,"sc":9,"sl":281},{"el":304,"sc":9,"sl":298},{"el":309,"sc":9,"sl":306},{"el":313,"sc":9,"sl":311},{"el":327,"sc":9,"sl":318}],"name":"Trie.Node","sl":255},{"el":344,"id":11991,"methods":[],"name":"Trie.INodeCreator","sl":330},{"el":383,"id":11991,"methods":[{"el":350,"sc":9,"sl":348},{"el":356,"sc":9,"sl":352},{"el":382,"sc":9,"sl":358}],"name":"Trie.TriePrinter","sl":346},{"el":492,"id":12032,"methods":[{"el":391,"sc":9,"sl":389},{"el":399,"sc":9,"sl":396},{"el":407,"sc":9,"sl":404},{"el":415,"sc":9,"sl":412},{"el":423,"sc":9,"sl":420},{"el":433,"sc":9,"sl":430}],"name":"Trie.JavaCompatibleTrie","sl":385},{"el":491,"id":12044,"methods":[{"el":448,"sc":13,"sl":441},{"el":458,"sc":13,"sl":450},{"el":467,"sc":13,"sl":463},{"el":479,"sc":13,"sl":472},{"el":490,"sc":13,"sl":484}],"name":"Trie.JavaCompatibleTrie.TrieIterator","sl":435}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_171":{"methods":[{"sl":40},{"sl":59},{"sl":112},{"sl":136},{"sl":180},{"sl":203},{"sl":267},{"sl":273},{"sl":281},{"sl":298},{"sl":306}],"name":"testTrieMap","pass":true,"statements":[{"sl":41},{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":74},{"sl":77},{"sl":78},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":115},{"sl":119},{"sl":137},{"sl":138},{"sl":141},{"sl":144},{"sl":146},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":159},{"sl":161},{"sl":181},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":193},{"sl":197},{"sl":205},{"sl":268},{"sl":269},{"sl":270},{"sl":274},{"sl":275},{"sl":276},{"sl":278},{"sl":282},{"sl":284},{"sl":285},{"sl":288},{"sl":290},{"sl":291},{"sl":292},{"sl":295},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":307},{"sl":308}]},"test_19":{"methods":[{"sl":25},{"sl":30},{"sl":47},{"sl":59},{"sl":112},{"sl":125},{"sl":136},{"sl":180},{"sl":203},{"sl":211},{"sl":219},{"sl":242},{"sl":267},{"sl":273},{"sl":281},{"sl":298},{"sl":306},{"sl":389},{"sl":396},{"sl":404},{"sl":412},{"sl":420},{"sl":430},{"sl":441},{"sl":450},{"sl":463},{"sl":472}],"name":"testTrie","pass":true,"statements":[{"sl":26},{"sl":32},{"sl":49},{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":74},{"sl":77},{"sl":78},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":89},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":115},{"sl":119},{"sl":127},{"sl":130},{"sl":131},{"sl":133},{"sl":137},{"sl":138},{"sl":144},{"sl":146},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":159},{"sl":161},{"sl":181},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":193},{"sl":197},{"sl":205},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":220},{"sl":221},{"sl":222},{"sl":224},{"sl":225},{"sl":226},{"sl":227},{"sl":228},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":236},{"sl":244},{"sl":268},{"sl":269},{"sl":270},{"sl":274},{"sl":275},{"sl":276},{"sl":278},{"sl":282},{"sl":284},{"sl":285},{"sl":288},{"sl":290},{"sl":291},{"sl":292},{"sl":295},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":307},{"sl":308},{"sl":390},{"sl":398},{"sl":406},{"sl":414},{"sl":422},{"sl":432},{"sl":442},{"sl":443},{"sl":444},{"sl":445},{"sl":447},{"sl":451},{"sl":452},{"sl":453},{"sl":454},{"sl":455},{"sl":456},{"sl":465},{"sl":466},{"sl":474},{"sl":476},{"sl":477},{"sl":478}]},"test_193":{"methods":[{"sl":25},{"sl":30},{"sl":47},{"sl":59},{"sl":267},{"sl":273},{"sl":298},{"sl":306}],"name":"testSuffixTrie","pass":true,"statements":[{"sl":26},{"sl":32},{"sl":49},{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":74},{"sl":77},{"sl":78},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":89},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":268},{"sl":269},{"sl":270},{"sl":274},{"sl":275},{"sl":276},{"sl":278},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":307},{"sl":308}]},"test_236":{"methods":[{"sl":25},{"sl":30},{"sl":47},{"sl":59},{"sl":267},{"sl":273},{"sl":298},{"sl":306}],"name":"testSuffixTrie","pass":true,"statements":[{"sl":26},{"sl":32},{"sl":49},{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":74},{"sl":77},{"sl":78},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":89},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":268},{"sl":269},{"sl":270},{"sl":274},{"sl":275},{"sl":276},{"sl":278},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":307},{"sl":308}]},"test_248":{"methods":[{"sl":40},{"sl":59},{"sl":112},{"sl":136},{"sl":180},{"sl":203},{"sl":267},{"sl":273},{"sl":281},{"sl":298},{"sl":306}],"name":"testTrieMap","pass":true,"statements":[{"sl":41},{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":74},{"sl":77},{"sl":78},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":115},{"sl":119},{"sl":137},{"sl":138},{"sl":141},{"sl":144},{"sl":146},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":159},{"sl":161},{"sl":181},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":193},{"sl":197},{"sl":205},{"sl":268},{"sl":269},{"sl":270},{"sl":274},{"sl":275},{"sl":276},{"sl":278},{"sl":282},{"sl":284},{"sl":285},{"sl":288},{"sl":290},{"sl":291},{"sl":292},{"sl":295},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":307},{"sl":308}]},"test_74":{"methods":[{"sl":25},{"sl":30},{"sl":47},{"sl":59},{"sl":112},{"sl":125},{"sl":136},{"sl":180},{"sl":203},{"sl":211},{"sl":219},{"sl":242},{"sl":267},{"sl":273},{"sl":281},{"sl":298},{"sl":306},{"sl":389},{"sl":396},{"sl":404},{"sl":412},{"sl":420},{"sl":430},{"sl":441},{"sl":450},{"sl":463},{"sl":472}],"name":"testTrie","pass":true,"statements":[{"sl":26},{"sl":32},{"sl":49},{"sl":60},{"sl":61},{"sl":63},{"sl":64},{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":72},{"sl":74},{"sl":77},{"sl":78},{"sl":80},{"sl":85},{"sl":86},{"sl":87},{"sl":89},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":114},{"sl":115},{"sl":119},{"sl":127},{"sl":130},{"sl":131},{"sl":133},{"sl":137},{"sl":138},{"sl":144},{"sl":146},{"sl":149},{"sl":150},{"sl":151},{"sl":152},{"sl":153},{"sl":155},{"sl":159},{"sl":161},{"sl":181},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":193},{"sl":197},{"sl":205},{"sl":213},{"sl":214},{"sl":215},{"sl":216},{"sl":220},{"sl":221},{"sl":222},{"sl":224},{"sl":225},{"sl":226},{"sl":227},{"sl":228},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":236},{"sl":244},{"sl":268},{"sl":269},{"sl":270},{"sl":274},{"sl":275},{"sl":276},{"sl":278},{"sl":282},{"sl":284},{"sl":285},{"sl":288},{"sl":290},{"sl":291},{"sl":292},{"sl":295},{"sl":299},{"sl":300},{"sl":301},{"sl":303},{"sl":307},{"sl":308},{"sl":390},{"sl":398},{"sl":406},{"sl":414},{"sl":422},{"sl":432},{"sl":442},{"sl":443},{"sl":444},{"sl":445},{"sl":447},{"sl":451},{"sl":452},{"sl":453},{"sl":454},{"sl":455},{"sl":456},{"sl":465},{"sl":466},{"sl":474},{"sl":476},{"sl":477},{"sl":478}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [19, 193, 236, 74], [19, 193, 236, 74], [], [], [], [19, 193, 236, 74], [], [19, 193, 236, 74], [], [], [], [], [], [], [], [171, 248], [171, 248], [], [], [], [], [], [19, 193, 236, 74], [], [19, 193, 236, 74], [], [], [], [], [], [], [], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [171, 19, 248, 193, 236, 74], [], [171, 19, 248, 193, 236, 74], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [171, 19, 248, 193, 236, 74], [], [], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [171, 19, 248, 193, 236, 74], [171, 248], [], [171, 248], [], [171, 248], [171, 248], [171, 248], [171, 248], [], [], [], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [], [], [], [], [171, 19, 248, 74], [], [171, 19, 248, 74], [171, 19, 248, 74], [], [], [], [171, 19, 248, 74], [], [], [], [], [], [19, 74], [], [19, 74], [], [], [19, 74], [19, 74], [], [19, 74], [], [], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [], [], [171, 248], [], [], [171, 19, 248, 74], [], [171, 19, 248, 74], [], [], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [], [171, 19, 248, 74], [], [], [], [171, 19, 248, 74], [], [171, 19, 248, 74], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [171, 19, 248, 74], [171, 19, 248, 74], [], [], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [], [], [171, 19, 248, 74], [], [], [], [171, 19, 248, 74], [], [], [], [], [], [171, 19, 248, 74], [], [171, 19, 248, 74], [], [], [], [], [], [19, 74], [], [19, 74], [19, 74], [19, 74], [19, 74], [], [], [19, 74], [19, 74], [19, 74], [19, 74], [], [19, 74], [19, 74], [19, 74], [19, 74], [19, 74], [], [19, 74], [19, 74], [19, 74], [19, 74], [19, 74], [], [19, 74], [], [], [], [], [], [19, 74], [], [19, 74], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [171, 19, 248, 193, 236, 74], [], [], [171, 19, 248, 74], [171, 19, 248, 74], [], [171, 19, 248, 74], [171, 19, 248, 74], [], [], [171, 19, 248, 74], [], [171, 19, 248, 74], [171, 19, 248, 74], [171, 19, 248, 74], [], [], [171, 19, 248, 74], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [171, 19, 248, 193, 236, 74], [], [], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [171, 19, 248, 193, 236, 74], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [19, 74], [19, 74], [], [], [], [], [], [19, 74], [], [19, 74], [], [], [], [], [], [19, 74], [], [19, 74], [], [], [], [], [], [19, 74], [], [19, 74], [], [], [], [], [], [19, 74], [], [19, 74], [], [], [], [], [], [], [], [19, 74], [], [19, 74], [], [], [], [], [], [], [], [], [19, 74], [19, 74], [19, 74], [19, 74], [19, 74], [], [19, 74], [], [], [19, 74], [19, 74], [19, 74], [19, 74], [19, 74], [19, 74], [19, 74], [], [], [], [], [], [], [19, 74], [], [19, 74], [19, 74], [], [], [], [], [], [19, 74], [], [19, 74], [], [19, 74], [19, 74], [19, 74], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
