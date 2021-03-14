var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  var age = new Date().getFullYear - this.yearOfBirth;
  console.log(age);
}

var amir = new Person('Amir', 1990, 'System Architect');
console.log(amir);