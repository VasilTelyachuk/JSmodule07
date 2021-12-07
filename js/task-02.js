const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const listRef = document.querySelector('#ingredients');
  const eachItemRef = ingredients.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    // console.dir(ingredients)
    return itemRef
  });
  listRef.append(...eachItemRef)




































