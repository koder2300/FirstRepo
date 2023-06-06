const renderList = () => {
  itemsContainer.innerHTML = ""; // tutaj jest
  items.forEach((el) => {
    let newDiv = document.createElement("div");
    let closedBtn = document.createElement("button");
    const newContent = document.createTextNode(el);
    const newContentClose = document.createTextNode("ZAMKNIJ");
    newDiv.className = "render";
    newDiv.id = el.slice(0, 14);
    newDiv.appendChild(newContent);
    closedBtn.appendChild(newContentClose);
    newDiv.classList.add("render");
    closedBtn.classList.add("secondary");
    newDiv.appendChild(closedBtn);
    itemsContainer.appendChild(newDiv);
    closedBtn.addEventListener("click", closeItem);
  });
};
//
