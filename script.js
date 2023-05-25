const itemInput = document.querySelector(".black");
const buttonAdd = document.querySelector(".blue");
const closeBtn = document.querySelector(".close");
// const allBtn = document.querySelectorAll(".renderPlus2");
const itemsContainer = document.querySelector(".container");
const closedItemsContainer = document.querySelector(".containerClosedItems");
const exportBtn = document.querySelector(".export");
const renderDiv = document.querySelector(".render");
let items = [];
const closedItems = [];
const removedItems = [];
const deleteItemsContainer = document.querySelector(".deleteItems");
// let uniqueChars;
const addItem = () => {
  console.log(itemInput.value);
  items.push(itemInput.value);
  //usuwanie duplikatów
  items = items.filter((element, index) => {
    return items.indexOf(element) === index;
  });

  // uniqueChars = items.filter((element, index) => { // na dobrą sprawę zmiennna uniqueChars nie jest potrzebna, mogłoby równie dobrze być "items = items.filter........." i wtedy renderować normalnie items zamiast uniqueChar w funkcji renderItems
  //   return items.indexOf(element) === index;
  // });

  // console.log(uniqueChars);
  console.log(items);
};

buttonAdd.addEventListener("click", addItem);

const renderList = () => {
  itemsContainer.innerHTML = "";
  items.forEach((el) => {
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
    renderClosedItem(el.slice(0, 14)); // tutaj nie powinien iść el tylko ID tego elementu - musisz powtórzyć kod z 38 linijki
    // czyli renderClosedItem(el.slice(0, 14))
    // ponieważ funcja renderClosedItem przyjmuje jako argument ID elementu który chwytasz w 78 linijce
  });
};

//

const closeItem = (event) => {
  console.log(`klik`);

  // let Id = event.target.parent.id;
  let itemToBeClosed = event.target.parentNode.id;
  closedItems.push(itemToBeClosed);
  console.log(closedItems);
  console.log(itemToBeClosed);
  renderClosedItem(itemToBeClosed);
};

const renderClosedItem = (id) => {
  const closedItemDiv = document.querySelector("#id");
  console.log(closedItemDiv);
  // brakuje odbioru parametru id, który przekazujesz w 72 linijce
  // let getId = event.target.parentNode.id; // to było dobrze, nie powinno być zakomentowane, zła nazwa zmiennej, powinieneś ją nazwać np "itemToBeClosed", ponieważ w tej zmiennej chwytasz div, który masz przenieść do closedItemsContainer
  closedItemsContainer.appendChild(closedItemDiv); // tutaj do kontenera na closedItems przypisujesz kontener na items, a powinieneś tutaj przypisa do kontenera na closedItems item, który zamknąłeś przyciskiem zamknij

  let deleteBtn = document.createElement("button"); // funkcja createElement zwraca element, nie zwraca tworzenia elementu, dlatego ta zmienna powinna nazywać się "deleteBtn"
  const deleteBtnContent = document.createTextNode("usuń"); // zmienna newContent mało mówi, do czego to jest content, lepiej byłoby "deleteBtnContent"
  deleteBtn.appendChild(deleteBtnContent);
  deleteBtn.classList.add("renderPlus2");
  //
  // Usuwanie przycisku i przypięcie deleteBtn
  //
  itemToBeClosed.removeChild(firstElementChild);
  itemToBeClosed.appendChild(deleteBtn);
  // to wszystko z createBtnDelete jest dobrze, powinieneś teraz w divie, który masz w zmiennej "itemToBeClosed" usunąć przycisk zamknij i przypiąć do niego nowy przycisk - createBtnDelete
};

const updateRenderedList = () => {
  itemsContainer.innerHTML = "";
  for (const item of items) {
    closedItems.includes(item);
    item.classList.add("crossedOutLine");
  }
  // if (closedItems.includes(items)) {
  //   // tu jest błąd logiczny, powinna być pętla, która przejdzie po items i każdy po kolei sprawdzi poprzez closedItems.includes()
  //   items.classList.add("crossedOutLine"); // items to tablica stringów, jak chcesz wywołać "classList.add()" na stringu?
  // }
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
