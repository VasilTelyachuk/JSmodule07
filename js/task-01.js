const listRef = document.querySelector('#categories');
console.dir(`В списке ${listRef.children.length} категории`);
const itemRef = document.querySelectorAll('.item');
// console.log(itemRef)
const eachListRef = itemRef.forEach((itemRef) => {
console.log(`Категория:${itemRef.firstElementChild.textContent}`)
console.log(`Количество элементов:${itemRef.lastElementChild.children.length}`)
});











































