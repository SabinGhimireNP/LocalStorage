// Varibles
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("Item")) || [];
const clr = document.querySelector(".clear");
const del = document.querySelector(".Delete");

//Functions
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  applyList(items, itemsList);
  localStorage.setItem("Item", JSON.stringify(items));
  //   console.log(item);
  this.reset();
}

function applyList(datas = [], datalist) {
  datalist.innerHTML = datas
    .map((data, i) => {
      return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${
        data.done ? "checked" : ""
      }/>
    <label for="item${i}">${data.text}<label>               
    </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("Item", JSON.stringify(items));
  applyList(items, itemsList);
}
function ClearAll() {
  items.forEach((e) => {
    e.done = false;

    localStorage.setItem("Item", JSON.stringify(items));
    applyList(items, itemsList);
  });
}
function DeleteAll() {
  items.splice(0, items.length);
  localStorage.clear("Item");
  applyList(items, itemsList);
}
applyList(items, itemsList);
// localStorage.clear();

//Event listners
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
clr.addEventListener("click", ClearAll);
del.addEventListener("click", DeleteAll);
