function displayPlayerShips() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;

      if (playerGrid[i][j] == 1) {
        // Display player's ships
        fill(0, 0, 255); // Change color to blue for player's ships
        stroke(0);
        rect(x, y, w, h);
      }
    }
  }
}
function placeShips(grid) {
  for (let n = 0; n < ships; n++) {
    let x = floor(random(cols - shipSize + 1));
    let y = floor(random(rows - shipSize + 1));

    // Check if the cells are empty for the entire ship size
    let empty = true;
    for (let i = x; i < x + shipSize; i++) {
      if (grid[i][y] !== 0) {
        empty = false;
        break;
        //if grid is not empty set grid to 0
      }
    }

    // Place the ship if the cells are empty for the entire ship size
    if (empty || grid == playerGrid) {
      for (let i = x; i < x + shipSize; i++) {
        grid[i][y] = 1; // 1 represents a ship
      }
    } else {
      n--; // Retry placing the ship
    }
  }
}
function allShipsSunk(grid) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] == 1) {
        // If any ship parts remain
        return false; // Ships still remain
      }
    }
  }
  return true; // All ships have been sunk
}
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

function displayGrid(grid, player) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;

      if (player == "player") {
        if (grid[i][j] == 0) {
          // Display empty cells
          fill(200);
          stroke(0);
          rect(x, y, w, h);
        } else if (grid[i][j] == 1) {
          // Display player's ships
          fill(0, 0, 255); // Change color to blue for player's ships
          stroke(0);
          rect(x, y, w, h);
        } else if (grid[i][j] == 2) {
          // Display hits on player's ships;
          fill(255,157,10)
          rect(x, y, w, h);
        }
      } else {
        if (grid[i][j] == 0 || grid[i][j] == 1) {
          // Display hidden cells for the opponent's grid
          fill(200);
          stroke(0);
          rect(x, y, w, h);
        } else if (grid[i][j] == 2) {
          // Display hits on opponent's ships
          fill(255, 0, 0);
          noStroke();
          ellipse(x + w / 2, y + h / 2, w, h);
        }
      }
    }
  }

  if (player == "player") {
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Your Grid", width / 4, height - 20);
  } else {
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Computer's Grid", (3 * width) / 4, height - 20);
  }
}


function displayGrid(grid, player) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * h;

      if (player == "player") {
        if (grid[i][j] == 0) {
          // Display empty cells
          fill(200);
          stroke(0);
          rect(x, y, w, h);
        } else if (grid[i][j] == 1) {
          // Display player's ships
          fill(0, 0, 255); // Change color to blue for player's ships
          stroke(0);
          rect(x, y, w, h);
        } else if (grid[i][j] == 2) {
          // Display hits on player's ships;
          fill(255,157,10)
          rect(x, y, w, h);
        }
      } else {
        if (grid[i][j] == 0 || grid[i][j] == 1) {
          // Display hidden cells for the opponent's grid
          fill(200);
          stroke(0);
          rect(x, y, w, h);
        } else if (grid[i][j] == 2) {
          // Display hits on opponent's ships
          fill(255, 0, 0);
          noStroke();
          ellipse(x + w / 2, y + h / 2, w, h);
        }
      }
    }
  }
}
