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
// object
const obj = {};
// const objClosed = {};
// const objRemoved = {};

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
//bugi cdn.
//1.w funkcji removedItem nie usuwasz itemu z closedItems +
// 2. newDiv i closeBtn są globalne niepowinny +
//3.poprawić funkję removedItem pod względem zmiennych globalnych+
//4.removeditem pod względem chwytania id +
//duplikowanie nie działa jeśli juz sa dodane do następnych tablic elementy
//5 przeniesione zmienne globalne +
// BUGI;
//// wskazac konkretne dziecko elementu closedItemDiv ? +
//
//tyllko małe ekrany 100% padding niewielki
