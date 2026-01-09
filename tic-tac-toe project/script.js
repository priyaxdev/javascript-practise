console.log("hello js");
let cells= document.querySelectorAll(".cell");
let turn0=true;
let count=0;
let winMsg=document.querySelector("#win-status");
let reset=document.querySelector(".rstgame");

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const enableBoxes = () =>{
    for (let cell of cells){
        cell.disabled=false;
        cell.innerHTML="";
    }
}

cells.forEach((cell) =>{
    cell.addEventListener("click", () => {
        // if(turn0){
        //     cell.innerHTML="O";
        //     turn0=true;
        
        // }else{
        //     cell.innerHTML="X";
        //     turn0=false;
        // }
        // cell.disabled=false;
        if(turn0){
    cell.innerHTML="O";
    turn0=false;  // ← Changed to false
}else{
    cell.innerHTML="X";
    turn0=true;   // ← Changed to true
}
cell.disabled=true;  // ← Changed to true


        count++;
        checkWinner();

        if(count==9 && !winMsg.innerText){
            winnerMsg.classList.remove("hide");
            winnerMsg.innerText = "😐 It's a Draw!";
        }
    }
)

})

const checkWinner = () => {
    for(let pattern of winPattern){
        p1=cells[pattern[0]].innerText;
        p2=cells[pattern[1]].innerText;
        p3=cells[pattern[2]].innerText;
        if(p1!=="" && p1===p2 && p2===p3){
            winMsg.classList.remove("hide");
            winMsg.innerText=`🎉WINNER ${p1}`;
            cells.forEach((cell) => (cell.disabled=true));
        }
    }
}

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    winnerMsg.classList.add("hide");
    winnerMsg.innerText = "";
}

reset.addEventListener("click",resetGame);