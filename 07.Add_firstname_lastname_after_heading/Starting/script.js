
let firstNameInput = document.getElementById("firstNameInput");
let lastNameInput = document.getElementById("lastNameInput");
let firstNameDisplay = document.getElementById("firstName");
let lastNameDisplay = document.getElementById("lastName");


firstNameInput.addEventListener("input", () => {
  firstNameDisplay.textContent = firstNameInput.value;
});


lastNameInput.addEventListener("input", () => {
  lastNameDisplay.textContent = lastNameInput.value;
});