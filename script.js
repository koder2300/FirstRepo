const inputBlack = document.querySelector(".black");
const buttonBlue = document.querySelector(".blue");
const closeBtn = document.querySelector(".close");
const allBtn = document.querySelectorAll(".renderPlus2");
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
  items.forEach((el) => {
    let newDiv = document.createElement("div");
    let newDiv2 = document.createElement("button");

    const newContent = document.createTextNode(el);
    const newContent2 = document.createTextNode("ZAMKNIJ");

    newDiv.className = "render";
    newDiv.id = items.slice(0, 14);
    newDiv.appendChild(newContent);
    newDiv2.appendChild(newContent2);

    newDiv.classList.add("renderPlus");
    newDiv2.classList.add("renderPlus2");

    document.body.appendChild(newDiv2);
    document.body.appendChild(newDiv);
  });
};

buttonBlue.addEventListener("click", renderList);

const closeAllItems = () => {
  items.concat(closedItems);
  console.log(closedItems);
};
// 17. dodaj nowa funkcje "closeAllItems" która przekopiuje wszystkie wartości z tablicy "items" do "closedItems"
//
// 18. edytuj funkcje addItem i po nadaniu contentu dla utworzonego divu nadaj mu również ID, niech będzie to 15 pierwszych liter contentu, czyli musisz przyciąć wartość którą umieściłeś w content div do 15 znaków i użyć jako id

// 20. Edytuj funkcje addItem tak aby nie pozwalala dodac duplikatu do listy items, mozesz tutaj uzyc np find() badz indexOf() guglnij obie funkcje
//
// 21. Dodaj funkcje “closeItem”, która poprzez event.target uzyska ID itemu i wypluje go w konsoli. Przypnij te funkcje do przyciskow zamknij

//
const closeItem = () => {
  console.log(`klik`);
};
allBtn.addEventListener("click", closeItem);
