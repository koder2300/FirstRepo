const itemInput = document.querySelector(".blackInput");
const buttonAdd = document.querySelector(".btn-primary");
const closeBtn = document.querySelector(".close");
const itemsContainer = document.querySelector(".container");
const closedItemsContainer = document.querySelector(".containerClosedItems");
const exportBtn = document.querySelector(".export");
const renderDiv = document.querySelector(".render");
const btnCloseAll = document.querySelector(".btn-dark");
const deleteItemsContainer = document.querySelector(".deleteItems");
//arrays
let items = [];
let closedItems = [];
let removedItems = [];
// variables
