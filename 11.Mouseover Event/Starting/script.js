let button = document.getElementById('hoverBtn');

button.addEventListener('mouseover',()=>{
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    
})
button.addEventListener('mouseout',()=>{

    button.style.backgroundColor = "white";
    button.style.color = 'black';
})