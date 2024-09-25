const person = {
    firstName: 'John',
    lastName: 'Anderson',
    fullName: function () {
        console.log(`My full name is ${this.firstName}`);
    }
};

person.fullName();