let number = document.getElementById('number'),
    decrement = document.getElementById('btn1'),
    reset = document.getElementById('btn2'),
    incremeny = document.getElementById('btn3');
let counter = 0;
decrement.addEventListener('click', () => {
    number.textContent = --counter;

})
reset.addEventListener('click', () => {
    counter = 0
    number.textContent = counter;

})
incremeny.addEventListener('click', () => {
    number.textContent = ++counter;

})