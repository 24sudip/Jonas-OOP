"use strict";

// const Person = function (firstName, birthYear) {
//     // instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     this.calcAge = function () {
//         console.log(2037 - this.birthYear);
//     };
// };
// const jonas = new Person("Jonas", 1991);
// console.log(jonas);
// // 1.New {} is created
// // 2.function is called, this = {}
// // 3.{} linked to prototype
// // 4.function automatically returns {}
// const matilda = new Person("Matilda", 2017);
// console.log(matilda);
// console.log(jonas instanceof Person);

// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// matilda.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));
// Person.prototype.species = 'Homo sapiens';
// console.log(matilda.species);
// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr = [3, 6, 5, 9, 6, 9, 4, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function () {
//     return [...new Set(this)];
// };
// console.log(arr.unique());
// const h1 = document.querySelector('h1');
// console.log(h1.__proto__);
// console.dir(x => x+1);

// const PersonCl = class {};
// class PersonCl {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//     calcAge () {
//         console.log(2037 - this.birthYear);
//     };
//     get age () {
//         return 2037 - this.birthYear;
//     }
// }
// const jessica = new PersonCl("Jessica", 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();

// const account = {
//     owner: 'jonas',
//     movements: [200, 530, 120, 300],
//     get latest () {
//         return this.movements.slice(-1).pop();
//     },
//     set latest (mov) {
//         this.movements.push(mov);
//     }
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance Methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullName (name) {
//     console.log(name);
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Helper function or static method
//   static hey() {
//     console.log("Hey there ✋");
//     console.dir(this);
//   }
// }
// const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica.fullName);
// const walter = new PersonCl("Walter", 1965);
// console.log(walter);
// PersonCl.hey();

// // Static methods not available except constructor Array or constructor Object
// const Arr = Array.from(document.querySelectorAll('h1'));
// console.log(Arr);
// const Num = Number.parseFloat(12);
// console.log(Num);
// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// };
// const jonas = new Person("Jonas", 1991);
// console.log(jonas);
// Person.hey = function () {
//   console.log('Hey there ✋');
//   console.dir(this);
// };
// Person.hey();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullName (name) {
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log("Hey there ✋");
//     console.dir(this);
//   }
// }
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old but as a student I feel more like ${2037 - this.birthYear + 10}`
//     );
//   }
// }
// // const martha = new StudentCl("Martha Jones", 2012);
// const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const jay = Object.create(StudentProto);
// jay.init("Jay", 2010, "Computer Science");
// console.log(jay);
// jay.introduce();
// jay.calcAge();

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected Property
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // Public Interface
//   getMovements() {
//     return this._movements;
//   }
//   deposit(val) {
//     acc1._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   _approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if(this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }
// const acc1 = new Account('Jonas', 'EUR', 1111);
// // acc1.movements.push(286);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// console.log(acc1.pin);

// class Account {
//   // Public fields on instances
//   locale = navigator.language;
//   // Private fields on instances
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }
//   // Public methods
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     acc1.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }
//   // Private methods
//   #approveLoan(val) {
//     return true;
//   }
//   // Static methods on class only
//   static helper() {
//     console.log('Helper');
//   }
// }
// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);
// Account.helper();
// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(100));
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}
class Student extends Person {
  university = "University of Lisbon";
  #studyHours = 0;
  #course;
  static numSubjects = 10;
  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }
  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }
  study(h) {
    this.#makeCoffe();
    this.#studyHours += h;
  }
  #makeCoffe() {
    return 'Here is a coffe for you';
  }
  get testScore() {
    return this._testScore;
  }
  set testScore(score) {
    this._testScore = score <= 28 ? score : 0;
  }
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}
const studentA = new Student('Jonas', 2020, 2037, 'Medicine');
console.log(studentA);
