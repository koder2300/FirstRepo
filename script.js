const inputBlack = document.querySelector(".black");
const buttonBlue = document.querySelector(".blue");
const closeBtn = document.querySelector(".close");
const items = [];
const addItem = () => {
  console.log(inputBlack.value);
  items.push(inputBlack.value);
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
    newDiv.appendChild(newContent);
    newDiv2.appendChild(newContent2);

    newDiv.classList.add("renderPlus");
    newDiv2.classList.add("renderPlus2");

    document.body.appendChild(newDiv2);
    document.body.appendChild(newDiv);
    document.body.lastChild(closeBtn);
  });
};

buttonBlue.addEventListener("click", renderList);
