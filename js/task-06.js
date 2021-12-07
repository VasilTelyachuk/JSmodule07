const validRef = document.querySelector('#validation-input');
// const numberOfIndexes = Number(validRef.dataset.length);
// console.dir(numberOfIndexes)
validRef.addEventListener('blur',unfocusedRef)  
function unfocusedRef(event) {
    if (event.target.value.length === 6) {
        validRef.classList.remove('invalid');   
        validRef.classList.add('valid')   
    } else if (event.target.value.length !== 6) {
        validRef.classList.remove('valid');   
        validRef.classList.add('invalid') 
    }
}