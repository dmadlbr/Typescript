//map() and filter()
const numbers: number[] = [10, 15, 20, 25, 30];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const doubled = evenNumbers.map((num) => num * 2);

console.log(evenNumbers);
console.log(doubled);

//find()

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 800 },
    { id: 3, name: "Keyboard", price: 1500 }
];

const result = products.find((product) => product.id === 2);

console.log(result);
