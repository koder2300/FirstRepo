const closeItem = (event) => {
  console.log(`klik`);
  let itemToBeClosed = event.target.parentNode.id;
  //
  let divNew = document.createElement("div");
  const newContentDiv = document.createTextNode(itemToBeClosed);
  divNew.appendChild(newContentDiv);
  divNew.classList.add("render");

  items.forEach((el) => {
    // console.log(el);
    closedItems.push(el);
    //duplikowanie
    closedItems = closedItems.filter((element, index) => {
      return closedItems.indexOf(element) === index;
    });
  });
  //
  console.log(closedItems);
  items = items.filter((el) => {
    return event.target.parentNode.id !== el.slice(0, 14);
  });
  closedItems.shift();
  renderClosedItem(event.target.parentNode);
};
// closeItem();
