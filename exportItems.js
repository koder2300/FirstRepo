const exportItems = () => {
  obj.items = items;
  objClosed.removedItems = removedItems;
  objRemoved.closedItems = closedItems;
  console.log(obj);
  // JSON.parse(obj);
  const jsonObj = JSON.stringify(obj);
  const jsonObjClosed = JSON.stringify(objClosed);
  const jsonObjRemoved = JSON.stringify(objRemoved);
  console.log(jsonObj);
  console.log(jsonObjClosed);
  console.log(jsonObjRemoved);

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
  download(JSON, jsonObjClosed);
  download(JSON, jsonObjRemoved);
};

exportBtn.addEventListener("click", exportItems);
