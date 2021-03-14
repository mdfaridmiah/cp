function Dog(){}

var DogP = Dog.prototype;

DogP.run = function(speed){
  if(typeof speed == 'number'){
    this._runNumber(speed);
  }else if(typeof speed == 'string'){
    this._runString(speed);
  }else{
   throw 'Parameter mismatch';
  }
}


DogP._runString = function(speed){
  console.log('The dog runs at a speed of' + speed);
}

DogP._runNumber = function(speed){
  console.log('The dog runs at a speed of' + speed + 'm/s');
}

var dog = new Dog();
dog.run(30); //log:The dog runs at a speed of 30. m/s
dog.run('35KM/h'); //log:The dog runs at a speed of 35. KM/h


try{
  dog.run([])
}catch{
  console.log("Error");
}