const itemInput = document.querySelector(".black");
const buttonAdd = document.querySelector(".blue");
const closeBtn = document.querySelector(".close");
// const allBtn = document.querySelectorAll(".renderPlus2");
const itemsContainer = document.querySelector(".container");
const items = [];
const closedItems = [];
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

    // newDiv.appendChild(closeBtn2);
    // document.body.appendChild(newDiv);
    newDiv.appendChild(createBtn);
    itemsContainer.appendChild(newDiv);
    createBtn.addEventListener("click", closeItem);
  });
};

buttonAdd.addEventListener("click", renderList);

const closeAllItems = () => {
  closedItems = items.slice();
  console.log(closedItems);
};

//
const closeItem = (event) => {
  console.log(`klik`);
  // let getId = event.target.id;
  let getId = event.target.parentNode.id;
  closedItems.push(getId);
  console.log(closedItems);
};

const updateRenderedList = () => {
  itemsContainer.innerHTML = "";

  if (closedItems.includes(items)) {
    items.classList.add("crossedOutLine");
  }
};

// 17.+
// 18
// 20.+
