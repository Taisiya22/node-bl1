const calculate = (oper, nums) => {
  if (oper === "sum") {
    return (total = nums.reduce((acc, num) => acc + num));
  }
  if (oper === "div") {
    return (total = nums.reduce((acc, num) => acc - num));
  }
  if (oper === "mult") {
    return (total = nums.reduce((acc, num) => acc * num));
  }
  if (oper === "sub") {
    return (total = nums.reduce((acc, num) => acc / num));
    }
    
    return 'Unknown operation type'
};

module.exports = calculate
