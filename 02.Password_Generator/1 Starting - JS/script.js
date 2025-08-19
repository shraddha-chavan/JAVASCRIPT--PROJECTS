let button = document.querySelector("button");
let inputElement = document.getElementById("password");

button.addEventListener("click", () => {
  let password = "";

  let charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

  for (let i = 0; i < 12; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  console.log(password);
  inputElement.value = password;
});
