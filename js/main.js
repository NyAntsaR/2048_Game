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
let board;
let winner;
let loss = false;
let option = 0;
/*----- cached element references -----*/

let arr = document.querySelectorAll('div');

/*----- event listeners -----*/ 
document.addEventListener('keydown', direction);

/*----- functions -----*/
init ();

function init () {
    board = [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
    ];

    winner = null;

    render();
}

function render () {   
        var initial_colors  = [2, 4];
        for (var i = 0; i < 2; i++){
            var index = Math.floor(Math.random() * arr.length)
            while (arr[index].textContent) {
                index = Math.floor(Math.random() * arr.length)
            }
            var color = initial_colors[Math.floor(Math.random() * 2)]
            arr[index].style.background = COLORS_MAPPER[color];
            arr[index].textContent = color;
        }   
    };

     
//---------- EVENT KEYBOARD ----------
function  direction(event){
    if(!loss) {
        if(event.keyCode === 38 || event.keyCode === 87){
            moveUp();
        } else if(event.keyCode === 38 || event.keyCode === 87){
            moveRight;
        } else if (event.keyCode === 38 || event.keyCode === 87){
            moveDown();
        } else if (event.keyCode === 38 || event.keyCode === 87){
            moveLeft();
        }
    }
}

//---------- MOVE -------------------
//Move up
//Move down
//Move right
//Move left


