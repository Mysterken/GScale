// Set every variable for the game
var GameOn = true;
var GameGrid = createGrid();
var turn = 1;

// Fill grid automagically because i'm lazy to manually do it
function createGrid() {
    let grid = [];
    for (i = 0; i < 7; i++) {
        grid.push([]);
        for (j = 0; j < 6; j++) {
            grid[i][j] = "N";
        }
    }
    return grid
}

// Return "Y" or "R" based on turn number
function playerTurn(turn) {
    return (turn % 2 === 0) ? "Jaune" : "Rouge";
}

function horizontalWin(grid, col) {
    for (i=0; i < 4; i++) { 
        
        let [a, b, c, d] = [
            grid[i][col],
            grid[i+1][col],
            grid[i+2][col],
            grid[i+3][col]
        ]

        if (a == b && a == c && a == d && a != "N") return true;
    }
}

function verticalWin(grid, row) {
    for (i=0; i < 3 ; i++) {
        
        let [a, b, c, d] = [
            grid[row][i],
            grid[row][i+1],
            grid[row][i+2],
            grid[row][i+3]
        ]
        
        if (a == b && a == c && a == d && a != "N") return true;
    }
}

// Check for diagonal win, "up" arg = (x+, y+) else (x+, y-)
function diagonalsWin(grid, row, col, up) {
    for (x=row-3; x < 4; x++) {

        if (x < 0) continue;

        for ((up)?y=col-3:y=col+3; (up)?y<3:y>2; (up)?y+=1:y-=1) {

            if (y < 0) continue;

            let [a, b, c, d] = [
                grid[x][y],
                grid[x+1][(up)?y+1:y-1],
                grid[x+2][(up)?y+2:y-2],
                grid[x+3][(up)?y+3:y-3]
            ]

            if (a == b && a == c && a == d && a != "N") return true;
        }
    }
}

// Place disk above other on the grid, if impossible return false
function placeDisk(grid, x) {
    
    let i = 0;
    while (grid[x][i] != "N") {
        i += 1;
        if (i == 6) return false;
    }
    return [x, i]
}

function play(cell_pos) {

    if (!GameOn) return;

    let diskColor = (playerTurn(turn)==="Jaune")?"yellow":"red";

    let pcd = placeDisk(GameGrid, cell_pos);
    if (!pcd) return;
    
    let pos = pcd[0] + pcd[1]*7;
    let cell = document.getElementById("c"+pos);
    cell.style.backgroundColor = diskColor;

    GameGrid[pcd[0]][pcd[1]] = diskColor;
    turn += 1;
    document.getElementById("turn").innerHTML = "Tour de "+playerTurn(turn);
    document.getElementById("circle").style.backgroundColor = (playerTurn(turn)==="Jaune")?"yellow":"red";

    if (horizontalWin(GameGrid, pcd[1]) ||
        verticalWin(GameGrid, pcd[0]) ||
        diagonalsWin(GameGrid, pcd[0], pcd[1], true) ||
        diagonalsWin(GameGrid, pcd[0], pcd[1], false)
        ) {
            document.getElementById("turn").style.fontSize = "6vmin";
            document.getElementById("turn").style.margin = "2% 5%";
            document.getElementById("turn").innerHTML = playerTurn(turn-1)+" gagne en "+(turn-1)+" tours!";
            document.getElementById("circle").style.display = "none";
            GameOn = false;
    } else if (turn == 43) {
        document.getElementById("turn").style.fontSize = "10vmin";
        document.getElementById("turn").innerHTML = "C'est une égalité.";
        document.getElementById("circle").style.display = "none";
        GameOn = false;
    }
}

// Reset the board and the game
function reset() {
    
    GameOn = true;
    GameGrid = createGrid();
    turn = 1;

    for (i=0; i<42; i++) {
        let cell = document.getElementById("c"+i);
        cell.style.backgroundColor = "rgb(218, 218, 218)";
    }
    document.getElementById("turn").style.fontSize = "10vmin";
    document.getElementById("turn").style.margin = "0 2%";
    document.getElementById("turn").innerHTML = "Tour de Rouge";
    document.getElementById("circle").style.display = 'initial';
    document.getElementById("circle").style.backgroundColor = 'red';
}