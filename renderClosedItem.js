const renderClosedItem = (closedItemDiv) => {
  closedItemDiv.classList.add("crossedOutLine");
  closedItemsContainer.appendChild(closedItemDiv);
  let deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", removedItem); //
  const deleteBtnContent = document.createTextNode("usuń");
  deleteBtn.appendChild(deleteBtnContent);
  deleteBtn.classList.add("danger");
  //
  console.log(removedItems);
  // closedItemDiv.removeChild(closedItemDiv.firstElementChild);
  closedItemDiv.appendChild(deleteBtn);
};
// renderClosedItem();
