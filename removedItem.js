const removedItem = (event) => {
  console.log(`klikasz`);
  let itemIdEl = event.target.parentNode.id;
  let divNewCreated = document.createElement("div");
  const newContentDiv = document.createTextNode(itemIdEl);
  removedItems.push(itemIdEl);
  let index = closedItems.indexOf(itemIdEl);
  closedItems.splice(index, 1);
  divNewCreated.appendChild(newContentDiv);
  divNewCreated.classList.add("render", "crossedOutLine", "classOpacity");
  deleteItemsContainer.appendChild(divNewCreated);
  let itemId = document.getElementById(`${itemIdEl}`);
  closedItemsContainer.removeChild(itemId);
};
// removedItem();
