var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":546,"id":10688,"methods":[{"el":47,"sc":5,"sl":45},{"el":73,"sc":5,"sl":57},{"el":95,"sc":5,"sl":82},{"el":106,"sc":5,"sl":102},{"el":142,"sc":5,"sl":115},{"el":172,"sc":5,"sl":149},{"el":226,"sc":5,"sl":180},{"el":235,"sc":5,"sl":233},{"el":251,"sc":5,"sl":240},{"el":291,"sc":5,"sl":257},{"el":303,"sc":5,"sl":296}],"name":"SuffixTree","sl":23},{"el":345,"id":10894,"methods":[{"el":312,"sc":9,"sl":310},{"el":323,"sc":9,"sl":317},{"el":344,"sc":9,"sl":328}],"name":"SuffixTree.Link","sl":305},{"el":498,"id":10923,"methods":[{"el":368,"sc":9,"sl":361},{"el":372,"sc":9,"sl":370},{"el":376,"sc":9,"sl":374},{"el":380,"sc":9,"sl":378},{"el":404,"sc":9,"sl":382},{"el":409,"sc":9,"sl":406},{"el":424,"sc":9,"sl":411},{"el":432,"sc":9,"sl":429},{"el":451,"sc":9,"sl":437},{"el":482,"sc":9,"sl":456},{"el":497,"sc":9,"sl":487}],"name":"SuffixTree.Edge","sl":347},{"el":545,"id":11045,"methods":[{"el":504,"sc":9,"sl":502},{"el":508,"sc":9,"sl":506},{"el":544,"sc":9,"sl":510}],"name":"SuffixTree.TreePrinter","sl":500}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_197":{"methods":[{"sl":45},{"sl":57},{"sl":82},{"sl":180},{"sl":233},{"sl":240},{"sl":257},{"sl":310},{"sl":361},{"sl":370},{"sl":374},{"sl":378},{"sl":382},{"sl":406},{"sl":411}],"name":"testSuffixTree","pass":true,"statements":[{"sl":46},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":70},{"sl":71},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":181},{"sl":182},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":191},{"sl":195},{"sl":196},{"sl":197},{"sl":201},{"sl":203},{"sl":204},{"sl":206},{"sl":208},{"sl":209},{"sl":210},{"sl":213},{"sl":215},{"sl":218},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":234},{"sl":241},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":258},{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":264},{"sl":265},{"sl":266},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":280},{"sl":281},{"sl":284},{"sl":290},{"sl":311},{"sl":362},{"sl":363},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":371},{"sl":375},{"sl":379},{"sl":383},{"sl":384},{"sl":385},{"sl":386},{"sl":387},{"sl":388},{"sl":389},{"sl":390},{"sl":391},{"sl":392},{"sl":407},{"sl":408},{"sl":412},{"sl":413},{"sl":414},{"sl":415},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":421},{"sl":422},{"sl":423}]},"test_234":{"methods":[{"sl":45},{"sl":57},{"sl":102},{"sl":115},{"sl":180},{"sl":233},{"sl":240},{"sl":310},{"sl":361},{"sl":370},{"sl":374},{"sl":378},{"sl":382},{"sl":406},{"sl":411}],"name":"testSuffixArray","pass":true,"statements":[{"sl":46},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":70},{"sl":71},{"sl":104},{"sl":105},{"sl":116},{"sl":117},{"sl":118},{"sl":119},{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":130},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":141},{"sl":181},{"sl":182},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":191},{"sl":195},{"sl":196},{"sl":197},{"sl":199},{"sl":201},{"sl":203},{"sl":204},{"sl":206},{"sl":208},{"sl":209},{"sl":210},{"sl":213},{"sl":215},{"sl":216},{"sl":218},{"sl":220},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":234},{"sl":241},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":311},{"sl":362},{"sl":363},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":371},{"sl":375},{"sl":379},{"sl":383},{"sl":384},{"sl":385},{"sl":386},{"sl":387},{"sl":388},{"sl":389},{"sl":390},{"sl":391},{"sl":392},{"sl":393},{"sl":394},{"sl":395},{"sl":407},{"sl":408},{"sl":412},{"sl":413},{"sl":414},{"sl":415},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":421},{"sl":422},{"sl":423}]},"test_37":{"methods":[{"sl":45},{"sl":57},{"sl":82},{"sl":180},{"sl":233},{"sl":240},{"sl":257},{"sl":310},{"sl":361},{"sl":370},{"sl":374},{"sl":378},{"sl":382},{"sl":406},{"sl":411}],"name":"testSuffixTree","pass":true,"statements":[{"sl":46},{"sl":58},{"sl":59},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":70},{"sl":71},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":181},{"sl":182},{"sl":184},{"sl":185},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":191},{"sl":195},{"sl":196},{"sl":197},{"sl":201},{"sl":203},{"sl":204},{"sl":206},{"sl":208},{"sl":209},{"sl":210},{"sl":213},{"sl":215},{"sl":218},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":234},{"sl":241},{"sl":242},{"sl":243},{"sl":244},{"sl":245},{"sl":246},{"sl":258},{"sl":259},{"sl":260},{"sl":261},{"sl":262},{"sl":264},{"sl":265},{"sl":266},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":280},{"sl":281},{"sl":284},{"sl":290},{"sl":311},{"sl":362},{"sl":363},{"sl":364},{"sl":365},{"sl":366},{"sl":367},{"sl":371},{"sl":375},{"sl":379},{"sl":383},{"sl":384},{"sl":385},{"sl":386},{"sl":387},{"sl":388},{"sl":389},{"sl":390},{"sl":391},{"sl":392},{"sl":407},{"sl":408},{"sl":412},{"sl":413},{"sl":414},{"sl":415},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":421},{"sl":422},{"sl":423}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [234, 197, 37], [234, 197, 37], [], [], [], [], [], [], [], [], [], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [], [234, 197, 37], [234, 197, 37], [], [], [], [], [], [], [], [], [], [], [197, 37], [], [197, 37], [197, 37], [197, 37], [], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [], [], [], [], [], [], [], [234], [], [234], [234], [], [], [], [], [], [], [], [], [], [234], [234], [234], [234], [234], [], [234], [234], [], [234], [234], [234], [234], [234], [234], [234], [], [234], [234], [234], [234], [], [234], [], [], [], [234], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [234, 197, 37], [], [], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [234], [], [234, 197, 37], [], [234, 197, 37], [234, 197, 37], [], [234, 197, 37], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [], [234, 197, 37], [], [234, 197, 37], [234], [], [234, 197, 37], [], [234], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [], [], [], [], [], [], [234, 197, 37], [234, 197, 37], [], [], [], [], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234], [234], [], [], [], [], [], [], [], [], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [], [197, 37], [197, 37], [197, 37], [], [], [], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [197, 37], [], [197, 37], [197, 37], [], [], [197, 37], [], [], [], [], [], [197, 37], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [234, 197, 37], [234, 197, 37], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [], [234, 197, 37], [234, 197, 37], [], [], [234, 197, 37], [234, 197, 37], [], [], [234, 197, 37], [234, 197, 37], [], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234], [234], [234], [], [], [], [], [], [], [], [], [], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [234, 197, 37], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]