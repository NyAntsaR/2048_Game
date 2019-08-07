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
let score;
let loss = true;

/*----- cached element references -----*/

let table = document.getElementById("grid");
let row_count = table.rows.length;

let btn = document.getElementById('btn');

/*----- event listeners -----*/ 

document.addEventListener('keydown', direction);

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
    // setCell(0, 1, 2)
    // setCellColor(0, 1, COLORS_MAPPER[2])
    // setCell(3, 1, 2)
    // setCellColor(3, 1, COLORS_MAPPER[2])
};

//---------- EVENT KEYBOARD ----------

function  direction(event){
  if(event.keyCode === 38){
      moveUp();
  } else if(event.keyCode === 39){
      moveRight();
  } else if (event.keyCode === 40){
      moveDown();
  } else if (event.keyCode === 37){
      moveLeft();
  }
}

//---------- MOVE -------------------
function moveUp() {
    var row;
    var listContainer
    for (col=0; col<4; col++) {
        row = 3
        listContainer = [] //hold value 
        while (row >= 0) {
            var currElem = getCell(row, col)
            if (!isEmpty(row, col)) {
                if (listContainer.length > 0) {
                    // console.log("Not Empty stack")
                    // console.log(listContainer)
                    lastElement = listContainer[listContainer.length-1]
                    if (lastElement[0] == currElem && lastElement[1] == false) {
                        
                        listContainer.push([listContainer.pop()[0] * 2, true])
                    } else {
                        listContainer.push([currElem, false])
                    }
                } else {
                    listContainer.push([currElem, false])  //set last element in the container with indication if not a final value i.e cannot add anymore
                }
            }
            row--
        }
        console.log("Hello stack")
        console.log(listContainer)
        for (i = 0; i < 4; i++) {
            if (listContainer.length > 0) {
                number = listContainer.pop()[0]
                setCell(i, col, number)
                setCellColor(i, col, COLORS_MAPPER[number])
            }
            else {
                setCell(i, col, "")
                setCellColor(i, col, "")
            }
        }

    }
    // var i, j, cell

    // // for(j = 0; j < 4; j++) {
    //       for(i = 0; i < 4; i++) {
    //         if(!isEmpty) { //if table contain a value
    //             cell = i; 
    //             while (cell > 0) {
                
    //             if(!table.rows[cell - 1].cells[j].innerHTML) { //look backwards if the table contain number
    //                 table.rows[cell - 1].cells[j].innerHTML = table.cells[cell][j].innerHTML;
    //                 table.rows[cell].cells[j].innerHTML = 0; // set the previous cell to zero
    //                 cell--;

    //             } 
                
    //             else if (table.rows[cell].cells[j].innerHTML == table.rows[cell - 1].cells[j].innerHTML) { //check if it's the same number
    //                 table.rows[cell - 1].cells[j].innerHTML *= 2; //multiply the value by two
    //                 score +=  table.rows[row - 1].cells[j].innerHTML;
    //                 table.rows[cell].cells[j].innerHTML = 0; // set the previous cell to zero
    //                 break;
    //             } 
                
    //             else {
    //                 break; 
    //             }
    //           }
    //         }
    //     }
    // }
}

function isEmpty(row, col) {
    return getCell(row, col) == ""
}

function getCell(row, col) {
    return table.rows[row].cells[col].innerHTML
}

function setCell(row, col, elm) {
    table.rows[row].cells[col].innerHTML = elm
}

function setCellColor(row, col, color) {
    table.rows[row].cells[col].style.background = color
}


