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
// let newEl;
let closedItemDiv;
let deleteBtn;
// let newDiv;
// let closedBtn;
let itemId;
let itemIdDel;
let itemIdEl;
let itemIdRemoved;
// object
const obj = {};

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
//3.tam gdzie jest przesuwany div z elementami powinna być pętla
//4.w momencie gdy klikam usuń niema petli tylko pojedyncza wartość z tablicy przesuwa się do kontenera .deleteItems

//bugi cdn.
//1.w funkcji removedItems nie usuwasz itemu z closedItems +
