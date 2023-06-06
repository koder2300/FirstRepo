const renderClosedItem = (closedItemDiv) => {
  closedItemDiv.classList.add("crossedOutLine");
  closedItemsContainer.appendChild(closedItemDiv); //błąd string a nie node

  let deleteBtn = document.createElement("button");

  deleteBtn.addEventListener("click", removedItem);
  // document.body.appendChild(deleteBtn);
  //
  const deleteBtnContent = document.createTextNode("usuń");
  deleteBtn.appendChild(deleteBtnContent);

  deleteBtn.classList.add("danger");

  closedItemDiv.removeChild(closedItemDiv.firstElementChild);
  closedItemDiv.appendChild(deleteBtn);
};
// renderClosedItem();
