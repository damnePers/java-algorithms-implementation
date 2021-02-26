var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":635,"id":3074,"methods":[{"el":39,"sc":5,"sl":37},{"el":111,"sc":5,"sl":41},{"el":126,"sc":5,"sl":116},{"el":143,"sc":5,"sl":128},{"el":148,"sc":5,"sl":145},{"el":161,"sc":5,"sl":153},{"el":170,"sc":5,"sl":166},{"el":212,"sc":5,"sl":175},{"el":221,"sc":5,"sl":217},{"el":229,"sc":5,"sl":226},{"el":237,"sc":5,"sl":231},{"el":266,"sc":5,"sl":239},{"el":285,"sc":5,"sl":271},{"el":300,"sc":5,"sl":293},{"el":457,"sc":5,"sl":454},{"el":499,"sc":5,"sl":496}],"name":"HashArrayMappedTrie","sl":22},{"el":305,"id":3320,"methods":[],"name":"HashArrayMappedTrie.Node","sl":302},{"el":428,"id":3320,"methods":[{"el":317,"sc":9,"sl":313},{"el":326,"sc":9,"sl":324},{"el":335,"sc":9,"sl":333},{"el":344,"sc":9,"sl":342},{"el":358,"sc":9,"sl":354},{"el":370,"sc":9,"sl":363},{"el":391,"sc":9,"sl":372},{"el":402,"sc":9,"sl":393},{"el":409,"sc":9,"sl":404},{"el":413,"sc":9,"sl":411},{"el":427,"sc":9,"sl":418}],"name":"HashArrayMappedTrie.ArrayNode","sl":307},{"el":449,"id":3400,"methods":[{"el":438,"sc":9,"sl":434},{"el":448,"sc":9,"sl":443}],"name":"HashArrayMappedTrie.KeyValueNode","sl":430},{"el":491,"id":3410,"methods":[{"el":464,"sc":9,"sl":461},{"el":490,"sc":9,"sl":466}],"name":"HashArrayMappedTrie.TreePrinter","sl":459},{"el":542,"id":3463,"methods":[{"el":510,"sc":9,"sl":507},{"el":519,"sc":9,"sl":515},{"el":530,"sc":9,"sl":524},{"el":541,"sc":9,"sl":535}],"name":"HashArrayMappedTrie.JavaCompatibleIteratorWrapper","sl":501},{"el":551,"id":3486,"methods":[{"el":550,"sc":9,"sl":548}],"name":"HashArrayMappedTrie.JavaCompatibleMapEntry","sl":544},{"el":634,"id":3488,"methods":[{"el":559,"sc":9,"sl":557},{"el":567,"sc":9,"sl":564},{"el":575,"sc":9,"sl":572},{"el":583,"sc":9,"sl":580},{"el":591,"sc":9,"sl":588},{"el":599,"sc":9,"sl":596},{"el":612,"sc":9,"sl":601},{"el":629,"sc":17,"sl":626},{"el":633,"sc":9,"sl":617}],"name":"HashArrayMappedTrie.JavaCompatibleMap","sl":553}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_157":{"methods":[{"sl":37},{"sl":41},{"sl":116},{"sl":128},{"sl":145},{"sl":166},{"sl":175},{"sl":226},{"sl":231},{"sl":239},{"sl":271},{"sl":313},{"sl":324},{"sl":333},{"sl":342},{"sl":354},{"sl":363},{"sl":372},{"sl":393},{"sl":404},{"sl":411},{"sl":434},{"sl":496},{"sl":507},{"sl":515},{"sl":524},{"sl":535},{"sl":548},{"sl":557},{"sl":564},{"sl":572},{"sl":588},{"sl":596},{"sl":601},{"sl":617},{"sl":626}],"name":"testHAMT","pass":true,"statements":[{"sl":38},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":59},{"sl":61},{"sl":64},{"sl":67},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":75},{"sl":77},{"sl":78},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":133},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":146},{"sl":147},{"sl":168},{"sl":169},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":189},{"sl":191},{"sl":192},{"sl":194},{"sl":195},{"sl":196},{"sl":197},{"sl":198},{"sl":200},{"sl":201},{"sl":203},{"sl":204},{"sl":205},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":228},{"sl":232},{"sl":234},{"sl":235},{"sl":236},{"sl":240},{"sl":241},{"sl":242},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":249},{"sl":250},{"sl":251},{"sl":252},{"sl":253},{"sl":254},{"sl":255},{"sl":261},{"sl":262},{"sl":265},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":279},{"sl":280},{"sl":284},{"sl":314},{"sl":315},{"sl":316},{"sl":325},{"sl":334},{"sl":343},{"sl":355},{"sl":356},{"sl":357},{"sl":364},{"sl":365},{"sl":367},{"sl":368},{"sl":369},{"sl":373},{"sl":374},{"sl":376},{"sl":377},{"sl":378},{"sl":379},{"sl":381},{"sl":382},{"sl":383},{"sl":384},{"sl":387},{"sl":388},{"sl":390},{"sl":394},{"sl":396},{"sl":397},{"sl":398},{"sl":400},{"sl":401},{"sl":405},{"sl":407},{"sl":408},{"sl":412},{"sl":435},{"sl":436},{"sl":437},{"sl":498},{"sl":508},{"sl":509},{"sl":517},{"sl":518},{"sl":526},{"sl":528},{"sl":529},{"sl":537},{"sl":539},{"sl":540},{"sl":549},{"sl":558},{"sl":566},{"sl":574},{"sl":590},{"sl":598},{"sl":602},{"sl":603},{"sl":604},{"sl":605},{"sl":606},{"sl":607},{"sl":608},{"sl":609},{"sl":619},{"sl":628},{"sl":631},{"sl":632}]},"test_40":{"methods":[{"sl":37},{"sl":41},{"sl":116},{"sl":128},{"sl":145},{"sl":166},{"sl":175},{"sl":226},{"sl":231},{"sl":239},{"sl":271},{"sl":313},{"sl":324},{"sl":333},{"sl":342},{"sl":354},{"sl":363},{"sl":372},{"sl":393},{"sl":404},{"sl":411},{"sl":434},{"sl":496},{"sl":507},{"sl":515},{"sl":524},{"sl":535},{"sl":548},{"sl":557},{"sl":564},{"sl":572},{"sl":588},{"sl":596},{"sl":601},{"sl":617},{"sl":626}],"name":"testHAMT","pass":true,"statements":[{"sl":38},{"sl":42},{"sl":43},{"sl":44},{"sl":45},{"sl":52},{"sl":53},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":59},{"sl":61},{"sl":64},{"sl":67},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":75},{"sl":77},{"sl":78},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":87},{"sl":88},{"sl":89},{"sl":90},{"sl":91},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":102},{"sl":104},{"sl":105},{"sl":108},{"sl":118},{"sl":119},{"sl":120},{"sl":121},{"sl":123},{"sl":124},{"sl":125},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":134},{"sl":135},{"sl":136},{"sl":137},{"sl":138},{"sl":139},{"sl":140},{"sl":146},{"sl":147},{"sl":168},{"sl":169},{"sl":177},{"sl":178},{"sl":179},{"sl":180},{"sl":183},{"sl":184},{"sl":185},{"sl":189},{"sl":191},{"sl":192},{"sl":194},{"sl":195},{"sl":196},{"sl":197},{"sl":198},{"sl":200},{"sl":201},{"sl":203},{"sl":204},{"sl":205},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":228},{"sl":232},{"sl":234},{"sl":235},{"sl":236},{"sl":240},{"sl":241},{"sl":242},{"sl":245},{"sl":246},{"sl":247},{"sl":248},{"sl":249},{"sl":250},{"sl":251},{"sl":252},{"sl":253},{"sl":254},{"sl":255},{"sl":261},{"sl":262},{"sl":265},{"sl":273},{"sl":274},{"sl":275},{"sl":276},{"sl":277},{"sl":278},{"sl":279},{"sl":280},{"sl":284},{"sl":314},{"sl":315},{"sl":316},{"sl":325},{"sl":334},{"sl":343},{"sl":355},{"sl":356},{"sl":357},{"sl":364},{"sl":365},{"sl":367},{"sl":368},{"sl":369},{"sl":373},{"sl":374},{"sl":376},{"sl":377},{"sl":378},{"sl":379},{"sl":381},{"sl":382},{"sl":383},{"sl":384},{"sl":387},{"sl":388},{"sl":390},{"sl":394},{"sl":396},{"sl":397},{"sl":398},{"sl":400},{"sl":401},{"sl":405},{"sl":407},{"sl":408},{"sl":412},{"sl":435},{"sl":436},{"sl":437},{"sl":498},{"sl":508},{"sl":509},{"sl":517},{"sl":518},{"sl":526},{"sl":528},{"sl":529},{"sl":537},{"sl":539},{"sl":540},{"sl":549},{"sl":558},{"sl":566},{"sl":574},{"sl":590},{"sl":598},{"sl":602},{"sl":603},{"sl":604},{"sl":605},{"sl":606},{"sl":607},{"sl":608},{"sl":609},{"sl":619},{"sl":628},{"sl":631},{"sl":632}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [40, 157], [], [40, 157], [], [], [40, 157], [], [], [40, 157], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [40, 157], [], [40, 157], [40, 157], [], [], [], [40, 157], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [40, 157], [], [40, 157], [40, 157], [], [], [40, 157], [], [], [], [], [], [], [], [40, 157], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [40, 157], [], [40, 157], [40, 157], [], [], [], [], [], [40, 157], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [40, 157], [], [], [], [40, 157], [], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [40, 157], [], [40, 157], [], [], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [40, 157], [40, 157], [], [], [40, 157], [], [], [], [], [], [40, 157], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [40, 157], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [], [], [40, 157], [40, 157], [], [], [], [], [], [], [], [40, 157], [40, 157], [], [], [], [], [], [], [], [40, 157], [40, 157], [], [], [], [], [], [], [], [], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [40, 157], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [], [40, 157], [], [], [40, 157], [40, 157], [], [40, 157], [40, 157], [40, 157], [], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [], [40, 157], [40, 157], [], [], [40, 157], [40, 157], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [40, 157], [], [40, 157], [], [], [], [], [], [], [], [], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [40, 157], [], [40, 157], [40, 157], [], [], [], [], [], [40, 157], [], [40, 157], [], [40, 157], [40, 157], [], [], [], [], [], [40, 157], [], [40, 157], [], [40, 157], [40, 157], [], [], [], [], [], [], [], [40, 157], [40, 157], [], [], [], [], [], [], [], [40, 157], [40, 157], [], [], [], [], [], [40, 157], [], [40, 157], [], [], [], [], [], [40, 157], [], [40, 157], [], [], [], [], [], [], [], [], [], [], [], [], [], [40, 157], [], [40, 157], [], [], [], [], [], [40, 157], [], [40, 157], [], [], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [40, 157], [], [], [], [], [], [], [], [40, 157], [], [40, 157], [], [], [], [], [], [], [40, 157], [], [40, 157], [], [], [40, 157], [40, 157], [], [], []]
