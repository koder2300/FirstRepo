const updateRenderedList = (event) => {
  itemsContainer.innerHTML = "";
  console.log(`klik`);
  for (const item of items) {
    console.log(item);
    let itemId;
    itemId.id = item.slice(0, 14);
    item = event.target.parentNode.id;
    console.log(item);
    if (closedItems.includes(itemId)) {
      console.log(itemId);
      itemId.classList.add("crossedOutLine");
    }
  }
};
