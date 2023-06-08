const renderClosedItem = (closedItemDiv, event) => {
  closedItemDiv.classList.add("crossedOutLine");
  closedItemsContainer.appendChild(closedItemDiv); //błąd string a nie node
  //próba
  // closed;
  //
  let deleteBtn = document.createElement("button");

  deleteBtn.addEventListener("click", removedItem); //
  const deleteBtnContent = document.createTextNode("usuń");
  deleteBtn.appendChild(deleteBtnContent);
  deleteBtn.classList.add("danger");
  closedItems.forEach((el) => {
    removedItems.push(el);
  });
  let itemIdEl = event.target.parentNode.id;
  let itemId = document.getElementById(`${itemIdEl}`);
  closedItemsContainer.removeChild(itemId);
  console.log(itemId);
  closedItemDiv.appendChild(deleteBtn);
  // closedItemDiv.removeChild(closedItemDiv.firstElementChild);
};
// renderClosedItem();
