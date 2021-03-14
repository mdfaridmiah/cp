function f(n) { g(n - 1, 20) }

function g(n, x) {
  console.log(g.arguments)
  console.log('before: ' + g.arguments[0])
  if (n > 0) { f(n) }
  console.log('after: ' + g.arguments[0])
}

f(4,20)
console.log('returned: ' + g.arguments)