function Animal(){}
var AnimalP = Animal.prototype;

AnimalP.eat = function(food){
  console.log('The animal is eating.' + food);
};

function Snake(){}
var SnakeP = extend(Snake,Animal);//extend See the previous section for functions
/*snake No override of eat method, inherited parent eat() method*/

function Dog(){}
var DogP = extend(Dog,Animal);

DogP.eat = function(food){
  /*Override eat() method*/
  /*As mentioned in the previous chapter, the parent method can also be invoked here by Animal.eat.call(this,food).*/
  console.log("The dog is eating."+food);
};

function Cat(){}
var CatP = extend(Cat,Animal);

CatP.eat = function(food){
  console.log("The cat is eating."+food);
};

var snake = new Snake();
snake.eat('Mouse');//log:The animal is eating mice.

var dog = new Dog();
dog.eat('Bone');//log:The dog is eating bones.

var cat = new Cat();
cat.eat('fish');//log:The cat is eating fish.