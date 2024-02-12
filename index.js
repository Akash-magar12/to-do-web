let btn = document.querySelector("button");
let input = document.querySelector("input");
let add = document.querySelector(".add");

btn.addEventListener("click", click);

function click() {
  if (input.value === "") {
    alert("Please enter something");
  } else {
    let li = document.createElement("li");
    li.innerText = input.value;
    add.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10060; ";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

add.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
  console.log(e);
});

function saveData() {
  localStorage.setItem("data", add.innerHTML);
}

function showTask() {
  add.innerHTML = localStorage.getItem("data");
}
showTask();
