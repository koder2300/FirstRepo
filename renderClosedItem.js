const renderClosedItem = (closedItemDiv) => {
  closedItemsContainer.appendChild(closedItemDiv); //błąd string a nie node
  closedItemDiv.classList.add("crossedOutLine");

  deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", removedItem);
  // document.body.appendChild(deleteBtn);
  //
  const deleteBtnContent = document.createTextNode("usuń");
  deleteBtn.appendChild(deleteBtnContent);

  deleteBtn.classList.add("danger");

  closedItemDiv.removeChild(closedItemDiv.firstElementChild);
  closedItemDiv.appendChild(deleteBtn);
};
