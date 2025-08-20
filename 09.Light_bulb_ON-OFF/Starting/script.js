let bulbImage = document.getElementById("myImage");


bulbImage.addEventListener('click' , ()=>{
    if (bulbImage.src.match("bulboff")) {
        bulbImage.src = "bulbon.gif";
    } else {
        bulbImage.src = "bulboff.gif";
    }   
})