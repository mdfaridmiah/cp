// Athlete EXTEND Person

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete = function(name, yearOfBirth, job, olymicGames, medals) {
  Person.call(this, name, yearOfBirth, job);
  this.olymicGames = olymicGames;
  this.medals = medals;
}

Athlete.prototype = Object.create(Person.prototype);


Athlete.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
}


var johnAthlete = new Athlete('John', 1990, 'swimmer', 3, 10);
console.log(johnAthlete)
johnAthlete.calculateAge();
johnAthlete.wonMedal();