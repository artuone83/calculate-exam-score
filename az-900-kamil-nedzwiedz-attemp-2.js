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
  // 51: {
  //   correct: ["c"],
  //   given: ["b"],
  // },
  // 52: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 53: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 54: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 55: {
  //   correct: ["d"],
  //   given: ["d"],
  // },
  // 56: {
  //   correct: [],
  //   given: [],
  // },
  // 57: {
  //   correct: ["1:2", "2:3", "3:4", "4:1"],
  //   given: ["1:2", "2:3", "3:4", "4:1"],
  // },
  // 58: {
  //   correct: ["a", "e"],
  //   given: ["a", "d"],
  // },
  // 59: {
  //   correct: ["1:4", "2:3", "3:2", "4:1"],
  //   given: ["1:4", "2:3", "3:2", "4:1"],
  // },
  // 60: {
  //   correct: ["monitor", "marketplace", "advisor"],
  //   given: ["monitor", "marketplace", "advisor"],
  // },
  // 61: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 62: {
  //   correct: ["containers"],
  //   given: ["containers"],
  // },
  // 63: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 64: {
  //   correct: ["c"],
  //   given: ["c"],
  // },
  // 65: {
  //   correct: ["azure cosmos db"],
  //   given: ["azure cosmos db"],
  // },
  // 66: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 67: {
  //   correct: ["c"],
  //   given: ["c"],
  // },
  // 68: {
  //   correct: ["c"],
  //   given: ["c"],
  // },
  // 69: {
  //   correct: ["a", "d"],
  //   given: ["d", "e"],
  // },
  // 70: {
  //   correct: ["b", "c"],
  //   given: ["b", "c"],
  // },
  // 71: {
  //   correct: ["product of both"],
  //   given: ["product of both"],
  // },
  // 72: {
  //   correct: [0, 0, 1],
  //   given: [0, 1, 1],
  // },
  // 73: {
  //   correct: ["b"],
  //   given: ["a"],
  // },
  // 74: {
  //   correct: ["must be rehydrated before the data can be accessed"],
  //   given: ["must be restored before the data can be accessed"],
  // },
  // 75: {
  //   correct: [0, 1, 0],
  //   given: [0, 1, 1],
  // },
  // 76: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 77: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 78: {
  //   correct: ["b"],
  //   given: ["a"],
  // },
  // 79: {
  //   correct: ["azure cli, azure portal, azure powershell"],
  //   given: ["azure cli, azure portal, azure powershell"],
  // },
  // 80: {
  //   correct: ["azure resources manager templates"],
  //   given: ["azure policies"],
  // },
  // 81: {
  //   correct: ["1:2", "2:4", "3:1", "4:3"],
  //   given: ["1:2", "2:4", "3:1", "4:3"],
  // },
  // 82: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 83: {
  //   correct: ["1:4", "2:3", "3:1", "4:2"],
  //   given: ["1:4", "2:3", "3:1", "4:2"],
  // },
  // 84: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 85: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 86: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 87: {
  //   correct: ["1:2", "2:1", "3:4", "4:3"],
  //   given: ["1:2", "2:1", "3:4", "4:3"],
  // },
  // 88: {
  //   correct: [2, 2],
  //   given: [2, 2],
  // },
  // 89: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 90: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 91: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 92: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 93: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 94: {
  //   correct: [1, 1, 1],
  //   given: [1, 0, 1],
  // },
  // 95: {
  //   correct: ["a"],
  //   given: ["a"],
  // },
  // 96: {
  //   correct: ["fault tolerance"],
  //   given: ["fault tolerance"],
  // },
  // 97: {
  //   correct: ["b"],
  //   given: ["b"],
  // },
  // 98: {
  //   correct: [1, 0, 0],
  //   given: [1, 0, 0],
  // },
  // 99: {
  //   correct: [0, 0, 0],
  //   given: [1, 1, 0],
  // },
  // 100: {
  //   correct: [1, 1, 0],
  //   given: [1, 1, 0],
  // },
  101: {
    correct: ["d"],
    given: ["d"],
  },
  102: {
    correct: ["d"],
    given: ["d"],
  },
  103: {
    correct: [0, 1, 1],
    given: [0, 1, 1],
  },
  104: {
    correct: ["a"],
    given: ["b"],
  },
  105: {
    correct: ["a"],
    given: ["a"],
  },
  106: {
    correct: [2],
    given: [2],
  },
  107: {
    correct: ["d"],
    given: ["d"],
  },
  108: {
    correct: [1],
    given: [1],
  },
  109: {
    correct: ["a"],
    given: ["a"],
  },
  110: {
    correct: [1, 1, 1],
    given: [1, 1, 1],
  },
  111: {
    correct: [0, 1, 0],
    given: [0, 1, 0],
  },
  112: {
    correct: ["b"],
    given: ["b"],
  },
  113: {
    correct: ["a"],
    given: ["a"],
  },
  114: {
    correct: ["b"],
    given: ["b"],
  },
  115: {
    correct: ["c", "d"],
    given: ["c", "d"],
  },
  116: {
    correct: [0, 0, 1],
    given: [0, 0, 1],
  },
  117: {
    correct: ["d"],
    given: ["d"],
  },
  118: {
    correct: ["1:4", "2:3", "3:1", "4:2"],
    given: ["1:2", "2:4", "3:1", "4:3"],
  },
  119: {
    correct: ["a"],
    given: ["c"],
  },
  120: {
    correct: ["b"],
    given: ["b"],
  },
  121: {
    correct: ["c"],
    given: ["c"],
  },
  122: {
    correct: ["b"],
    given: ["b"],
  },
  123: {
    correct: [1, 1, 1],
    given: [1, 1, 1],
  },
  124: {
    correct: [3],
    given: [3],
  },
  125: {
    correct: ["a"],
    given: ["a"],
  },
  126: {
    correct: ["lock"],
    given: ["lock"],
  },
  127: {
    correct: ["c"],
    given: ["c"],
  },
  128: {
    correct: ["d"],
    given: ["d"],
  },
  129: {
    correct: ["b"],
    given: ["b"],
  },
  130: {
    correct: ["c"],
    given: ["c"],
  },
  131: {
    correct: [0, 0, 0],
    given: [0, 0, 0],
  },
  132: {
    correct: [],
    given: ["azure information protection"],
  },
  133: {
    correct: [],
    given: [],
  },
  134: {
    correct: [],
    given: [],
  },
  135: {
    correct: [],
    given: [],
  },
  136: {
    correct: [],
    given: [],
  },
  137: {
    correct: [],
    given: [],
  },
  138: {
    correct: [],
    given: [],
  },
  139: {
    correct: [],
    given: [],
  },
  140: {
    correct: [],
    given: [],
  },
  141: {
    correct: [],
    given: [],
  },
  142: {
    correct: [],
    given: [],
  },
  143: {
    correct: [],
    given: [],
  },
  144: {
    correct: [],
    given: [],
  },
  145: {
    correct: [],
    given: [],
  },
  146: {
    correct: [],
    given: [],
  },
  147: {
    correct: [],
    given: [],
  },
  148: {
    correct: [],
    given: [],
  },
  149: {
    correct: [],
    given: [],
  },
  150: {
    correct: [],
    given: [],
  },
};

console.log(score(answers));
