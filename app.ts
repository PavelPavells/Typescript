var el = document.getElementById("content");

class User {
    name: string;
    age: number;
    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }
}
var tom : User = new User("Том", 29);
el.innerHTML="Имя: " + tom.name + " возраст: " + tom.age;

//Basic Typescript
let x: number = 10;
let hello: string = "Hello World!";
let isInvalid: boolean = true;
let a: undefined = undefined;
let b: null = null;
//Array
let list: number[] = [10, 20, 30];
let colors: string[] = ['white', 'blue', 'black'];
console.log(list[0]);
console.log(colors[1]);
let names: Array<string> = ["Tom", "Bob", "Alice"];
console.log(names[1]);
//Tuples
//let userInfo: [string, number];
//let userInfo = ['Bob', 30];
//Enums
enum Season {Winter, Autumn, Summer, Spring}
let current: Season = Season.Winter;
console.log(current);
//Any
let someVar: any = 'string';
console.log(someVar);
someVar = 20;
console.log(someVar);

//Union
let id: number | string;
id = '123dfg';

let sum: any = 1200;
if(typeof sum === 'number') {
    let result: number = sum / 12;
    console.log(result);
} else {
    console.log('Invalid Operation!');
}
//Type
type stringOrNumbertype = number | string;
let summ: stringOrNumbertype = 36.6;
if(typeof sum === 'number') {
    console.log(sum / 6);
}
//Assertion
let someAnyValue: any = "hello world!";
let strLength: number = (<string>someAnyValue).length;
console.log(strLength); // 12

let someUnionValue: string | number = "hello work";
strLength = (<string>someUnionValue).length;
console.log(strLength); // 10

//Function
function add(a: number, b: number): number {
    return a + b;
}
let resultAdd = add(4, 30);
console.log(resultAdd);

function getName(firstName: string, lastName?: string) {
    lastName ? `${firstName} ${lastName}`: 'Invalid Operation';
}
let namePerson = getName('Vasiliy', 'Vasiliev');
console.log(namePerson);

function adding(x: string, y: string): string;
function adding(x: number, y: number): number;
function adding(x: any, y: any): any {
    return x + y;
}

let result1 = adding(5, 4);
console.log(result1);   // 9
let result2 = adding("5", "4");
console.log(result2);   // 54

let sumCount = (a: number, b: number) => a + b;
let resultSumCount = sumCount(50, 30);
console.log(resultSumCount);

//OOP

class Person {
    private _name: string;
    private _year: number;
    protected _age: number
    constructor(public name: string, public age: number) {
        this._name = name;
        this._year = this.setYear(age);
    }
    public displayYear(): void {
        console.log("Год рождения: " + this._year);
    }
    public displayName(): void {
        console.log("name: " + this._name);
    }
    private setYear(age: number): number {
        return new Date().getFullYear() - age;
    }
}
class Employer extends Person {
    private company: string;
    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }
    public showData(): void {
        console.log("Age: " + this.age);
        //console.log("Name: " + this.name); // не работает, так как name - private
    }
}
let peter = new Person("Tom", 24);
peter.displayName();
peter.displayYear();

//Namespacing

namespace Personnel {
 
    export interface IUser{
        displayInfo();
    }
    export class Employee {
        constructor(public name: string){
        }
    }
    export function work(emp: Employee) : void{
        console.log(emp.name, "is working");
    }    
    export let defaultUser= { name: "Kate" }
}
let tommy = new Personnel.Employee("Tom")
Personnel.work(tommy);                    // Tom is working
console.log(Personnel.defaultUser.name);    // Kate