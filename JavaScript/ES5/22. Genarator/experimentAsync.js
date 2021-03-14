// Sync

// var creatStore = require('./fakeData/fake-store-sync');
// var store = creatStore();
// console.log(store.get('customer',1));
// console.log(store.get('customer',2));
// console.log(store.get('customer',3));


/*

var customers = {
  [Symbol.iterator]: function() {
    var i = 0
    return {
      next: function() {
        i++
        var customer =  store.get('customer', i)

        if (!customer) {
          return { done: true }
        }

        customer.foods =  store.get('food', i)
        return {
          value: customer,
          done: false
        }
      }
    }
  }
}
for  (var customer of customers) {
  console.log(customer);
}

*/

// Async

var creatStore = require('./fakeData/fake-store-async');
var store = creatStore();


// async Iterator not in Nodejs 
// "[Symbol.Iterator]" i am in infinite loop

var customers = {
  [Symbol.asyncIterator]: function() {
    var i = 0
    return {
      next: async function() {
        i++;
        var customer = await store.get('customer', i);

        if (!customer) {
          console.log("END.....");
          return { done: true }
        }

        customer.foods = await store.get('food', i);
        
        return {
          value: customer,
          done: false
        }
      }
    }
  }
};


// (async function() {
//   var iterator = customers[Symbol.asyncIterator]()
//   var customer1 = (await iterator.next()).value  
//   var customer2 = (await iterator.next()).value  
//   var customer3 = (await iterator.next()).value 

//   console.log(customer1);
//   // for await (var customer of customers) {
//   //   console.log(customer);  
//   // }

// })()


(async function (){
  for await (var value of customers) {  
    console.log(value); 
  }
})()


// Async iterables
var range = {
  from: 1,
  to: 5,
  [Symbol.asyncIterator]() { 
    return {
      current: this.from,
      last: this.to,
      async next() { 
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

(async function (){
  for await (var value of range) {  
    console.log(value); 
  }
})()


// Generator
var range = {
  from: 1,
  to: 5,

 [Symbol.iterator]: function*() { // a shorthand  *[Symbol.iterator]()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

for(var value of range) {
  console.log(value); 
}



// AsyncGenerator

// async function* generateSequence(start, end) {

//   for (var i = start; i <= end; i++) {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     yield i;
//   }

// }

// (async () => {

//   var generator = generateSequence(6, 10);
//   for await (var value of generator) {
//     console.log(value);
//   }

// })();

