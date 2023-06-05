// const containerWithMovies = document.querySelector(".containerMovies");
const itemInput = document.querySelector(".black");
const buttonAdd = document.querySelector(".btn-primary");
const closeBtn = document.querySelector(".close");
// const allBtn = document.querySelectorAll(".renderPlus2");
const itemsContainer = document.querySelector(".container");
const closedItemsContainer = document.querySelector(".containerClosedItems");
const exportBtn = document.querySelector(".export");
const renderDiv = document.querySelector(".render");
const btnCloseAll = document.querySelector(".btn-dark");
let items = [];
let closedItems = [];
let removedItems = [];
const deleteItemsContainer = document.querySelector(".deleteItems");
// let uniqueChars;
const addItem = () => {
  console.log(itemInput.value);
  items.push(itemInput.value);
  //usuwanie duplikatów

  items = items.filter((element, index) => {
    return items.indexOf(element) === index;
  });
  console.log(items);
  console.log(`klik`);
};

buttonAdd.addEventListener("click", addItem);
let newDiv;
let closedBtn;
const renderList = () => {
  itemsContainer.innerHTML = ""; // tutaj jest
  items.forEach((el) => {
    newDiv = document.createElement("div");
    closedBtn = document.createElement("button");

    const newContent = document.createTextNode(el);
    const newContentClose = document.createTextNode("ZAMKNIJ");

    newDiv.className = "render";
    newDiv.id = el.slice(0, 14);
    newDiv.appendChild(newContent);
    closedBtn.appendChild(newContentClose);

    newDiv.classList.add("renderPlus");
    closedBtn.classList.add("secondary");

    newDiv.appendChild(closedBtn);
    itemsContainer.appendChild(newDiv);

    closedBtn.addEventListener("click", closeItem);
  });
};

buttonAdd.addEventListener("click", renderList);

const closeAllItems = () => {
  closedItems = items.slice();
  console.log(itemsContainer);
  closedItems.forEach((el) => {
    renderClosedItem(itemsContainer.firstChild);
  });

  console.log(items);
  items.splice(0, items.length);
  console.log(items);
  // closedItemsContainer.remove();
  // itemsContainer.remove();
};

//
btnCloseAll.addEventListener("click", closeAllItems);

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

let newEl;
let deleteBtn;
let closedItemDiv;
const renderClosedItem = (closedItemDiv) => {
  closedItemsContainer.appendChild(closedItemDiv); //błąd string a nie node
  closedItemDiv.classList.add("crossedOutLine");

  deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", removedItem);
  // document.body.appendChild(deleteBtn);
  //
  const deleteBtnContent = document.createTextNode("usuń");
  deleteBtn.appendChild(deleteBtnContent);

  deleteBtn.classList.add("danger", "btn");

  closedItemDiv.removeChild(closedItemDiv.firstElementChild);
  closedItemDiv.appendChild(deleteBtn);
};
// renderClosedItem();
let itemId;

const updateRenderedList = (event) => {
  itemsContainer.innerHTML = "";
  console.log(`klik`);
  for (const item of items) {
    console.log(item);
    itemId.id = item.slice(0, 14);
    item = event.target.parentNode.id;
    console.log(item);
    if (closedItems.includes(itemId)) {
      console.log(itemId);
      itemId.classList.add("crossedOutLine");
    }
  }
};

//

const obj = {};
const exportItems = () => {
  obj.items = items;
  obj.closedItems = closedItems;
  console.log(obj);
  // JSON.parse(obj);
  const jsonObj = JSON.stringify(obj);
  console.log(jsonObj);

  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  download(JSON, jsonObj);
};

const downloadExportedItems = () => {
  const string = JSON.stringify(obj);
  console.log(string);
};

exportBtn.addEventListener("click", exportItems);
let itemIdDel;
let itemIdEl;
//
// let newDiv2;
const removedItem = (event) => {
  console.log(`klik`);
  // itemIdEl.forEach;
  itemIdEl = event.target.parentNode.id;
  console.log(itemIdEl);
  // renderList();
  // z removedItems do (aarray) append do deleteitemscont
  removedItems.push(itemIdEl);
  console.log(removedItems);
  console.log(deleteItemsContainer);

  // proba tutaj
  removedItems.forEach((el) => {
    newDiv.classList.add("renderPlus", "crossedOutLine", "classOpacity");
    closedBtn.classList.add("dangerDel", "crossedOutLine", "classOpacity");
    deleteItemsContainer.appendChild(newDiv);

    closedBtn.addEventListener("click", closeItem);
  });
  // az do tąd
  // deleteItemsContainer.appendChild(deleteBtn);
  // removedItems.splice(0, closedItems.length);
  // console.log(closedItems);
  // closedItems.splice(0, closedItems.length);
  // console.log(removedItems);
  // closedItemsContainer.removeChild(closedItemsContainer.firstElementChild);
};
// removedItem();

// 36.+
// 29b  +
//29c +
//30 +
//30b+
//32+
//33+
//34+
//35+
//36+
//37 +
//39+
//40+

//
// 40. Dodaj funkcję removeItem, która po wciśnięciu przycisku usuń przy danym divie doda ten item do tablicy removedItems, usunie go z tablicy closedItems i wyrenderuje w kontenerze na usunięte items. Przycisk usuń ma się nie pojawić. Stylowanie ma być na 50% opacity całego div.
//
//BUGI
//
// 1. dodaje tylko jeden div do .deleteItemsContainer po przyciśnięciu btn
//2.trzeba ustawic responyswnosc strony,tylko na mobile
//
