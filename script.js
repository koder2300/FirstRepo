const inputBlack = document.querySelector(".black");
const buttonBlue = document.querySelector(".blue");
const closeBtn = document.querySelector(".close");
// const allBtn = document.querySelectorAll(".renderPlus2");
const items2 = document.querySelector(".container");
const items = [];
const closedItems = [];
const addItem = () => {
  console.log(inputBlack.value);
  items.push(inputBlack.value);
  //usuwanie duplikatów
  const uniqueArr = items.filter((c, index) => {
    return items.indexOf(c) === index;
  });
  console.log(uniqueArr);
  console.log(items);
  //   return console.log(`Dodałeś item`);
};

buttonBlue.addEventListener("click", addItem);

const renderList = () => {
  items2.innerHTML = "";
  items.forEach((el) => {
    let newDiv = document.createElement("div");
    let closeBtn2 = document.createElement("button");

    const newContent = document.createTextNode(el);
    const newContent2 = document.createTextNode("ZAMKNIJ");

    newDiv.className = "render";
    newDiv.id = items.slice(0, 14);
    newDiv.appendChild(newContent);
    closeBtn2.appendChild(newContent2);

    newDiv.classList.add("renderPlus");
    closeBtn2.classList.add("renderPlus2");

    // newDiv.appendChild(closeBtn2);
    // document.body.appendChild(newDiv);
    newDiv.appendChild(closeBtn2);
    items2.appendChild(newDiv);
    closeBtn2.addEventListener("click", closeItem);
  });
};

buttonBlue.addEventListener("click", renderList);

const closeAllItems = () => {
  items.concat(closedItems);
  console.log(closedItems);
};

// 21. Dodaj funkcje “closeItem”, która poprzez event.target uzyska ID itemu i wypluje go w konsoli. Przypnij te funkcje do przyciskow zamknij

//
const closeItem = (event) => {
  console.log(`klik`);
  // let getId = event.target.id;
  let getId = event.target.parentNode.id;
  closedItems.push(getId);
  console.log(closedItems);
};

const updateRenderedList = () => {};
