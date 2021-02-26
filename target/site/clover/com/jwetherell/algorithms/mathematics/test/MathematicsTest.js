var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":311,"id":23076,"methods":[{"el":27,"sc":5,"sl":23},{"el":157,"sc":5,"sl":29},{"el":182,"sc":5,"sl":159},{"el":196,"sc":5,"sl":184},{"el":205,"sc":5,"sl":198},{"el":216,"sc":5,"sl":207},{"el":227,"sc":5,"sl":218},{"el":244,"sc":5,"sl":229},{"el":255,"sc":5,"sl":246},{"el":298,"sc":5,"sl":257},{"el":310,"sc":5,"sl":300}],"name":"MathematicsTest","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_135":{"methods":[{"sl":207}],"name":"squaredDistance","pass":true,"statements":[{"sl":209},{"sl":210},{"sl":211},{"sl":212},{"sl":213},{"sl":214},{"sl":215}]},"test_175":{"methods":[{"sl":246}],"name":"isPrime","pass":true,"statements":[{"sl":248},{"sl":249},{"sl":250},{"sl":252},{"sl":253},{"sl":254}]},"test_192":{"methods":[{"sl":23},{"sl":29}],"name":"multiplication","pass":true,"statements":[{"sl":26},{"sl":31},{"sl":32},{"sl":35},{"sl":36},{"sl":37},{"sl":39},{"sl":40},{"sl":41},{"sl":43},{"sl":44},{"sl":45},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":52},{"sl":53},{"sl":55},{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":61},{"sl":64},{"sl":66},{"sl":67},{"sl":68},{"sl":70},{"sl":71},{"sl":72},{"sl":74},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":87},{"sl":88},{"sl":90},{"sl":91},{"sl":92},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":103},{"sl":104},{"sl":106},{"sl":107},{"sl":108},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":115},{"sl":116},{"sl":118},{"sl":119},{"sl":120},{"sl":122},{"sl":123},{"sl":124},{"sl":127},{"sl":129},{"sl":130},{"sl":131},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":146},{"sl":147},{"sl":149},{"sl":150},{"sl":151},{"sl":153},{"sl":154},{"sl":155}]},"test_201":{"methods":[{"sl":198}],"name":"chebyshevDistance","pass":true,"statements":[{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204}]},"test_205":{"methods":[{"sl":218}],"name":"euclideanDistance","pass":true,"statements":[{"sl":220},{"sl":221},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":226}]},"test_206":{"methods":[{"sl":300}],"name":"millerRabin","pass":true,"statements":[{"sl":302},{"sl":303},{"sl":305},{"sl":306},{"sl":308},{"sl":309}]},"test_229":{"methods":[{"sl":257}],"name":"sieveOfEratosthenes","pass":true,"statements":[{"sl":259},{"sl":260},{"sl":261},{"sl":263},{"sl":264},{"sl":265},{"sl":267},{"sl":268},{"sl":269},{"sl":271},{"sl":272},{"sl":273},{"sl":275},{"sl":276},{"sl":277},{"sl":279},{"sl":280},{"sl":281},{"sl":283},{"sl":284},{"sl":285},{"sl":287},{"sl":288},{"sl":289},{"sl":291},{"sl":292},{"sl":293},{"sl":295},{"sl":296},{"sl":297}]},"test_247":{"methods":[{"sl":229}],"name":"getPrimeFactorization","pass":true,"statements":[{"sl":231},{"sl":232},{"sl":233},{"sl":235},{"sl":236},{"sl":237},{"sl":239},{"sl":240},{"sl":241},{"sl":242}]},"test_262":{"methods":[{"sl":23},{"sl":159}],"name":"division","pass":true,"statements":[{"sl":26},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":172},{"sl":173},{"sl":175},{"sl":176},{"sl":177},{"sl":179},{"sl":180},{"sl":181}]},"test_9":{"methods":[{"sl":184}],"name":"knapsack","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":193},{"sl":194}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [192, 262], [], [], [192, 262], [], [], [192], [], [192], [192], [], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [192], [192], [192], [], [], [], [262], [], [262], [262], [262], [262], [262], [], [262], [262], [262], [], [262], [262], [262], [], [262], [262], [262], [], [262], [262], [262], [], [], [9], [], [9], [9], [9], [9], [9], [9], [9], [9], [9], [], [], [], [201], [], [201], [201], [201], [201], [201], [], [], [135], [], [135], [135], [135], [135], [135], [135], [135], [], [], [205], [], [205], [205], [205], [205], [205], [205], [205], [], [], [247], [], [247], [247], [247], [], [247], [247], [247], [], [247], [247], [247], [247], [], [], [], [175], [], [175], [175], [175], [], [175], [175], [175], [], [], [229], [], [229], [229], [229], [], [229], [229], [229], [], [229], [229], [229], [], [229], [229], [229], [], [229], [229], [229], [], [229], [229], [229], [], [229], [229], [229], [], [229], [229], [229], [], [229], [229], [229], [], [229], [229], [229], [], [], [206], [], [206], [206], [], [206], [206], [], [206], [206], [], [], []]
