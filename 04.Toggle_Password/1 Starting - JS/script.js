let eyeIcon = document.getElementById("eyeicon");
let inputBox = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
  if (inputBox.type === "password") {
    inputBox.type = "text";
    eyeIcon.src = "eye-open.png";
  } else {
    inputBox.type = "password";
    eyeIcon.src = "eye-close.png";
  }
});
