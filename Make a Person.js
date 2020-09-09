/*
Intermediate Algorithm Scripting: Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {  
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => firstName + ' ' + lastName;

  this.setFirstName = (newFirstName) => firstName = newFirstName;
  this.setLastName = (newLastName) => lastName = newLastName;
  this.setFullName = (newFullName) => {
    firstName = newFullName.split(' ')[0];
    lastName = newFullName.split(' ')[1];
  };
};

const bob = new Person('Bob Ross');

bob.setFullName("Haskell Curry")
bob.getFullName();