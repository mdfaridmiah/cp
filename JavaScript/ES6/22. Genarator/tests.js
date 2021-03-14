var delay = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

var x = 0;
async function* generateSequence(start, end) {
  var i = 0;
  while(true){
    await new Promise(resolve => setTimeout(resolve, 1000));
     x = i;
    yield i++;
  }

}


(async () => {

  var generator = generateSequence(6, 10);
  console.log("Start...")
  console.log('#'+ x);
  console.log( generator)
  for await (var value of generator) {
    console.log(value);
  }

})();


(async () => {

  var generator = generateSequence(6, 10);
  console.log("Start...")
  console.log('#'+ x);
  console.log( generator)
  for await (var value of generator) {
    console.log("#......." + value);
  }

})();



