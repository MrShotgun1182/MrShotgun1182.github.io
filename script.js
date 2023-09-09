document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(".game-container");
    const resetButton = document.getElementById("reset-button");
    const gridSize = 5; // Adjust grid size as needed
    let treasureLocation = Math.floor(Math.random() * gridSize * gridSize);
    let treasureLocation2 = Math.floor(Math.random() * gridSize * gridSize);
    let gameOver = false;
  
    // Create the game grid
    for (let i = 0; i < gridSize * gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      grid.appendChild(square);
  
      square.addEventListener("click", function () {
        if (gameOver) return;
  
        if (i == treasureLocation) {
          square.style.backgroundColor = "black";
          square.textContent = "👶🏿";
          gameOver = true;
          alert("بد بخت نیگا پیدا کردی، حداقل دندونش سفیده");
        } else if ( i == treasureLocation2) {
          square.style.backgroundColor = "white";
          square.textContent = "👶🏼";
          gameOver = true;
          alert("بچه سفید پیدا کردی حالا سرپرستی این رو کی میگیره؟");
        } else {
          square.style.backgroundColor = "red";
          square.textContent = "🤬";
        }
      });
    }
  
    // Reset the game
    resetButton.addEventListener("click", function () {
      const squares = document.querySelectorAll(".square");
      squares.forEach((square) => {
        square.style.backgroundColor = "#ccc";
        square.textContent = "";
      });
  
      treasureLocation = Math.floor(Math.random() * gridSize * gridSize);
      treasureLocation2 = Math.floor(Math.random() * gridSize * gridSize);
      gameOver = false;
    });
  });
  
