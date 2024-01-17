const score = require("./score.js");

/*
0 = no
1 = yes
*/

const answers = {
  // 1: {
  //   correct: [0, 1, 1],
  //   given: [0, 1, 1],
  // },
  // 2: {
  //   correct: [],
  //   given: [1, 0, 1],
  // },
  // 3: {
  //   correct: ["configuring"],
  //   given: ["configuring"],
  // },
  // 4: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 5: {
  //   correct: ["in the public cloud"],
  //   given: ["in the public cloud"],
  // },
  // 6: {
  //   correct: ["d", "e"],
  //   given: ["d", "e"],
  // },
  // 7: {
  //   correct: ["pay monthly usage costs"],
  //   given: ["pay monthly usage costs"],
  // },
  // 8: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 9: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 10: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 11: {
  //   correct: ["c"],
  //   given: ["c"],
  // },
  // 12: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 13: {
  //   correct: ["iaas", "paas"],
  //   given: ["iaas", "paas"],
  // },
  // 14: {
  //   correct: ["d"],
  //   given: ["d"],
  // },
  // 15: {
  //   correct: [0, 1, 0],
  //   given: [0, 1, 0],
  // },
  // 16: {
  //   correct: ["c"],
  //   given: ["c"],
  // },
  // 17: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 18: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 19: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 20: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 21: {
  //   correct: ["1:2", "2:1", "3:4", "4:3"],
  //   given: ["1:2", "2:1", "3:4", "4:3"],
  // },
  // 22: {
  //   correct: [0, 1, 0],
  //   given: [0, 1, 0],
  // },
  // 23: {
  //   correct: [0, 1, 1],
  //   given: [0, 0, 1],
  // },
  // 24: {
  //   correct: ["a", "c"],
  //   given: ["a", "d"],
  // },
  // 25: {
  //   correct: [0, 0, 1],
  //   given: [0, 0, 1],
  // },
  // 26: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 27: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 28: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 29: {
  //   correct: [0, 1, 0],
  //   given: [0, 1, 0],
  // },
  // 30: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 31: {
  //   correct: [0, 1, 1],
  //   given: [0, 1, 1],
  // },
  // 32: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 33: {
  //   correct: ["c"],
  //   given: ["c"],
  // },
  // 34: {
  //   correct: [0, 1, 0],
  //   given: [1, 0, 0],
  // },
  // 35: {
  //   correct: [1, 1, 1],
  //   given: [0, 1, 1],
  // },
  // 36: {
  //   correct: [0, 1, 0],
  //   given: [0, 1, 0],
  // },
  // 37: {
  //   correct: ["paas"],
  //   given: ["paas"],
  // },
  // 38: {
  //   correct: [1, 0, 1],
  //   given: [1, 0, 1],
  // },
  // 39: {
  //   correct: [0, 1, 0],
  //   given: [1, 0, 0],
  // },
  // 40: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 41: {
  //   correct: ["be deployed to a separate Virtual Network"],
  //   given: ["be deployed to a separate Virtual Network"],
  // },
  // 42: {
  //   correct: ["same resource group"],
  //   given: ["same resource group"],
  // },
  // 43: {
  //   correct: ["c"],
  //   given: ["c"],
  // },
  // 44: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 45: {
  //   correct: ["a", "c"],
  //   given: ["a", "c"],
  // },
  // 46: {
  //   correct: [">_"],
  //   given: [">_"],
  // },
  // 47: {
  //   correct: ["a", "c"],
  //   given: ["c"],
  // },
  // 48: {
  //   correct: ["portal", "azure"],
  //   given: ["portal", "azure"],
  // },
  // 49: {
  //   correct: ["d"],
  //   given: ["d"],
  // },
  // 50: {
  //   correct: ["local network gateways"],
  //   given: ["virtual network"],
  // },
  51: {
    correct: ["c"],
    given: ["b"],
  },
  52: {
    correct: ["b"],
    given: ["b"],
  },
  53: {
    correct: ["a"],
    given: ["a"],
  },
  54: {
    correct: ["a"],
    given: ["a"],
  },
  55: {
    correct: ["d"],
    given: ["d"],
  },
  56: {
    correct: [],
    given: [],
  },
  57: {
    correct: ["1:2", "2:3", "3:4", "4:1"],
    given: ["1:2", "2:3", "3:4", "4:1"],
  },
  58: {
    correct: ["a", "e"],
    given: ["a", "d"],
  },
  59: {
    correct: ["1:4", "2:3", "3:2", "4:1"],
    given: ["1:4", "2:3", "3:2", "4:1"],
  },
  60: {
    correct: ["monitor", "marketplace", "advisor"],
    given: ["monitor", "marketplace", "advisor"],
  },
  61: {
    correct: ["a"],
    given: ["a"],
  },
  62: {
    correct: ["containers"],
    given: ["containers"],
  },
  63: {
    correct: ["b"],
    given: ["b"],
  },
  64: {
    correct: ["c"],
    given: ["c"],
  },
  65: {
    correct: ["azure cosmos db"],
    given: ["azure cosmos db"],
  },
  66: {
    correct: ["a"],
    given: ["a"],
  },
  67: {
    correct: ["c"],
    given: ["c"],
  },
  68: {
    correct: ["c"],
    given: ["c"],
  },
  69: {
    correct: [],
    given: [],
  },
  70: {
    correct: [],
    given: [],
  },
  71: {
    correct: [],
    given: [],
  },
  72: {
    correct: [],
    given: [],
  },
  73: {
    correct: [],
    given: [],
  },
  74: {
    correct: [],
    given: [],
  },
  75: {
    correct: [],
    given: [],
  },
  76: {
    correct: [],
    given: [],
  },
  77: {
    correct: [],
    given: [],
  },
  78: {
    correct: [],
    given: [],
  },
  79: {
    correct: [],
    given: [],
  },
  80: {
    correct: [],
    given: [],
  },
  81: {
    correct: [],
    given: [],
  },
  82: {
    correct: [],
    given: [],
  },
  83: {
    correct: [],
    given: [],
  },
  84: {
    correct: [],
    given: [],
  },
  85: {
    correct: [],
    given: [],
  },
  86: {
    correct: [],
    given: [],
  },
  87: {
    correct: [],
    given: [],
  },
  88: {
    correct: [],
    given: [],
  },
  89: {
    correct: [],
    given: [],
  },
  90: {
    correct: [],
    given: [],
  },
  91: {
    correct: [],
    given: [],
  },
  92: {
    correct: [],
    given: [],
  },
  93: {
    correct: [],
    given: [],
  },
  94: {
    correct: [],
    given: [],
  },
  95: {
    correct: [],
    given: [],
  },
  96: {
    correct: [],
    given: [],
  },
  97: {
    correct: [],
    given: [],
  },
  98: {
    correct: [],
    given: [],
  },
  99: {
    correct: [],
    given: [],
  },
  100: {
    correct: [],
    given: [],
  },
};

console.log(score(answers));
