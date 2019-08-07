/*----- constants -----*/ 
const COLORS_MAPPER = {
    '0' : '#B63C58',
    '2' : '#D2691E',
    '4' : '#40ff00',
    '8' : '#ffbf00',
    '16': '#bfff00',
    '32' : '#40ff00',
    '64' : '#00bfff',
    '128' : '581222',
    '256' : '#122958',
    '512' : '#515812',
    '1024' : '#121758',
    '2048' : '#125839'
};

/*----- app's state (variables) -----*/

let winner;
let score = 0;
let loss = false;

/*----- cached element references -----*/

let table = document.getElementById("grid");
let row_count = table.rows.length;

let btn = document.getElementById('btn');

/*----- event listeners -----*/ 

document.addEventListener('keydown', direction);
document.getElementById('btn').addEventListener('click', init);
let scoreLabel = document.getElementById('score');

/*----- functions -----*/
init();

function init () {
  var initial_number  = [2, 4]; 
      for (var i = 0; i < 2; i++){
        
          var row = Math.floor(Math.random() * row_count);
          var col = Math.floor(Math.random() * row_count);
          // console.log("whats inside")
          //console.log(table.rows[row].cells[col].innerHTML)
          // while (table.rows[row].cells[col].innerHTML) {
          //     row = Math.floor(Math.random() * row_count);
          //     col = Math.floor(Math.random() * row_count);
          //}
       
          var number = initial_number[Math.floor(Math.random() * 2)];
          table.rows[row].cells[col].innerHTML = number;
          table.rows[row].cells[col].style.background = COLORS_MAPPER[number];
          
      } 
};

//---------- EVENT KEYBOARD ----------

function  direction(event){
    if(!loss){
        if(event.keyCode === 38){
            moveUp();
        } else if (event.keyCode === 40){
            moveDown();
        }else if(event.keyCode === 39){
          moveRight();
        } else if (event.keyCode === 37){
            moveLeft();
        }
    }
    scoreLabel.innerHTML = 'Score: ' + score;
}

//---------- MOVE -------------------

//----------------UP-----------------------
//Use FILO
function moveUp() {
    var row;
    var listContainer;
    
    for (col=0; col<4; col++) {
        row = 3;
        listContainer = []; //hold value 

        while (row >= 0) { //start from row 3
            var currElem = getCell(row, col);
            if (!isEmpty(row, col)) {
                if (listContainer.length > 0) {
                    //store the element
                    var lastElement = listContainer[listContainer.length-1];
                    //verify if the last element is equal to the next element && verify if it's final or not. (final = already combined)
                    if (lastElement[0] == currElem && lastElement[1] == false) {
                        //take the last one and show it with new value * 2
                        listContainer.push([listContainer.pop()[0] * 2, true]);
                        score += lastElement;
                    } else {
                        listContainer.push([currElem, false]);
                    }

                } else {
                    listContainer.push([currElem, false]);  //set last element in the container with indication if not a final value i.e cannot add anymore
                }
            }
            row--;
        }
        
        for (i = 0; i < 4; i++) {
            if (listContainer.length > 0) {
                var number = listContainer.pop()[0];
                setCell(i, col, number);
                setCellColor(i, col, COLORS_MAPPER[number]);
            }
            else {
                setCell(i, col, "");
                setCellColor(i, col, "");
            }
        }
 
    }
    addTwo();
}
//----------CHECK-UP--------------------
//Check if cell is empty
function isEmpty(row, col) {
    return getCell(row, col) == "";
}

//Get the cell from the html table
function getCell(row, col) {
    return table.rows[row].cells[col].innerHTML;
}

//Set the cell to new element
function setCell(row, col, elm) {
    table.rows[row].cells[col].innerHTML = elm;
}

//Add background to cell
function setCellColor(row, col, color) {
    table.rows[row].cells[col].style.background = color
}

//Add new cell with 2
function addTwo(){
    for (var i = 0; i < 2; i++){
        if (isEmpty(row, col)){
            var row = Math.floor(Math.random() * row_count);
            var col = Math.floor(Math.random() * row_count);

            var number = 2;
            table.rows[row].cells[col].innerHTML = number;
            table.rows[row].cells[col].style.background = COLORS_MAPPER[number];
        }    
    }
}


//------------------------LEFT--------------------------

function moveLeft() {
    var row;
    var listContainer;
    
    for (col=0; col<4; col++) {
        row = 0;
        listContainer = []; //hold value 

        while (row <= 3) { //start from row 0 going doing to index 3
            var currElem = getCellLeft(row, col);

            if (!isEmptyLeft(row, col)) {
                if (listContainer.length > 0) {
                    //store the element
                    var lastElement = listContainer[listContainer.length-1];
                    console.log(lastElement);
                    //verify if the last element is equal to the next element && verify if it's final or not. (final = already combined)
                    if (lastElement[0] == currElem && lastElement[1] == false) {
                        //take the last one and show it with new value * 2
                        listContainer.push([listContainer.pop()[0] * 2, true]);

                    } else {
                        listContainer.push([currElem, false]);
                    }

                } else {
                    listContainer.push([currElem, false]);  //set last element in the container with indication if not a final value i.e cannot add anymore
                }
            }
            row++;
        }

        //container
        for (i = 0; i < 4; i++) {
            if (listContainer.length > 0) {
                var number = listContainer.pop()[0];
                setCellLeft(i, col, number);
                setCellColorLeft(i, col, COLORS_MAPPER[number]);
            }
            else {
                setCellLeft(i, col, "");
                setCellColorLeft(i, col, "");
            }
        }
 
    }
}

function isEmptyLeft(col, row) {
    return getCellLeft(col, row) == "";
}

//Get the cell from the html table
function getCellLeft(col, row) {
    return table.rows[row].cells[col].innerHTML;
}

//Set the cell to new element
function setCellLeft(col, row, elm) {
    table.rows[row].cells[col].innerHTML = elm;
}

//Add background to cell
function setCellColorLeft(col, row, color) {
    table.rows[row].cells[col].style.background = color
}

//Add new 2
// function addTwo(){

// }

//---------------------RIGHT----------------------------

// function moveRight() {
//     var row;
//     var listContainer;
    
//     for (col=0; col<4; col++) {
//         row = 0;
//         listContainer = []; //hold value 

//         while (row <= 3) { //start from row 3
//             var currElem = getCellRight(col, row);
//             if (!isEmptyRight(col, row)) {
//                 if (listContainer.length > 0) {
//                     //store the element
//                     var lastElement = listContainer[listContainer.length-1];
//                     //verify if the last element is equal to the next element && verify if it's final or not. (final = already combined)
//                     if (lastElement[0] == currElem && lastElement[1] == false) {
//                         //take the last one and show it with new value * 2
//                         listContainer.push([listContainer.pop()[0] * 2, true]);
//                     } else {
//                         listContainer.push([currElem, false]);
//                     }

//                 } else {
//                     listContainer.push([currElem, false]);  //set last element in the container with indication if not a final value i.e cannot add anymore
//                 }
//             }
//             row++;
//         }

//         for (i = 0; i < 4; i++) {
//             if (listContainer.length > 0) {
//                 var number = listContainer.pop()[0];
//                 setCellRight(i, col, number);
//                 setCellColorRight(i, col, COLORS_MAPPER[number]);
//             }
//             else {
//                 setCellRight(i, col, "");
//                 setCellColorRight(i, col, "");
//             }
//         }
 
//     }
// }

// //Check if cell is empty
// function isEmptyRight(row, col) {
//     return getCellRight(row, col) == "";
// }

// //Get the cell from the html table
// function getCellRight(row, col) {
//     return table.rows[row].cells[col].innerHTML;
// }

// //Set the cell to new element
// function setCellRight(row, col, elm) {
//     table.rows[row].cells[col].innerHTML = elm;
// }

// //Add background to cell
// function setCellColorRight(row, col, color) {
//     table.rows[row].cells[col].style.background = color
// }

// //---------------DOWN---------------------------------

// function moveRight() {
//     var row;
//     var listContainer;
    
//     for (col=0; col<4; col++) {
//         row = 0;
//         listContainer = []; //hold value 

//         while (row <= 3) { //start from row 3
//             var currElem = getCell(col, row);
//             if (!isEmpty(col, row)) {
//                 if (listContainer.length > 0) {
//                     //store the element
//                     var lastElement = listContainer[listContainer.length-1];
//                     //verify if the last element is equal to the next element && verify if it's final or not. (final = already combined)
//                     if (lastElement[0] == currElem && lastElement[1] == false) {
//                         //take the last one and show it with new value * 2
//                         listContainer.push([listContainer.pop()[0] * 2, true]);
//                     } else {
//                         listContainer.push([currElem, false]);
//                     }

//                 } else {
//                     listContainer.push([currElem, false]);  //set last element in the container with indication if not a final value i.e cannot add anymore
//                 }
//             }
//             row++;
//         }

//         for (i = 0; i < 4; i++) {
//             if (listContainer.length > 0) {
//                 var number = listContainer.pop()[0];
//                 setCellDown(i, col, number);
//                 setCellColorDown(i, col, COLORS_MAPPER[number]);
//             }
//             else {
//                 setCellDown(i, col, "");
//                 setCellColorDown(i, col, "");
//             }
//         }
 
//     }
// }

// //Check if cell is empty
// function isEmptyDown(col, row) {
//     return getCellDown(col, row) == "";
// }

// //Get the cell from the html table
// function getCellDOwn(col, row) {
//     return table.rows[row].cells[col].innerHTML;
// }

// //Set the cell to new element
// function setCellDown(col, row, elm) {
//     table.rows[row].cells[col].innerHTML = elm;
// }

// //Add background to cell
// function setCellColorDown(c, col, color) {
//     table.rows[row].cells[col].style.background = color
// }

