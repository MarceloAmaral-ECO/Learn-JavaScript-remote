const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "secretary" },
];

const youngPeople = people.filter((person) => {
  return person.age <= 25;
});

console.log(youngPeople);
