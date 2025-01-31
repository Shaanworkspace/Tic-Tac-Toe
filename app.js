// Selecting all buttons with the class 'box'
let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".resetButton");


resetButton.addEventListener("click",()=>{
    let newButton = document.querySelector("#reset-btn1");
    let msgeContainer =document.querySelector(".msg-container");
    let message =document.querySelector("#msg")
    // Array in which they will be won

    let p1 = prompt("Enter the 'X' Player: ");
    let p2 = prompt("Enter the name of 'O' Player");

    let wonArray = [
        [0, 1, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let turn0 = true;
    let gameActive = true; // Track if the game is active

    boxes.forEach((box) => {
        box.addEventListener("click", (e) => {
            if (gameActive) {
                if (turn0) {
                    box.textContent = "X";
                    
                    turn0 = false;
                } else {
                    box.textContent = "O";
                    turn0 = true;
                }

                box.disabled = true;
                checkWinner();
            }
        });
    });

    const checkWinner = ()=>{
        for(let ch of wonArray){
            let a = boxes[ch[0]].innerHTML;
            let b = boxes[ch[1]].innerHTML;
            let c = boxes[ch[2]].innerHTML;
            if(a !="" && b!="" && c!=""){
                if(a===b && b===c){
                    if(a==="X"){
                        console.log("winnner is : ",p1);
                        showWinner(p1);
                    }
                    
                else{
                    console.log("winnner is : ",p2)
                    showWinner(p2);
                }
                    
                }   
            }
        }
    };


    const showWinner = (winnerTeam) =>{
        message.innerHTML='Congratulations '+ winnerTeam;
        msgeContainer.classList.remove("hide");
        resetButton.classList.add("hide");
        disableRestBox(); //to disable the rest of buttons
    }

    const disableRestBox = () =>{
        for(let box of boxes){
            box.disabled=true;
        }
    }

    const reseter =()=>{
        turn0=true;
        for(let box of boxes){
            box.innerHTML="";
            box.disabled=false;
        }
        msgeContainer.classList.add("hide");
        resetButton.classList.remove("hide");
    }

    newButton.addEventListener("click",reseter);

});