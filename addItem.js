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
  }

  renderList();
};
//
buttonAdd.addEventListener("click", addItem);
