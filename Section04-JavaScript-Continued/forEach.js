const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
];

function showPerson(person) {
  console.log(person);
}

people.forEach(showPerson);

people.forEach((person) => console.log(person.name));
