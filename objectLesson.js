var person = {
  firstname: 'John',
  lastname: 'Doe',
  greet: function () {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname)
  }
};

person.greet();

//ES6 version = Destructuring
var {firstname} = person;
console.log(firstname);
console.log(person['firstname']);