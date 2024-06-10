const person1 = {
  name: "Susan",
  age: 25,
  status: "resident",
};

const person2 = {
  name: "Bob",
  age: 17,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log(person1.name + " you can cast a vote");
} else {
  console.log(person1.name + " you are not eligible");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log(person2.name + " you can cast a vote");
} else {
  console.log(person2.name + " you are not eligible");
}
