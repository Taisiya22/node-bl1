class CalculatorClass {
constructor(operator, numbers){
    this.operator = operator,
    this.numbers = numbers
}
calculate = (oper, nums) => {
  if (oper === "sum") {
    return (nums.reduce((acc, num) => acc + num));
  }
  if (oper === "div") {
    return (nums.reduce((acc, num) => acc - num));
  }
  if (oper === "mult") {
    return (nums.reduce((acc, num) => acc * num));
  }
  if (oper === "sub") {
    return (nums.reduce((acc, num) => acc / num));
    }
    
    return 'Unknown operation type'
    };
    
    init = () => {
       return this.calculate(this.operator, this.numbers)
    }

}

const [operator, ...rest] = process.argv.slice(2);
const numbers = rest.map((el) => Number(el));
module.exports = new CalculatorClass(operator, numbers)