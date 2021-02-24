var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":422,"id":2421,"methods":[{"el":39,"sc":5,"sl":27},{"el":50,"sc":5,"sl":48},{"el":68,"sc":5,"sl":61},{"el":88,"sc":5,"sl":70},{"el":103,"sc":5,"sl":90},{"el":107,"sc":5,"sl":105},{"el":111,"sc":5,"sl":109},{"el":121,"sc":5,"sl":116}],"name":"FenwickTree","sl":23},{"el":162,"id":2487,"methods":[{"el":137,"sc":9,"sl":125},{"el":161,"sc":9,"sl":139}],"name":"FenwickTree.FenwickTreePrinter","sl":123},{"el":421,"id":2534,"methods":[{"el":176,"sc":9,"sl":174},{"el":183,"sc":9,"sl":181},{"el":229,"sc":9,"sl":224},{"el":241,"sc":9,"sl":234}],"name":"FenwickTree.Data","sl":164},{"el":420,"id":2552,"methods":[{"el":254,"sc":13,"sl":250},{"el":264,"sc":13,"sl":259},{"el":277,"sc":13,"sl":269},{"el":290,"sc":13,"sl":282},{"el":328,"sc":13,"sl":298},{"el":366,"sc":13,"sl":336},{"el":374,"sc":13,"sl":371},{"el":385,"sc":13,"sl":379},{"el":393,"sc":13,"sl":390},{"el":408,"sc":13,"sl":398},{"el":419,"sc":13,"sl":413}],"name":"FenwickTree.Data.RangeSumData","sl":246}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_123":{"methods":[{"sl":27},{"sl":48},{"sl":61},{"sl":70},{"sl":90},{"sl":105},{"sl":109},{"sl":174},{"sl":224},{"sl":234},{"sl":250},{"sl":269},{"sl":282},{"sl":298},{"sl":336},{"sl":371},{"sl":413}],"name":"testRangeSumFenwickTree2","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":37},{"sl":38},{"sl":49},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":85},{"sl":87},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99},{"sl":101},{"sl":106},{"sl":110},{"sl":175},{"sl":226},{"sl":227},{"sl":228},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":251},{"sl":253},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":276},{"sl":284},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":299},{"sl":301},{"sl":303},{"sl":307},{"sl":310},{"sl":313},{"sl":316},{"sl":319},{"sl":324},{"sl":325},{"sl":337},{"sl":339},{"sl":341},{"sl":345},{"sl":348},{"sl":351},{"sl":354},{"sl":357},{"sl":362},{"sl":363},{"sl":373},{"sl":415},{"sl":416},{"sl":417},{"sl":418}]},"test_177":{"methods":[{"sl":27},{"sl":48},{"sl":61},{"sl":70},{"sl":90},{"sl":105},{"sl":109},{"sl":174},{"sl":224},{"sl":234},{"sl":250},{"sl":269},{"sl":282},{"sl":298},{"sl":336},{"sl":371},{"sl":413}],"name":"testRangeSumFenwickTree","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":37},{"sl":38},{"sl":49},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":85},{"sl":87},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99},{"sl":101},{"sl":106},{"sl":110},{"sl":175},{"sl":226},{"sl":227},{"sl":228},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":251},{"sl":253},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":276},{"sl":284},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":299},{"sl":301},{"sl":303},{"sl":307},{"sl":310},{"sl":313},{"sl":316},{"sl":319},{"sl":324},{"sl":325},{"sl":337},{"sl":339},{"sl":341},{"sl":345},{"sl":348},{"sl":351},{"sl":354},{"sl":357},{"sl":362},{"sl":363},{"sl":373},{"sl":415},{"sl":416},{"sl":417},{"sl":418}]},"test_37":{"methods":[{"sl":27},{"sl":48},{"sl":61},{"sl":70},{"sl":90},{"sl":105},{"sl":109},{"sl":174},{"sl":224},{"sl":234},{"sl":250},{"sl":269},{"sl":282},{"sl":298},{"sl":336},{"sl":371},{"sl":413}],"name":"testRangeSumFenwickTree","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":37},{"sl":38},{"sl":49},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":85},{"sl":87},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99},{"sl":101},{"sl":106},{"sl":110},{"sl":175},{"sl":226},{"sl":227},{"sl":228},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":251},{"sl":253},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":276},{"sl":284},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":299},{"sl":301},{"sl":303},{"sl":307},{"sl":310},{"sl":313},{"sl":316},{"sl":319},{"sl":324},{"sl":325},{"sl":337},{"sl":339},{"sl":341},{"sl":345},{"sl":348},{"sl":351},{"sl":354},{"sl":357},{"sl":362},{"sl":363},{"sl":373},{"sl":415},{"sl":416},{"sl":417},{"sl":418}]},"test_96":{"methods":[{"sl":27},{"sl":48},{"sl":61},{"sl":70},{"sl":90},{"sl":105},{"sl":109},{"sl":174},{"sl":224},{"sl":234},{"sl":250},{"sl":269},{"sl":282},{"sl":298},{"sl":336},{"sl":371},{"sl":413}],"name":"testRangeSumFenwickTree2","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31},{"sl":32},{"sl":33},{"sl":34},{"sl":37},{"sl":38},{"sl":49},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":66},{"sl":67},{"sl":71},{"sl":72},{"sl":73},{"sl":74},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":85},{"sl":87},{"sl":91},{"sl":92},{"sl":93},{"sl":94},{"sl":95},{"sl":96},{"sl":97},{"sl":99},{"sl":101},{"sl":106},{"sl":110},{"sl":175},{"sl":226},{"sl":227},{"sl":228},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":251},{"sl":253},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":276},{"sl":284},{"sl":285},{"sl":286},{"sl":287},{"sl":289},{"sl":299},{"sl":301},{"sl":303},{"sl":307},{"sl":310},{"sl":313},{"sl":316},{"sl":319},{"sl":324},{"sl":325},{"sl":337},{"sl":339},{"sl":341},{"sl":345},{"sl":348},{"sl":351},{"sl":354},{"sl":357},{"sl":362},{"sl":363},{"sl":373},{"sl":415},{"sl":416},{"sl":417},{"sl":418}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], [], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [], [], [], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [], [], [123, 96, 177, 37], [], [], [], [], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], [], [], [], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [123, 96, 177, 37], [], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [123, 96, 177, 37], [], [], [], []]
