const closeItem = (event) => {
  console.log(`klik`);
  let idElement = event.target.parentNode.id;
  closedItems.push(idElement);
  console.log(closedItems);
  items = items.filter((el) => {
    return event.target.parentNode.id !== el.slice();
  });

  renderClosedItem(event.target.parentNode);
};
// closeItem();
