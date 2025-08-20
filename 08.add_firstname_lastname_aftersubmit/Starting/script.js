let submitButton = document.getElementById("submitBtn");

let firstInput = document.getElementById("firstNameInput");
let lastInput = document.getElementById("lastNameInput");


let firstspan = document.getElementById("firstName");
let secondspan = document.getElementById("lastName");
submitButton.addEventListener('click' , () =>{
    firstspan.textContent = firstInput.value;
    secondspan.textContent = lastInput.value;

    firstInput.value = "";
    lastInput.value = "";

})