const removedItem = (event) => {
  console.log(`klik`);
  let itemIdEl = event.target.parentNode.id;
  let divNew = document.createElement("div");
  const newContentDiv = document.createTextNode(itemIdEl);

  divNew.appendChild(newContentDiv);
  divNew.classList.add("render", "crossedOutLine", "classOpacity");
  closedItems.splice(0, closedItems.length);
  deleteItemsContainer.appendChild(divNew);
  let itemId = document.getElementById(`${itemIdEl}`);
  closedItemsContainer.removeChild(itemId);
};
// removedItem();
// removed items puste duplikaty warunek trzy tablice naraz popracowac nad wyglądem
//tyllko małe ekrany 100% padding niewielki
