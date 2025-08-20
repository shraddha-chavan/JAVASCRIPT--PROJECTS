let inputElement = document.getElementById("nameInput")
let spanElement = document.getElementById("name")
// console.log(inputElement.placeholder)

inputElement.addEventListener('input', () =>{
    //   console.log(inputElement.value)
      spanElement.textContent = inputElement.value
})