//node calc.js sum 10 32 40
//node calc.js div 60 2 40
//node calc.js mult 2 3 5
//node calc.js sub 50 5 2

const [operator, ...rest] = process.argv.slice(2);
const numbers = rest.map((el) => Number(el));

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

const result = calculate(operator, numbers)
console.log(result);
