let button = document.querySelector("button");

let colors = ["red", "green", "blue", "yellow", "purple","Pink"]



button.addEventListener('click', () =>{
    let randomNumber = Math.floor(Math.random() * 6)

    let randomColor  =colors[randomNumber];
    document.body.style.backgroundcolor = randomColor;

}) 
