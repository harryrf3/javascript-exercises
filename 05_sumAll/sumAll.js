const sumAll = function (...args) {
  const max = Math.max(args[0], args[1]);
  const min = Math.min(args[0], args[1]);
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
