const array1 = [0, 1, 1];
const array3 = [0, 1, 1];

// console.log(array1 === array3);

const sumFloats = (...args) => {
  return args.reduce((a, b) => Number(a) + Number(b), 0);
};

console.log(sumFloats(0.1, 0.2));
