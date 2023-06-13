const closeAllItems = (event) => {
  closedItems = items.slice();
  let divNew;
  //
  closedItems.forEach((el) => {
    divNew = el.slice(0, 14);
    let itemIdnext = document.getElementById(`${divNew}`);
    itemsContainer.removeChild(itemIdnext);
    renderClosedItem(itemIdnext);
  });
  items.splice(0, items.length);
};

btnCloseAll.addEventListener("click", closeAllItems);
