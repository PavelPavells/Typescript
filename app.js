var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var el = document.getElementById("content");
var User = /** @class */ (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var tom = new User("Том", 29);
el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age;
//Basic Typescript
var x = 10;
var hello = "Hello World!";
var isInvalid = true;
var a = undefined;
var b = null;
//Array
var list = [10, 20, 30];
var colors = ['white', 'blue', 'black'];
console.log(list[0]);
console.log(colors[1]);
var names = ["Tom", "Bob", "Alice"];
console.log(names[1]);
//Tuples
//let userInfo: [string, number];
//let userInfo = ['Bob', 30];
//Enums
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Autumn"] = 1] = "Autumn";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Spring"] = 3] = "Spring";
})(Season || (Season = {}));
var current = Season.Winter;
console.log(current);
//Any
var someVar = 'string';
console.log(someVar);
someVar = 20;
console.log(someVar);
//Union
var id;
id = '123dfg';
var sum = 1200;
if (typeof sum === 'number') {
    var result = sum / 12;
    console.log(result);
}
else {
    console.log('Invalid Operation!');
}
var summ = 36.6;
if (typeof sum === 'number') {
    console.log(sum / 6);
}
//Assertion
var someAnyValue = "hello world!";
var strLength = someAnyValue.length;
console.log(strLength); // 12
var someUnionValue = "hello work";
strLength = someUnionValue.length;
console.log(strLength); // 10
//Function
function add(a, b) {
    return a + b;
}
var resultAdd = add(4, 30);
console.log(resultAdd);
function getName(firstName, lastName) {
    lastName ? firstName + " " + lastName : 'Invalid Operation';
}
var namePerson = getName('Vasiliy', 'Vasiliev');
console.log(namePerson);
function adding(x, y) {
    return x + y;
}
var result1 = adding(5, 4);
console.log(result1); // 9
var result2 = adding("5", "4");
console.log(result2); // 54
var sumCount = function (a, b) { return a + b; };
var resultSumCount = sumCount(50, 30);
console.log(resultSumCount);
//OOP
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this._name = name;
        this._year = this.setYear(age);
    }
    Person.prototype.displayYear = function () {
        console.log("Год рождения: " + this._year);
    };
    Person.prototype.displayName = function () {
        console.log("name: " + this._name);
    };
    Person.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return Person;
}());
var Employer = /** @class */ (function (_super) {
    __extends(Employer, _super);
    function Employer(name, age, company) {
        var _this = _super.call(this, name, age) || this;
        _this.company = company;
        return _this;
    }
    Employer.prototype.showData = function () {
        console.log("Age: " + this.age);
        //console.log("Name: " + this.name); // не работает, так как name - private
    };
    return Employer;
}(Person));
var peter = new Person("Tom", 24);
peter.displayName();
peter.displayYear();
//Namespacing
var Personnel;
(function (Personnel) {
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    Personnel.Employee = Employee;
    function work(emp) {
        console.log(emp.name, "is working");
    }
    Personnel.work = work;
    Personnel.defaultUser = { name: "Kate" };
})(Personnel || (Personnel = {}));
var tommy = new Personnel.Employee("Tom");
Personnel.work(tommy); // Tom is working
console.log(Personnel.defaultUser.name); // Kate
