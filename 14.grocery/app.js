// ****** select items **********

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// FUNCTIONS
function addItem(e) {
  e.preventDefault();
  const itemValue = grocery.value;
  const id = new Date().getTime().toString(); // quick way to generate uniquish id

  if (itemValue && !editFlag) {
    const article = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.itemValue = id;
    article.setAttributeNode(attr);
    article.classList.add("grocery-item");
    article.innerHTML = `
      <p class="title">${itemValue}</p>
      <div class="btn-container">
        <!-- edit btn -->
        <button type="button" class="edit-btn" title="Edit item">
          <i class="fas fa-edit"></i>
        </button>
        <!-- delete btn -->
        <button type="button" class="delete-btn" title="Delete item">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

    // add event listeners to both buttons;
    const deleteBtn = article.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = article.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(article);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");

    // set local storage
    addToLocalStorage(id, itemValue);
    // set back to default
    setBackToDefault();
  } else if (itemValue && editFlag) {
    editElement.innerHTML = itemValue;
    displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, itemValue);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove the alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

// set back to default
function setBackToDefault() {
  console.log("set back to default");
}

// adding to localstorage
function addToLocalStorage(id, itemValue) {
  console.log("added to storage");
}
