class Person {
  constructor (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
  }

  calculateAge() {
      var age = new Date().getFullYear() - this.yearOfBirth;
      console.log(age);
  }
}

const john = new Person('John', 1990, 'swimmer', 3, 10);
john.calculateAge();
