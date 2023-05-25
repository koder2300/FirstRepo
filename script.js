const itemInput = document.querySelector(".black");
const buttonAdd = document.querySelector(".blue");
const closeBtn = document.querySelector(".close");
// const allBtn = document.querySelectorAll(".renderPlus2");
const itemsContainer = document.querySelector(".container");
const closedItemsContainer = document.querySelector(".containerClosedItems");
const exportBtn = document.querySelector(".export");
const renderDiv = document.querySelector(".render");
const items = [];
const closedItems = [];
const removedItems = [];
const deleteItemsContainer = document.querySelector(".deleteItems");
let uniqueChars;
const addItem = () => {
  console.log(itemInput.value);
  items.push(itemInput.value);
  //usuwanie duplikatów

  uniqueChars = items.filter((element, index) => { // na dobrą sprawę zmiennna uniqueChars nie jest potrzebna, mogłoby równie dobrze być "items = items.filter........." i wtedy renderować normalnie items zamiast uniqueChar w funkcji renderItems
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
    return createBtn;
  });
};

buttonAdd.addEventListener("click", renderList);

const closeAllItems = () => {
  closedItems = items.slice();
  console.log(closedItems);
  closedItems.forEach((el) => {
    renderClosedItem(el); // tutaj nie powinien iść el tylko ID tego elementu - musisz powtórzyć kod z 38 linijki
    // czyli renderClosedItem(el.slice(0, 14))
    // ponieważ funcja renderClosedItem przyjmuje jako argument ID elementu który chwytasz w 78 linijce
  });
};

//
const closeItem = (event) => {
  console.log(`klik`);

  // let Id = event.target.parent.id;
  let getId = event.target.parentNode.id;
  closedItems.push(getId);
  console.log(closedItems);
  console.log(getId);
  renderClosedItem(getId);
};

const renderClosedItem = () => { // brakuje odbioru parametru id, który przekazujesz w 72 linijce
  // let getId = event.target.parentNode.id; // to było dobrze, nie powinno być zakomentowane, zła nazwa zmiennej, powinieneś ją nazwać np "itemToBeClosed", ponieważ w tej zmiennej chwytasz div, który masz przenieść do closedItemsContainer
  closedItemsContainer.appendChild(itemsContainer); // tutaj do kontenera na closedItems przypisujesz kontener na items, a powinieneś tutaj przypisa do kontenera na closedItems item, który zamknąłeś przyciskiem zamknij

  let createBtnDelete = document.createElement("button"); // funkcja createElement zwraca element, nie zwraca tworzenia elementu, dlatego ta zmienna powinna nazywać się "deleteBtn"
  const newContent = document.createTextNode("usuń"); // zmienna newContent mało mówi, do czego to jest content, lepiej byłoby "deleteBtnContent"
  createBtnDelete.appendChild(newContent);
  createBtnDelete.classList.add("renderPlus2");
  // to wszystko z createBtnDelete jest dobrze, powinieneś teraz w divie, który masz w zmiennej "itemToBeClosed" usunąć przycisk zamknij i przypiąć do niego nowy przycisk - createBtnDelete
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
