class Person {
  constructor() {
    this.gender = 'Male';
  }
  printPerson() {}
}

class User extends Person {
  //  Cnstructor
  constructor() {
    super();  // Base Cnstructor
    this.name = 'Adnan';
  }
  //  Method
  printUser() {}
}

var u = new User();
console.log(u);