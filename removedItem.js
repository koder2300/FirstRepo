const removedItem = (event) => {
  let itemIdEl = event.target.parentNode.id;
  let divNewCreated = document.createElement("div");
  const newContentDiv = document.createTextNode(itemIdEl);
  removedItems.push(itemIdEl);
  let index = closedItems.indexOf(itemIdEl);
  closedItems.splice(index, 1);
  divNewCreated.appendChild(newContentDiv);
  divNewCreated.classList.add("render", "crossedOutLine", "classOpacity");
  deleteItemsContainer.appendChild(divNewCreated);
  //
  let itemId = document.getElementById(`${itemIdEl}`);
  closedItemsContainer.removeChild(itemId);
};
// removedItem();

// Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.

//powyzej error wykonuje się nie za każdym razem po próbie kliknięcia w przycisk usuń

//kolejny error jesli dodam liczbe 1 potem 12 potem 123 ,te liczby będą w closedItems array potem będę chciał dodać jeszcze raz liczbe 123 i za jednym kliknięciem dodaje naraz liczby 1,12,123
