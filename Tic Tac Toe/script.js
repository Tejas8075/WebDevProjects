// Create winning condition array ☑
// input x and o in boxes ☑
// change turn text and and change the turn for x and o ☑ 
// display who won
// reset the button ☑
// disable the box once inputted ☑
console.log("Hello World");
//Variables
let changeTurn = document.querySelector("#changeTurn");
let boxes = document.querySelectorAll(".box");
let winContext = document.querySelector(".win");
let resetBtn = document.querySelector(".resetbtn");
let container = document.querySelector(".conatiner");
let flag = 0;

winContext.style.visibility = "hidden";

let turn = "X";
changeTurn.innerText = `Player ${turn}'s turn`;
let count = 0;
let gameFinished = false;
//Winning Conditions
let winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let newArr = Array.from(boxes);
newArr.forEach((element, index) => {
    // console.log(element, index);
    element.addEventListener('click', (hey) => {
        if (element.innerText === "") {
            element.innerText = turn;
            if (turn === "X") {
                turn = "O";
            }
            else {
                turn = "X";
            }
            changeTurn.innerText = `Player ${turn}'s turn`;
            count++;
            checkWinner();
            if (count === 9 && !gameFinished) {
                checkTie();
                disable();
            }
            
            // element.removeEventListener("click", (hey), false);
        }
        // element.innerText = turn;
        // turn = (turn === "X" ? "O":"X");
    })
})

let disable = ()=>{
    // newArr.forEach(box => box.onclick = null);
    boxes.innerText = disable;
}

let reset = resetBtn.addEventListener('click', () => {
    turn = "X";
    changeTurn.innerText = `Player ${turn}'s turn`;
    winContext.style.visibility = "hidden";
    newArr.forEach(element => {
        element.innerText = "";
    })
    gameFinished = false;
})

let checkWinner = () => {
    for (let pattern of winArr) {
        // console.log(pattern);
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(newArr[pattern[0]].innerText, newArr[pattern[1]].innerText, newArr[pattern[2]].innerText);
        pos1Val = newArr[pattern[0]].innerText;
        pos2Val = newArr[pattern[1]].innerText;
        pos3Val = newArr[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner");
                gameFinished = true;
                winContext.style.visibility = "visible";
                winContext.innerText = `Player ${pos1Val} has won`;
                // newArr.forEach(box => box.removeEventListener('click'));
                disable();
            }
        }

    }
}

let checkTie = () => {
    // let isWinner = checkWinner();
    if (!gameFinished) {
        console.log("It's's a Tie");
        gameFinished = true;
        winContext.style.visibility = "visible";
        winContext.innerText = `It's a Tie`;
        // newArr.forEach(box => box.removeEventListener('click'));
        disable();
        return;
    }  
}

