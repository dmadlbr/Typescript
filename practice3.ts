//map() and filter()
const numbers: number[] = [10, 15, 20, 25, 30];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const doubled = evenNumbers.map((num) => num * 2);

console.log(evenNumbers);
console.log(doubled);
