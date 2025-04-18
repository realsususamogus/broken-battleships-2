//welcome to battleships
//do play in dark mode and in this view (full screen would not work well, you also need console for turn)

let cols = 10;
let rows = 10;
let w, h;
let playerGrid, computerGrid, hitGrid;
let shipSize = 3;
let ships = 3;
let currentPlayer = "player";
let gameover = false
let attempts = 0;
let hits = 0;
let score = 0;
let btngo;
let beenhit = false
let startgame;
let gamestarted = false 
let difficulty = 0
let easy, regular, hard;


function setup() {
  createCanvas(600,600)
  background(255)
  buttonSetup()
 
  
}

function restart() {
  window.location.reload()
 
}


function startGame() {
  gamestarted = true
  createCanvas(600, 600); // Increase canvas height to accommodate the box
  startgame.hide()
  easy.hide()
  regular.hide()
  hard.hide()
  w = width / cols;
  h = (height - 100) / rows; // Adjust height to accommodate the box
  
  playerGrid = createGrid(cols, rows);
  computerGrid = createGrid(cols, rows);
  

  placeShips(playerGrid);
  placeShips(computerGrid);
}

function draw() {
 
  if (beenhit == true) {
    let explosionVid = document.getElementById("explosionVideo")
    explosionVid.play();
    beenhit = false
  }
  
  
  if (gamestarted == true && beenhit == false) {
  displayGrid(playerGrid, "player");
  displayGrid(computerGrid, "computer");
  score = floor((attempts -1) / hits, 3);
  displayPlayerShips();

  // Display attempts and hits in a box below the grid
  fill("black");
  rect(0, height - 100, width, 100); // Position the box below the grid
  fill(0);
  textSize(16);
  textAlign(LEFT);
  fill("orange");
  rect(15, height - 85, 105, 70);
  rect(145, height - 85, 451, 70);
  fill(0);

  text("Attempts: " + (attempts - 1), 20, height - 70);
  text("Hits: " + hits, 20, height - 50);
  text("Score: " + score, 20, height - 30);
  text("Battleships (ship length = 3)", width / 2 - 50, height - 70);
  text(
    "Blue represents your ships, red represents the ships you've hit",
    width / 2 - 150,
    height - 50
  );
  text(
    "the lower the score the better; good luck :/",
    width / 2 - 90,
    height - 30
  );
  }
  if (gameover == true) {
    
    btngo = createButton("GAME OVER! Restart?");
    btngo.position(width / 3 - 38, height / 3 + 30);
    btngo.addClass("mybutton2");
    btngo.size(280, 100);
    btngo.mousePressed(restart)
    btngo.mouseOver(changecolor2)
    btngo.mouseOut(changecolor22)
  }
}


function mousePressed() {
  if (currentPlayer == "player" && !gameover && gamestarted == true) {
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);

    attempts++;

    if (computerGrid[i][j] == 1) {
     
      background(255)
      console.log("Hit!");
      beenhit = true
      computerGrid[i][j] = 2; // Mark as hit
      hits++;
      if (allShipsSunk(computerGrid)) {
        gameover = true;
      }
    } else if (computerGrid[i][j] == 0) {
      console.log("Miss!");
      
      rect(i,j,100,100)
      currentPlayer = "computer";
      setTimeout(computerTurn, 100); // Add a delay before the computer's turn
    }
  }
}

function computerTurn() {
  let i = floor(random(cols));
  let j = floor(random(rows));

  if (playerGrid[i][j] == 1) {
    console.log("Computer Hit!");
    playerGrid[i][j] = 2; // Mark as hit
    fill(255, 0, 0);
    rect(i, j, w * i, h * j);
  } else if (playerGrid[i][j] == 0) {
    console.log("Computer Miss!");
  }
  currentPlayer = "player"; // Switch back to the player's turn
}

function setEasy() {
  cols = 8
  rows = 8
  console.log("Difficulty: Easy")
}

function setRegular() {
  difficulty = 1
  console.log("Difficulty: Regular")
}
function setHard() {
  difficulty = 2
  cols = 13
  rows = 13
  console.log("Difficulty: Hard")
}

//grid generation and display>>>
function createGrid(cols, rows) {
  let grid = new Array(cols);
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0; // 0 represents empty cell
    }
  }
  return grid;
}



