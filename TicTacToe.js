// X => <i class="fas fa-times"></i>
//O => <i class="fas fa-circle-notch"></i>

//select all starting page tags
let startPage = document.querySelector("#startPage");
let choose = document.querySelectorAll(".choose");

//select all main page tags
let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

//select all winning tages
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");

//false => x turn
//true => y turn 
let changeTurn = null;

//select witch you are x or o
choose.forEach(i => {
    i.addEventListener("click", () => {
        if(i.id === "playerX"){
            changeTurn = false;
            showChange.style.left = '0px';
        }else{
            changeTurn = true;
            showChange.style.left = '160px';
        }
        startPage.style.display = "none";
        mainPage.style.display = "block";
    })
});

boxes.forEach( i =>{
    i.addEventListener("click", ()=>{
        //add x icon if changeTurn = false else add o icon
        if(changeTurn == false){
            i.innerHTML = '<i class="fas fa-times"></i>';
            i.id = "x";
            i.style.pointerEvents = "none";
            showChange.style.left = "160px";
            //change the changeTurn value false to true
            changeTurn = true;
        }else{
            i.innerHTML = '<i class="fas fa-circle-notch"></i>';
            i.id = "o";
            i.style.pointerEvents = "none";
            showChange.style.left = "0px";
            //change the changeTurn value true to false
            changeTurn = false;
        }
        winningFunc();
        drawFunc();
    })
})


// All posible winning combination
let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//chack who is winning
let winningFunc = () => {
    for(let i=0;i<=7;i++){
        let a = winningCombination[i];

        if(boxes[a[0]].id == "" || boxes[a[1]].id == "" || boxes[a[2]].id == ""){
            continue;
        }else if(boxes[a[0]].id == "x" && boxes[a[1]].id == "x" && boxes[a[2]].id == "x"){
            //adding winner name to inner text
            winnerName.innerText = "Player X win the game!";

            //show winner page and hide main page
            mainPage.style.display = "none";
            winner.style.display = "block";
        }else if(boxes[a[0]].id == "o" && boxes[a[1]].id == "o" && boxes[a[2]].id == "o"){
            //adding winner name to inner text
            winnerName.innerText = "Player O win the game!";

            //show winner page and hide main page
            mainPage.style.display = "none";
            winner.style.display = "block";
        }else{
            continue;
        }
    }
}

//chack if the score is draw
let drawFunc = ()=>{
    let tmp = 0;
    boxes.forEach((x)=>{
        if(x.id != "") tmp += 1;
    });
    if(tmp == 9){
        //adding draw name to inner text
        winnerName.innerText = "Draw!";

        //show draw page and hide main page
        mainPage.style.display = "none";
        winner.style.display = "block";
    }
}

//chack if flay again is clicked and if true restart the game
quit.addEventListener("click", ()=>{
    window.location.reload();
});