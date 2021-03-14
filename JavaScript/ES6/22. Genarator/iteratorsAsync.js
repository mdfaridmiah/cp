// Sync
var creatStore = require('./fakeData/fake-store-sync');
var store = creatStore();
// console.log(store.get('customer',1));

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
// })()

(async function (){
  for await (var value of customers) {  
    console.log(value); 
  }
})()

