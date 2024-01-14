/*
{
  correct: [],
  given: [],
}
0 = no
1 = yes
*/

const score = (questionsObject) => {
  const questionsCount = Object.keys(questionsObject).length;
  const correctAnswers = Object.values(questionsObject).reduce((acc, answer) => {
    const correct =
      answer.given.filter((givenAnswer, index) => givenAnswer !== answer.correct[index]).length > 0 ? 0 : 1;

    return acc + correct;
  }, 0);

  return ((correctAnswers / questionsCount) * 100).toFixed(2);
};

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
    correct: [],
    given: [],
  },
  29: {
    correct: [],
    given: [],
  },
  30: {
    correct: [],
    given: [],
  },
  31: {
    correct: [],
    given: [],
  },
  32: {
    correct: [],
    given: [],
  },
  33: {
    correct: [],
    given: [],
  },
  34: {
    correct: [],
    given: [],
  },
  35: {
    correct: [],
    given: [],
  },
  36: {
    correct: [],
    given: [],
  },
  37: {
    correct: [],
    given: [],
  },
  38: {
    correct: [],
    given: [],
  },
  39: {
    correct: [],
    given: [],
  },
  40: {
    correct: [],
    given: [],
  },
  41: {
    correct: [],
    given: [],
  },
  42: {
    correct: [],
    given: [],
  },
  43: {
    correct: [],
    given: [],
  },
  44: {
    correct: [],
    given: [],
  },
  45: {
    correct: [],
    given: [],
  },
  46: {
    correct: [],
    given: [],
  },
  47: {
    correct: [],
    given: [],
  },
  48: {
    correct: [],
    given: [],
  },
  49: {
    correct: [],
    given: [],
  },
  50: {
    correct: [],
    given: [],
  },
  51: {
    correct: [],
    given: [],
  },
  52: {
    correct: [],
    given: [],
  },
  53: {
    correct: [],
    given: [],
  },
  54: {
    correct: [],
    given: [],
  },
  55: {
    correct: [],
    given: [],
  },
  56: {
    correct: [],
    given: [],
  },
  57: {
    correct: [],
    given: [],
  },
  58: {
    correct: [],
    given: [],
  },
  59: {
    correct: [],
    given: [],
  },
  60: {
    correct: [],
    given: [],
  },
  61: {
    correct: [],
    given: [],
  },
  62: {
    correct: [],
    given: [],
  },
  63: {
    correct: [],
    given: [],
  },
  64: {
    correct: [],
    given: [],
  },
  65: {
    correct: [],
    given: [],
  },
  66: {
    correct: [],
    given: [],
  },
  67: {
    correct: [],
    given: [],
  },
  68: {
    correct: [],
    given: [],
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
  101: {
    correct: [],
    given: [],
  },
  102: {
    correct: [],
    given: [],
  },
  103: {
    correct: [],
    given: [],
  },
  104: {
    correct: [],
    given: [],
  },
  105: {
    correct: [],
    given: [],
  },
  106: {
    correct: [],
    given: [],
  },
  107: {
    correct: [],
    given: [],
  },
  108: {
    correct: [],
    given: [],
  },
  109: {
    correct: [],
    given: [],
  },
  110: {
    correct: [],
    given: [],
  },
  111: {
    correct: [],
    given: [],
  },
  112: {
    correct: [],
    given: [],
  },
  113: {
    correct: [],
    given: [],
  },
  114: {
    correct: [],
    given: [],
  },
  115: {
    correct: [],
    given: [],
  },
  116: {
    correct: [],
    given: [],
  },
  117: {
    correct: [],
    given: [],
  },
  118: {
    correct: [],
    given: [],
  },
  119: {
    correct: [],
    given: [],
  },
  120: {
    correct: [],
    given: [],
  },
  121: {
    correct: [],
    given: [],
  },
  122: {
    correct: [],
    given: [],
  },
  123: {
    correct: [],
    given: [],
  },
  124: {
    correct: [],
    given: [],
  },
  125: {
    correct: [],
    given: [],
  },
  126: {
    correct: [],
    given: [],
  },
  127: {
    correct: [],
    given: [],
  },
  128: {
    correct: [],
    given: [],
  },
  129: {
    correct: [],
    given: [],
  },
  130: {
    correct: [],
    given: [],
  },
  131: {
    correct: [],
    given: [],
  },
  132: {
    correct: [],
    given: [],
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
  151: {
    correct: [],
    given: [],
  },
  152: {
    correct: [],
    given: [],
  },
  153: {
    correct: [],
    given: [],
  },
  154: {
    correct: [],
    given: [],
  },
  155: {
    correct: [],
    given: [],
  },
  156: {
    correct: [],
    given: [],
  },
  157: {
    correct: [],
    given: [],
  },
  158: {
    correct: [],
    given: [],
  },
  159: {
    correct: [],
    given: [],
  },
  160: {
    correct: [],
    given: [],
  },
  161: {
    correct: [],
    given: [],
  },
  162: {
    correct: [],
    given: [],
  },
  163: {
    correct: [],
    given: [],
  },
  164: {
    correct: [],
    given: [],
  },
  165: {
    correct: [],
    given: [],
  },
  166: {
    correct: [],
    given: [],
  },
  167: {
    correct: [],
    given: [],
  },
  168: {
    correct: [],
    given: [],
  },
  169: {
    correct: [],
    given: [],
  },
  170: {
    correct: [],
    given: [],
  },
  171: {
    correct: [],
    given: [],
  },
  172: {
    correct: [],
    given: [],
  },
  173: {
    correct: [],
    given: [],
  },
  174: {
    correct: [],
    given: [],
  },
  175: {
    correct: [],
    given: [],
  },
  176: {
    correct: [],
    given: [],
  },
  177: {
    correct: [],
    given: [],
  },
  178: {
    correct: [],
    given: [],
  },
  179: {
    correct: [],
    given: [],
  },
  180: {
    correct: [],
    given: [],
  },
  181: {
    correct: [],
    given: [],
  },
  182: {
    correct: [],
    given: [],
  },
  183: {
    correct: [],
    given: [],
  },
  184: {
    correct: [],
    given: [],
  },
  185: {
    correct: [],
    given: [],
  },
  186: {
    correct: [],
    given: [],
  },
  187: {
    correct: [],
    given: [],
  },
  188: {
    correct: [],
    given: [],
  },
  189: {
    correct: [],
    given: [],
  },
  190: {
    correct: [],
    given: [],
  },
  191: {
    correct: [],
    given: [],
  },
  192: {
    correct: [],
    given: [],
  },
};

console.log(score(answers));
