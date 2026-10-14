//optional
interface Student {
    name: string;
    age: number;
    grade?: string;
}

const student1: Student = {
    name: "Alex",
    age: 20
};

const student2: Student = {
    name: "Sam",
    age: 21,
    grade: "A"
};

console.log(student1);
console.log(student2.grade ?? "Grade not assigned");

//function overloading
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(
    a: number | string,
    b: number | string
): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }

    throw new Error("Both values must have the same type");
}

console.log(combine(10, 20));
console.log(combine("Hello ", "World"));

//array methods with ts
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

const expensive = products.filter(product => product.price > 1000);

const names = expensive.map(product => product.name);

console.log(names);