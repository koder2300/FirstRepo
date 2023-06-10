const closeAllItems = (event) => {
  closedItems = items.slice();
  console.log(itemsContainer);
  // let itemId = event.target.parentNode.id;
  let divNew = document.createElement("div");
  //
  closedItems.forEach((el) => {
    console.log(el);
    divNew.id = el.slice(0, 14);
    console.log(divNew);
    let itemIdnext = document.getElementById(`${divNew.id}`);
    console.log(itemIdnext);
    itemsContainer.removeChild(itemIdnext);
    renderClosedItem(itemIdnext);
    // renderClosedItem(itemsContainer.firstChild);
  });
  console.log(items);
  items.splice(0, items.length);
};

btnCloseAll.addEventListener("click", closeAllItems);
