class Person {
  // Constructor
  constructor (name, yearOfBirth, job) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      this.job = job;
  }
  // Method
  calculateAge() {
      var age = new Date().getFullYear() - this.yearOfBirth;
      console.log(age);
  }
}

// Extends
class Athlete extends Person {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
      super(name, yearOfBirth, job);
      this.olympicGames = olympicGames;
      this.medals = medals;
  }
  
  wonMedal() {
      this.medals++;
      console.log(this.medals);
  }
}

const johnAthlete = new Athlete('John', 1990, 'swimmer', 3, 10);

johnAthlete.wonMedal();
johnAthlete.calculateAge();