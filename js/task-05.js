const nameRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

nameRef.addEventListener('input', handleNameRef);

function handleNameRef (event) {
    if (event.target.value === '') {
        return spanRef.textContent = 'незнакомец';
    } else {
        return spanRef.textContent = event.target.value;
    }
}

// nameRef.addEventListener('input', event => {
//         if (event.target.value === '') {
//         return spanRef.textContent = 'незнакомец';
//     } else {
//         spanRef.textContent = event.target.value;
//     }
// })

