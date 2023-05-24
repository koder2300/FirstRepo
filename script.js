const itemInput = document.querySelector(".black");
const buttonAdd = document.querySelector(".blue");
const closeBtn = document.querySelector(".close");
// const allBtn = document.querySelectorAll(".renderPlus2");
const itemsContainer = document.querySelector(".container");
const closedItemsContainer = document.querySelector(".containerClosedItems");
const exportBtn = document.querySelector(".export");
const items = [];
const closedItems = [];
const removedItems = [];
const deleteItemsContainer = document.querySelector(".deleteItems");
let uniqueChars;
const addItem = () => {
  console.log(itemInput.value);
  items.push(itemInput.value);
  //usuwanie duplikatów

  uniqueChars = items.filter((element, index) => {
    return items.indexOf(element) === index;
  });

  console.log(uniqueChars);
};

buttonAdd.addEventListener("click", addItem);

const renderList = () => {
  itemsContainer.innerHTML = "";
  uniqueChars.forEach((el) => {
    let newDiv = document.createElement("div");
    let createBtn = document.createElement("button");

    const newContent = document.createTextNode(el);
    const newContentClose = document.createTextNode("ZAMKNIJ");

    newDiv.className = "render";
    newDiv.id = el.slice(0, 14);
    newDiv.appendChild(newContent);
    createBtn.appendChild(newContentClose);

    newDiv.classList.add("renderPlus");
    createBtn.classList.add("renderPlus2");

    newDiv.appendChild(createBtn);
    itemsContainer.appendChild(newDiv);

    createBtn.addEventListener("click", closeItem);
  });
};

buttonAdd.addEventListener("click", renderList);

const closeAllItems = () => {
  closedItems = items.slice();
  console.log(closedItems);
  items.forEach((el) => {
    renderClosedItem(closedItems);
  });
};

//
const closeItem = (event) => {
  console.log(`klik`);

  let Id = event.target.parent.id;
  let getId = event.target.parentNode.id;
  closedItems.push(getId);
  console.log(closedItems);
  renderClosedItem(Id);
};
const renderClosedItem = (itemsContainer) => {
  closedItemsContainer.appendChild(itemsContainer);

  let createBtnDelete = document.createElement("button");
  const newContent = document.createTextNode("usuń");
  createBtnDelete.appendChild(newContent);
  createBtnDelete.classList.add("renderPlus2");
};

const updateRenderedList = () => {
  itemsContainer.innerHTML = "";

  if (closedItems.includes(items)) {
    items.classList.add("crossedOutLine");
  }
};
const obj = {};
const exportItems = () => {
  obj.items = items;
  obj.closedItems = closedItems;
  console.log(obj);
};
exportItems();

const downloadExportedItems = () => {
  const string = JSON.stringify(obj);
  console.log(string);
};
exportBtn.addEventListener("click", downloadExportedItems);

// 17.+
// 18+
// 20.+
// 27.+
//28.+
//29  +??
//30+
//31+
//32+
//33  ??
//34+
//35+
