const addItem = () => {
  console.log(itemInput.value);
  //
  //usuwanie duplikatów
  let item = itemInput.value;
  if (
    items.includes(item) ||
    closedItems.includes(item) ||
    removedItems.includes(item)
  ) {
    console.log(`wrong item`);
  } else {
    items.push(item);
    items = items.filter((element, index) => {
      return items.indexOf(element) === index;
    });
    removedItems = removedItems.filter((element, index) => {
      return removedItems.indexOf(element) === index;
    });
    closedItems = closedItems.filter((element, index) => {
      return closedItems.indexOf(element) === index;
    });
  }

  console.log(items);
  renderList();
};
//
buttonAdd.addEventListener("click", addItem);
