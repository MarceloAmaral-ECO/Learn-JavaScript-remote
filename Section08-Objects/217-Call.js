const john = {
    name: 'John',
    age: 30
}

const ana = {
    name: 'Ana', 
    age: 24
}

function greet() {
    console.log(`My name is ${this.name} and my age is ${this.age}`)
};

greet.call(john);
greet.call(ana);