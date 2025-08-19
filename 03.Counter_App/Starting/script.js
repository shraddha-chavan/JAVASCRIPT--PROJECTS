let increasebutton = document.getElementById("Increase");
let resetbutton = document.getElementById("reset");
let decreasebutton = document.getElementById("Decrease");

let countText = document.getElementById("value");
let count = 0;

// Decrease
decreasebutton.addEventListener("click", () => {
  count = count - 1;
  countText.textContent = count;
});

// Reset
resetbutton.addEventListener("click", () => {
  count = 0;
  countText.textContent = count;
});

// Increase
increasebutton.addEventListener("click", () => {
  count = count + 1;
  countText.textContent = count;
});
