const addItem = () => {
  console.log(itemInput.value);
  items.push(itemInput.value);
  //usuwanie duplikatów
  items = items.filter((element, index) => {
    return items.indexOf(element) === index;
  });
  console.log(items);
  console.log(`klik`);
  renderList();
};
//
buttonAdd.addEventListener("click", addItem);
