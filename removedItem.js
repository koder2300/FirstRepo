const removedItem = (event) => {
  console.log(`klik`);
  itemIdEl = event.target.parentNode.id;
  // console.log(itemIdEl);
  removedItems.push(itemIdEl);
  closedItems.splice(0, 1);
  console.log(closedItems);
  console.log(removedItems);
  //
  newDiv.classList.add("render", "crossedOutLine", "classOpacity");
  closedBtn.classList.add("dangerDel", "crossedOutLine", "classOpacity");
  //
  deleteItemsContainer.appendChild(newDiv);
  deleteBtn.remove();
  //   closedBtn.addEventListener("click", closeItem);
};
removedItem();
