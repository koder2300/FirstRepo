const closeAllItems = () => {
  closedItems = items.slice();
  console.log(itemsContainer);
  closedItems.forEach((el) => {
    renderClosedItem(itemsContainer.firstChild);
  });
  console.log(items);
  items.splice(0, items.length);
  console.log(items);
  // closedItemsContainer.remove();
  // itemsContainer.remove();
};
//
btnCloseAll.addEventListener("click", closeAllItems);
