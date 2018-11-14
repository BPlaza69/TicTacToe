
/*let player = 'x' || 'o';
let grid = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
const resetGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];*/

//resets grid to null
 let grid = [                //grid is a varriable pointing at an array
     [null, null, null],
     [null, null, null],
     [null, null, null]
   ];

const resetGrid = () => {
 grid = [                //grid is a varriable pointing at an array
   [null, null, null],
   [null, null, null],
   [null, null, null]
 ];
}

//takes 2 parameters some symbol "" and some location
function insertSymbol(symbol, x, y) {
 //assign symbol to the position of the two coordinates.
 grid[y][x] = symbol;
}

const drawGrid = () => {
  for (let row of grid) {
    console.log(row);
  }
  let el = document.createElement('div');
    document.body.appendChild(el);
};
