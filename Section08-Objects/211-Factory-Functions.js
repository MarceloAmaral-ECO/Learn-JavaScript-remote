// Constructor Functions
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        console.log(
            `My full name is ${this.firstName} ${this.lastName} and I love React`
        );
    };
    console.log(this);
};

const bob = new Person('Bob', 'Smith');
bob.fullName();

// Factory Functions
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            console.log(
                `My full name is ${this.firstName} ${this.lastName} and I love Js.`
            );
        }
    };
};

const john = createPerson('John', 'Andersen');
john.fullName();