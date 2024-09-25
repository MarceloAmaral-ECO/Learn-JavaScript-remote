function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}

console.log(calculateTotal(200, 20));

const order1 = calculateTotal(300, 10);
const order2 = calculateTotal(25, 5);
const order3 = calculateTotal(10, 3);

console.log(order1, order2, order3);