const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
console.dir(inputRef.value)
inputRef.addEventListener('input', (event) => {
    spanRef.style.fontSize = inputRef.value + 'px';
})

// inputRef.addEventListener('input',HandleFontSize);

// function HandleFontSize (event) {
//     spanRef.style.fontSize = inputRef.value + 'px';
// }