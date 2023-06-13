const renderList = () => {
  itemsContainer.innerHTML = "";

  items.forEach((el) => {
    let newDivCreated = document.createElement("div");
    let closedBtn = document.createElement("button");
    const newContent = document.createTextNode(el);
    const newContentClose = document.createTextNode("ZAMKNIJ");
    newDivCreated.className = "render";
    newDivCreated.id = el.slice();
    newDivCreated.appendChild(newContent);
    closedBtn.appendChild(newContentClose);
    newDivCreated.classList.add("render");
    closedBtn.classList.add("secondary");
    newDivCreated.appendChild(closedBtn);
    itemsContainer.appendChild(newDivCreated);
    closedBtn.addEventListener("click", closeItem);
  });
};
//
