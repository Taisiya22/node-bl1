
const [operator, ...rest] = process.argv.slice(2);
const numbers = rest.map((el) => Number(el));

module.exports = {
    operator,
    numbers
}