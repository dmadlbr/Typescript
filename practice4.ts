// type alias

type Employee = {
    id: number;
    name: string;
    salary: number;
};

const employee: Employee = {
    id: 101,
    name: "Maya",
    salary: 30000
};

function displayEmployee(emp: Employee): void {
    console.log(`${emp.name} earns ₹${emp.salary}`);
}

displayEmployee(employee);

//Generics 
        // without
function display(value: string | number): void {
    console.log(value);
}

display("Hello");
display(100);
        // with
function display2<T>(value: T): T {
    return value;
}

console.log(display2<string>("Hello"));
console.log(display2<number>(100));
console.log(display2<boolean>(true));

//optional interface

interface Product {
    readonly id: number;
    name: string;
    discount?: number;
}

const product: Product = {
    id: 101,
    name: "Laptop"
};

product.name = "Gaming Laptop";

console.log(product.name);
console.log(product.discount ?? "No discount");