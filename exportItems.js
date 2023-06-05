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

exportBtn.addEventListener("click", exportItems);
