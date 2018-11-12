// First-class functions = Functions can be passed like strings, arrays, etc...

function greet () {
  console.log('hi!')
}
greet()

function logGreeting (fn) {
  fn()
}
logGreeting(greet)

// function expression
var greetMe = function () {
  console.log('Hi there!')
}
greetMe()
logGreeting(greetMe)

// use a function expression on the fly
logGreeting(function () {
  console.log('Say Hello.')
})
