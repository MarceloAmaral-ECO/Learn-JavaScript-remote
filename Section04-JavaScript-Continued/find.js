const people = [
  { name: "bob", age: 20, position: "developer", id: 1 },
  { name: "peter", age: 25, position: "designer", id: 2 },
  { name: "susy", age: 30, position: "the boss", id: 3 },
  { name: "anna", age: 35, position: "secretary", id: 4 },
];

const person = people.find((person) => {
  return person.id === 3;
});

console.log(person);
