const removedItem = (event) => {
  console.log(`klik`);
  let itemIdEl = event.target.parentNode.id;
  let divNew = document.createElement("div");
  //
  for (let item of closedItems) {
    console.log(item);
    item = event.target.parentNode.id;
    divNew.id = item.slice(0, 14);
  }
  //
  const newContentDiv = document.createTextNode(itemIdEl);
  divNew.appendChild(newContentDiv);
  divNew.classList.add("render", "crossedOutLine", "classOpacity");
  closedItems.splice(0, closedItems.length);
  deleteItemsContainer.appendChild(divNew);
  // let itemId = document.querySelector(`#${itemIdEl}`);
  let itemId = document.getElementById(`${itemIdEl}`);
  closedItemsContainer.removeChild(itemId);
};
// removedItem();
