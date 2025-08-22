let rollButton = document.getElementById('rollBtn');
let player1Image = document.querySelector('.img1');
let player2Image = document.querySelector('.img2');
let heading = document.querySelector('header h1');

rollButton.addEventListener('click', () => {
    let player1Number = Math.floor(Math.random() * 6) + 1;
    let player2Number = Math.floor(Math.random() * 6) + 1;

   
    player1Image.src = "images/dice" + player1Number + ".png";
    player2Image.src = "images/dice" + player2Number + ".png";

    
    if (player1Number > player2Number) {
        heading.textContent = "Player 1 Wins!";
    } else if (player2Number > player1Number) {
        heading.textContent = "Player 2 Wins!";
    } else {
        heading.textContent = "It's a Draw!";
    }
});
