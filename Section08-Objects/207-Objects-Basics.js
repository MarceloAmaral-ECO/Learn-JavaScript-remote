const person = {
    name : 'john',
    age: 25,
    married: true,
    siblings: ['anna', 'peter'],
    greet: function (name) {
        console.log(`Hello my name is ${name}`);
    },
    sayHello(name) {
        console.log(`Hello my name is ${name}`);
    }
};

console.log(person);

// Adiciona o valor de name a uma variavel
const name = person.name;
// Altera o valor da propriedade age
person.age = 60;
// Cria a propriedade city
person.city = 'chicago';

console.log(person);

delete person.siblings;

console.log(person);
