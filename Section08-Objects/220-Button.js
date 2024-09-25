const counter = {
    count: 0,
    increment() {
        counter.count++;
        console.log(counter.count);
    },
    showLog() {
        console.log(`Hello`);
    }
}

const btn = document.querySelector('#counter');
btn.addEventListener('click', counter.increment);