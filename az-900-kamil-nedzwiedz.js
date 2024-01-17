const score = require("./score.js");

/*
0 = no
1 = yes
*/

const answers = {
  1: {
    correct: [0, 1, 1],
    given: [0, 1, 1],
  },
  2: {
    correct: [1, 0, 1],
    given: [0, 0, 1],
  },
  3: {
    correct: ["configuring the SaaS solution"],
    given: ["installing the SaaS solution"],
  },
  4: {
    correct: ["a"],
    given: ["a"],
  },
  5: {
    correct: ["in the public cloud"],
    given: ["in the public cloud"],
  },
  6: {
    correct: ["d", "e"],
    given: ["d", "e"],
  },
  7: {
    correct: ["pay monthly usage costs"],
    given: ["pay monthly usage costs"],
  },
  8: {
    correct: ["a"],
    given: ["a"],
  },
  9: {
    correct: ["b"],
    given: ["b"],
  },
  10: {
    correct: ["b"],
    given: ["a"],
  },
  11: {
    correct: ["c"],
    given: ["c"],
  },
  12: {
    correct: ["b"],
    given: ["b"],
  },
  13: {
    correct: ["iaas", "pass"],
    given: ["iaas", "pass"],
  },
  14: {
    correct: ["d"],
    given: ["d"],
  },
  15: {
    correct: [0, 1, 0],
    given: [0, 1, 0],
  },
  16: {
    correct: ["d"],
    given: [],
  },
  17: {
    correct: ["b"],
    given: ["b"],
  },
  18: {
    correct: ["a"],
    given: ["a"],
  },
  19: {
    correct: ["a"],
    given: ["a"],
  },
  20: {
    correct: ["a"],
    given: ["a"],
  },
  21: {
    correct: ["1:2", "2:1", "3:4", "4:3"],
    given: ["1:2", "2:1", "3:4", "4:3"],
  },
  22: {
    correct: [0, 1, 0],
    given: [0, 1, 0],
  },
  23: {
    correct: [0, 1, 1],
    given: [0, 1, 1],
  },
  24: {
    correct: ["a", "c"],
    given: ["a", "c"],
  },
  25: {
    correct: [0, 0, 1],
    given: [0, 1, 1],
  },
  26: {
    correct: ["b"],
    given: ["b"],
  },
  27: {
    correct: ["b"],
    given: ["c"],
  },
  28: {
    correct: ["b"],
    given: ["b"],
  },
  29: {
    correct: [0, 1, 0],
    given: [0, 1, 0],
  },
  30: {
    correct: ["b"],
    given: ["b"],
  },
  31: {
    correct: [0, 1, 1],
    given: [1, 0, 1],
  },
  32: {
    correct: ["b"],
    given: ["b"],
  },
  33: {
    correct: ["c"],
    given: ["c"],
  },
  34: {
    correct: [0, 1, 0],
    given: [1, 0, 1],
  },
  35: {
    correct: [1, 1, 1],
    given: [0, 0, 0],
  },
  36: {
    correct: [0, 1, 0],
    given: [1, 0, 0],
  },
  37: {
    correct: ["paas"],
    given: ["paas"],
  },
  38: {
    correct: [1, 0, 1],
    given: [1, 0, 1],
  },
  39: {
    correct: [0, 1, 0],
    given: [1, 0, 0],
  },
  40: {
    correct: ["a"],
    given: ["a"],
  },
  41: {
    correct: ["be deployed to separate virtual network"],
    given: ["be deployed to separate virtual network"],
  },
  42: {
    correct: ["to the same resource group"],
    given: ["to the same resource group"],
  },
  43: {
    correct: ["c"],
    given: ["c"],
  },
  44: {
    correct: ["a"],
    given: ["a"],
  },
  45: {
    correct: ["a", "c"],
    given: ["a", "c"],
  },
  46: {
    correct: [">_"],
    given: [">_"],
  },
  47: {
    correct: ["a", "c"],
    given: ["", "c"],
  },
  48: {
    correct: ["portal.azure.com"],
    given: ["portal.azure.com"],
  },
  49: {
    correct: ["d"],
    given: ["d"],
  },
  50: {
    correct: ["local network gateway"],
    given: ["local network gateway"],
  },
  51: {
    correct: ["c"],
    given: ["d"],
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
    given: ["c"],
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
    given: ["d"],
  },
  59: {
    correct: ["1:4", "2:3", "3:2", "4:1"],
    given: ["1:4", "2:3", "3:2", "4:1"],
  },
  60: {
    correct: ["1:1", "2:3", "3:4"],
    given: ["1:1", "2:3", "3:4"],
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
    given: ["d"],
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
    given: ["a"],
  },
  69: {
    correct: ["a", "d"],
    given: ["d", "e"],
  },
  70: {
    correct: ["b", "c"],
    given: ["b", "c"],
  },
  71: {
    correct: ["product of both SLA"],
    given: ["the lowest SLA"],
  },
  72: {
    correct: [0, 0, 1],
    given: [0, 1, 1],
  },
  73: {
    correct: ["b"],
    given: ["b"],
  },
  74: {
    correct: ["rehydrated"],
    given: ["restored"],
  },
  75: {
    correct: [0, 1, 0],
    given: [1, 1, 0],
  },
  76: {
    correct: ["a"],
    given: ["a"],
  },
  77: {
    correct: ["a"],
    given: ["b"],
  },
  78: {
    correct: ["b"],
    given: ["b"],
  },
  79: {
    correct: ["azure cli, azure portal, azure power shell"],
    given: ["azure cli, azure portal, azure power shell"],
  },
  80: {
    correct: ["ARM templates"],
    given: ["ARM templates"],
  },
  81: {
    correct: ["1:2", "2:4", "3:1", "4:3"],
    given: ["1:2", "2:4", "3:1", "4:3"],
  },
  82: {
    correct: ["a"],
    given: ["a"],
  },
  83: {
    correct: ["1:4", "2:3", "3:1", "4:2"],
    given: ["1:4", "2:3", "3:2", "4:1"],
  },
  84: {
    correct: ["b"],
    given: ["b"],
  },
  85: {
    correct: ["a"],
    given: ["a"],
  },
  86: {
    correct: ["a"],
    given: ["a"],
  },
  87: {
    correct: [],
    given: ["1:2", "2:1", "3:4", "4:3"],
  },
  88: {
    correct: ["2", "2"],
    given: ["2", "2"],
  },
  89: {
    correct: ["a"],
    given: ["c"],
  },
  90: {
    correct: ["a"],
    given: ["a"],
  },
  91: {
    correct: ["b"],
    given: ["b"],
  },
  92: {
    correct: ["a"],
    given: ["a"],
  },
  93: {
    correct: [],
    given: [],
  },
  94: {
    correct: [1, 1, 1],
    given: [1, 0, 1],
  },
  95: {
    correct: ["a"],
    given: ["a"],
  },
  96: {
    correct: ["fault tolerance"],
    given: ["fault tolerance"],
  },
  97: {
    correct: ["b"],
    given: ["b"],
  },
  98: {
    correct: [1, 0, 0],
    given: [1, 0, 1],
  },
  99: {
    correct: [0, 0, 0],
    given: [0, 0, 1],
  },
  100: {
    correct: [1, 1, 0],
    given: [1, 0, 0],
  },
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
    correct: ["the delete lock must be removed before an administrator"],
    given: ["only a member of the glogal administrators group"],
  },
  107: {
    correct: ["d"],
    given: ["d"],
  },
  108: {
    correct: ["network security group (NSG)"],
    given: ["network security group (NSG)"],
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
    given: [0, 1, 1],
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
    given: ["c", "e"],
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
    given: ["1:4", "2:3", "3:1", "4:2"],
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
    correct: ["azure activity log"],
    given: ["azure activity log"],
  },
  125: {
    correct: ["a"],
    given: ["a"],
  },
  126: {
    correct: ["locks"],
    given: ["locks"],
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
    given: [1, 0, 0],
  },
  132: {
    correct: ["azure information protection"],
    given: ["azure information protection"],
  },
  133: {
    correct: ["continues to function normally"],
    given: ["continues to function normally"],
  },
  134: {
    correct: [0, 0, 0],
    given: [0, 0, 0],
  },
  135: {
    correct: ["b"],
    given: ["b"],
  },
  136: {
    correct: ["c"],
    given: ["a"],
  },
  137: {
    correct: [1, 1, 0],
    given: [1, 1, 1],
  },
  138: {
    correct: ["microsoft online services privacy statement"],
    given: ["microsoft online services privacy statement"],
  },
  139: {
    correct: [1, 0, 1],
    given: [0, 1, 1],
  },
  140: {
    correct: ["authentication"],
    given: ["authentication"],
  },
  141: {
    correct: ["d"],
    given: ["c"],
  },
  142: {
    correct: ["collection of policy definitions"],
    given: ["group of role-based access control (RBAC)"],
  },
  143: {
    correct: [
      "azure advance threat protection",
      "azure ad identity protection",
    ],
    given: ["azure monitor", "azure ad identity protection"],
  },
  144: {
    correct: ["b"],
    given: ["b"], //? what are two possible solutions b,d
  },
  145: {
    correct: ["azure security center"],
    given: ["azure bastion"],
  },
  146: {
    correct: [1, 0, 1],
    given: [1, 0, 0],
  },
  147: {
    correct: ["credit your azure account"],
    given: ["credit your azure account"],
  },
  148: {
    correct: [0, 1, 0],
    given: [0, 1, 1],
  },
  149: {
    correct: [0, 1, 0],
    given: [1, 1, 0],
  },
  150: {
    correct: ["a", "d"],
    given: ["a", "d"],
  },
  151: {
    correct: ["a"],
    given: ["a"],
  },
  152: {
    correct: [0, 1, 1],
    given: [0, 0, 0],
  },
  153: {
    correct: [1, 0, 1],
    given: [1, 0, 1],
  },
  154: {
    correct: ["b"],
    given: ["b"],
  },
  155: {
    correct: ["a"],
    given: ["a"],
  },
  156: {
    correct: ["b"],
    given: ["b"],
  },
  157: {
    correct: [],
    given: [],
  },
  158: {
    correct: [0, 0, 1],
    given: [0, 0, 1],
  },
  159: {
    correct: ["b"],
    given: ["b"],
  },
  160: {
    correct: ["c"],
    given: ["c"],
  },
  161: {
    correct: ["b"],
    given: ["b"],
  },
  162: {
    correct: ["b"],
    given: ["b"],
  },
  163: {
    correct: ["a"],
    given: ["a"],
  },
  164: {
    correct: ["excluded from the service level agreement"],
    given: ["excluded from the service level agreement"],
  },
  165: {
    correct: ["a"],
    given: ["a"],
  },
  166: {
    correct: ["public preview"],
    given: ["public preview"],
  },
  167: {
    correct: ["b"],
    given: ["b"],
  },
  168: {
    correct: ["a"],
    given: ["a"],
  },
  169: {
    correct: ["a"],
    given: ["a"],
  },
  170: {
    correct: ["a"],
    given: ["b"],
  },
  171: {
    correct: [1, 0, 0],
    given: [1, 0, 0],
  },
  172: {
    correct: ["c"],
    given: ["a"],
  },
  173: {
    correct: ["start an existing virtual machine"],
    given: ["start an existing virtual machine"],
  },
  174: {
    correct: ["a"],
    given: ["a"],
  },
  175: {
    correct: [],
    given: [],
  },
  176: {
    correct: ["b"],
    given: ["b"],
  },
  177: {
    correct: [1, 0, 0],
    given: [1, 1, 0],
  },
  178: {
    correct: [0, 1, 0],
    given: [0, 1, 0],
  },
  179: {
    correct: [1, 1, 0],
    given: [1, 1, 0],
  },
  180: {
    correct: ["b"],
    given: ["b"],
  },
  181: {
    correct: [],
    given: [],
  },
  182: {
    correct: ["c"],
    given: ["c"],
  },
  183: {
    correct: [1, 0, 0],
    given: [1, 0, 0],
  },
  184: {
    correct: [1, 0, 1],
    given: [1, 0, 1],
  },
  185: {
    correct: [0, 0, 0],
    given: [0, 0, 0],
  },
  186: {
    correct: ["the virtual machine can be moved to the new subscription"],
    given: ["the virtual machine can be moved to the new subscription"],
  },
  187: {
    correct: [0, 0, 1],
    given: [0, 0, 1],
  },
  188: {
    correct: ["d"],
    given: ["d"],
  },
  189: {
    correct: ["b"],
    given: ["b"],
  },
  190: {
    correct: [0, 1, 0],
    given: [0, 1, 0],
  },
  191: {
    correct: [1, 0, 0],
    given: [1, 0, 0],
  },
  192: {
    correct: ["a"],
    given: ["a"],
  },
};

console.log(score(answers));
