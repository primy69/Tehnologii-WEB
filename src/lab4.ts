interface MyInterface {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
}
interface MyExtendedInterface extends MyInterface {
    occupation: string;
    salary: number;
}

const person: MyExtendedInterface = {
    name: "Herghelegiu Marius",
    age: 22,
    email: "marius.herghelegiu@iis.utm.md",
    address: "Str. Studentilor 7/9",
    phone: "022-111-000",
    occupation: "Student",
    salary: 1000
};

console.log(person.name);
console.log(person.age);
console.log(person.email);
console.log(person.address);
console.log(person.phone);
console.log(person.occupation);
console.log(person.salary + "$");
