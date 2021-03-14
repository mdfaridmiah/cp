module.exports =  function createStore() {

  var tables = {
    customer: {
      1: { name: 'John' },
      2: { name: 'Mattias' },
      3: { name: 'Kim' },
    },
    food: {
      1: [ 'cake', 'waffle' ],
      2: [ 'coffee' ],
      3: [ 'apple', 'carrot' ],
    }
  }

  return {
    get: function (table, id){ return tables[table][id]; }
  }
}
