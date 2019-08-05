/*----- constants -----*/ 
const VALUE = {
    '0' : '#B63C58',
    '2' : '#D2691E',
    '4' : '#FF7F50',
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
let value = Object.keys(VALUE);

/*----- event listeners -----*/ 

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
    board.forEach(function(col, idx){
        arr[idx].style.background = VALUE[col];
    });  

    for (var i = 0; i < 1; i++){
        var randomCell =  arr[Math.floor(Math.random() * arr.length)] ;
        randomCell.textContent = 2; 
    }

    for (var i = 0; i < 1; i++){
        var randomCell =  arr[Math.floor(Math.random() * arr.length)] ;
        randomCell.textContent = 4; 
    }
}
