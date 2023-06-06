const removedItem = (event) => {
  console.log(`klik`);
  // console.log(event.target.value);
  let itemIdEl = event.target.parentNode.id;
  // console.log(itemIdEl);
  let divNew = document.createElement("div");
  const newContentDiv = document.createTextNode(itemIdEl);
  divNew.appendChild(newContentDiv);
  divNew.classList.add("render", "crossedOutLine", "classOpacity");
  removedItems.push(itemIdEl);
  removedItems.splice(0, 1);
  //
  closedItems.splice(0, 1);
  console.log(closedItems);
  console.log(removedItems);
  let newDiv = event.target.parentNode.id;
  let closedBtn = event.target.parentNode.id;
  //
  // console.log(typeof newDiv);
  //
  // newDiv.classList.add("render", "crossedOutLine", "classOpacity");
  // closedBtn.classList.add("dangerDel", "crossedOutLine", "classOpacity");
  //
  // newDiv.appendChild(closedBtn);
  deleteItemsContainer.appendChild(divNew);
  // deleteItemsContainer.appendChild(closedBtn);
  deleteBtn.remove();
  //   closedBtn.addEventListener("click", closeItem);
};
// removedItem();
