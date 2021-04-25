let ChangeColor = document.querySelector(".button");

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let RGBrandom="rgb("+x+","+y+","+z+")";
    ChangeColor.style.backgroundColor=RGBrandom;
};

ChangeColor.addEventListener('click', random_bg_color);

let Item = document.querySelector(".input");
let BtnAdd = document.querySelector(".add");
let BtnDelete = document.querySelector(".delete");

let number = 0;
let index = 0;

function addStuff () {
  let mainList = document.querySelector(".list");
  let newRow = document.createElement("tr");
  let newNumber = document.createElement("td");
  let newItem = document.createElement("td");
  number++;
  mainList.appendChild (newRow);
  newNumber.textContent = number;
  newRow.appendChild (newNumber);
  newItem.textContent = Item.value;
  newRow.appendChild (newItem);
  Item.value = ("");
  index++;
};

BtnAdd.addEventListener("click", addStuff);

function deleteChild() {
    if (index > 0) {
      let mainList = document.querySelector(".list");
      let lastChild = mainList.lastChild;
      mainList.removeChild(lastChild);
      index--;
      number--;
    };
  };
  
BtnDelete.addEventListener("click", deleteChild);