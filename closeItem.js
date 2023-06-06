const closeItem = (event) => {
  console.log(`klik`);
  let itemToBeClosed = event.target.parentNode.id;
  items = items.filter((el) => {
    return event.target.parentNode.id !== el.slice(0, 14);
  });
  closedItems.push(itemToBeClosed);
  // closedItems.shift();
  console.log(closedItems);
  console.log(itemToBeClosed);
  renderClosedItem(event.target.parentNode);
};
// closeItem();
