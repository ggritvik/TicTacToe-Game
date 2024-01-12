var btns = document.querySelectorAll(".btn");
var resetBtn = document.querySelector(".reset-btn");
var newGameBtn = document.querySelector(".newgame-btn")
var winMsg = document.querySelector("#win-msg")
var msgContainer = document.querySelector(".msg-container")
var board = document.querySelector(".container")

var turnO = true;

const winPattern = [
    [0,1,2],[0,4,8],[0,3,6],
    [1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],
    [6,7,8]    
]
function disableBoxes(){
    for(btn of btns){
    btn.disabled = true;
    }
}
function enableBoxes(){
    for(btn of btns){
    btn.disabled = false;
    btn.innerText ="";
    }
}
function showWinner(winner){
    winMsg.innerText = "Winner is "+winner;
    msgContainer.classList.remove("hide")
    disableBoxes();
    board.classList.add("hide")
    resetBtn.classList.add("hide")

}
/*function Draw(){
    for(var btn of btns){
        if (btns.innerHTML = " "){
            return false;
        } 
        else{
            winMsg.innerText = "Draw";
            msgContainer.setAttribute("class","msg-container")
        }   
    }

}*/

function resetGame(){
    board.classList.remove("hide")
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")
    resetBtn.classList.remove("hide")

}

function checkWinner(){
    for(var x of winPattern){
        var val0 = btns[x[0]].innerText
        var val1 = btns[x[1]].innerText
        var val2 = btns[x[2]].innerText

        if(val0 != "" && val1 != "" && val2 != ""){
            if(val0 === val1 && val1 === val2){
            console.log("Winner"+ val0)
            showWinner(val0);
            }
        }
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        console.log("Button clicked")
        if(turnO){
            btn.innerText = "O"
            turnO = false
        }
        
        else{
            btn.innerText = "X"
            turnO = true
        }
        btn.disabled = true;

        checkWinner();
    })
})  

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);