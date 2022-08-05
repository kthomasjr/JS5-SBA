class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }

  description() {
    newPerson.innerHTML = `Hello, ${this._firstName} ${this._lastName}! You are ${this._age} years old.`;
  }
};

const newPerson = document.getElementById("newObject");
const btn = document.getElementById("submit");

const displayPerson = (e) => {
  e.preventDefault();
  const firstname = document.getElementById("firstName").value;
  const lastname = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  const newPer = new Person(firstname, lastname, age);
  newPer.description();
};

btn.addEventListener("click", displayPerson);
