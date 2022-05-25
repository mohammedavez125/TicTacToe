console.log("tic tac toe");
// audio
let bgMusic = document.getElementById('bgMusic');
let turnMusic = document.getElementById('turn');
let gameover = document.getElementById('play');

let reset = document.getElementById('btn');
let turn = "X";
let isgameover = false;

// fn to change turn
const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}
// fn to check for win
const checkWin=()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText===boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            gameover.play();
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won"
            isgameover = true ;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "42vw";
        }
    })
}

// game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        bgMusic.play();
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    }
})
})
// reeset on click
reset.addEventListener('click',(e)=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element=>{
        element.innerText = ""
    });
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0";
    turn = "X";
    isgameover= false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})