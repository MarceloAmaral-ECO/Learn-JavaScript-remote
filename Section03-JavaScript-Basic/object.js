const car = {
    make: 'Dodge',
    model: 'Challenger',
    year: 1970,
    color: ['black', 'red'],
    hybrid: false, 
    drive: function() {
        console.log('driving...');
    },
    stop() {
        console.log('stopped!!!');
    }
};

console.log(car.make);
console.log(car.color[0]);
car.drive();
car.stop();