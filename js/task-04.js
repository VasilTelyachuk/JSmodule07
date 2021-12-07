
const addIncrementBtnRef = document.querySelector('[data-action="increment"]');
const removeDecrementBtnRef = document.querySelector('[data-action="decrement"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;

const increment = function () {
    counterValue += 1;
    return spanRef.textContent = counterValue;
}
const decrement = function () {
    counterValue -= 1;
    return spanRef.textContent = counterValue;
}

addIncrementBtnRef.addEventListener('click',increment);
removeDecrementBtnRef.addEventListener('click',decrement);

































