const closeItem = (event) => {
  console.log(`klik`);

  items.forEach((el) => {
    closedItems.push(el);
  });
  console.log(closedItems);
  items = items.filter((el) => {
    return event.target.parentNode.id !== el.slice();
  });

  renderClosedItem(event.target.parentNode);
};
// closeItem();
