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
let loss = true;
let option = 0;

/*----- cached element references -----*/

let table = document.getElementById("grid");
let row_count = table.rows.length;

let btn = document.getElementById('btn');

/*----- event listeners -----*/ 

document.addEventListener('keydown', direction);

/*----- functions -----*/
init();

function init () {
  var initial_colors  = [2, 4]; 
      for (var i = 0; i < 2; i++){
        
          var row = Math.floor(Math.random() * row_count);
          var col = Math.floor(Math.random() * row_count);
          // console.log("whats inside")
          // console.log(table.rows[row].cells[col].innerHTML)
          // while (table.rows[row].cells[col].innerHTML) {
          //     row = Math.floor(Math.random() * row_count);
          //     col = Math.floor(Math.random() * row_count);
          // }
       
          var number = initial_colors[Math.floor(Math.random() * 2)];
          table.rows[row].cells[col].style.background = COLORS_MAPPER[number];
          table.rows[row].cells[col].innerHTML = number;
      } 
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
  for (var i = 0; i < table.rows.length; i++) {
    var row = "";
    for( var j = 0; j < table.rows.length; j++){
      if (table.rows[row].cells[col].innerHTML){
        
      }
    }
  }
}


