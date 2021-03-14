/**
  Classes: Classes are a template for creating objects. They encapsulate data with code to work on that data.
  Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
 */
class Person {
  constructor (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
  }
  
  calculateAge() {
      var age = new Date().getFullYear - this.yearOfBirth;
      console.log(age);
  }
  
  static greeting() {
      console.log('Hey there!');
  }
}

const amir = new Person('Amir', 1990, 'System Architect');

Person.greeting();