const closeAllItems = (event) => {
  closedItems = items.slice();
  console.log(itemsContainer);
  let newDiv;
  closedItems.forEach((el) => {
    console.log(el);
    let item = event.target.parentNode.id;
    newDiv = el.id = renderClosedItem(itemsContainer.firstChild);
  });
  console.log(items);

  items.splice(0, items.length);
  // closedItems.splice(0, closedItems.length);
  // closedItemsContainer.remove();
  // itemsContainer.remove();
};
//\
//
btnCloseAll.addEventListener("click", closeAllItems);
