let inputBox = document.getElementById("input-box");
let addBtn = document.getElementById("add");
let priority = document.getElementById("priority");
let deleteBtn = document.getElementById("delete-btn");
let mylist = document.querySelector(".myList");

function add() {
  let inputItem = inputBox.value;
  inputBox.value = ""; // Clear the input box

  if (inputItem) {
    let li = document.createElement("li");
    li.textContent = inputItem;
    li.classList.add("list-item");
    li.style.display = "grid";
    li.style.gap = "10px";
    li.style.color = "white";
    li.style.fontWeight = "bold";
    li.style.marginBottom = "20px";
    li.style.fontFamily = "sans-serif";
    li.style.gridTemplateColumns = "1fr 1fr 1fr";
    li.style.borderRadius = "15px";
    li.style.justifyItems = "space-between";

    let completed = document.createElement("button");
    completed.textContent = "COMPLETED";
    completed.style.borderRadius = "10px";
    completed.style.paddingTop = "8px";
    completed.style.paddingBottom = "8px";
    completed.style.color = "white";
    completed.style.backgroundColor = "#0e98a7";

    completed.classList.add("complete");
    completed.addEventListener("click", finish);

    let del = document.createElement("button");
    del.textContent = "DELETE";
    del.classList.add("delete");
    del.style.borderRadius = "10px";
    del.style.paddingTop = "8px";
    del.style.paddingBottom = "8px";
    del.style.color = "white";
    del.style.backgroundColor = "#0e98a7";
    del.addEventListener("click", remove);

    li.appendChild(completed);
    li.appendChild(del);

    mylist.appendChild(li);
  }
}

addBtn.addEventListener("click", add);

function prior() {
  let inputItem = inputBox.value;
  inputBox.value = ""; // Clear the input box
  if (inputBox) {
    let li = document.createElement("li");
    li.textContent = inputItem;
    li.classList.add("list-item");
    li.style.display = "grid";
    li.style.gap = "10px";
    li.style.color = "white";
    li.style.fontWeight = "bold";
    li.style.marginBottom = "20px";
    li.style.fontFamily = "sans-serif";
    li.style.gridTemplateColumns = "1fr 1fr 1fr";
    li.style.borderRadius = "15px";
    li.style.justifyItems = "space-between";

    let completed = document.createElement("button");
    completed.textContent = "COMPLETED";
    completed.classList.add("complete");
    completed.style.borderRadius = "10px";
    completed.style.paddingTop = "8px";
    completed.style.paddingBottom = "8px";
    completed.style.color = "white";
    completed.style.backgroundColor = "#0e98a7";
    completed.addEventListener("click", finish);

    let del = document.createElement("button");
    del.textContent = "DELETE";
    del.classList.add("delete");
    del.style.borderRadius = "10px";
    del.style.paddingTop = "8px";
    del.style.paddingBottom = "8px";
    del.style.color = "white";
    del.style.backgroundColor = "#0e98a7";
    del.addEventListener("click", remove);

    li.appendChild(completed);
    li.appendChild(del);

    mylist.insertBefore(li, mylist.firstChild);
  }
}
priority.addEventListener("click", prior);

function finish(event) {
  const li = event.target.closest("li");
  li.classList.toggle("selected");
}

function remove(event) {
  const li = event.target.closest("li");
  mylist.removeChild(li);
}

deleteBtn.addEventListener("click", () => {
  mylist.innerHTML = "";
});
