let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#userscore"); 
const computerscorepara = document.querySelector("#computerscore"); 

// har ek kaam ke liye function banana is called modular programming
const generatecompchoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);                                     // this function generates random numbers like 0.945.. or 0.5634.. between 0 and 1
    // so if we want to generate number between 0 and 2 (as we have index 0,1,2), then we multiply by 3
    //like this Math.random() * 3, if we want till 9 then we multiply by 10
    
    return options[randomidx];
}

const drawgame = () => {
    console.log("game is draw");
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#081b31";

}

const showwinner = (userwin, userchoice, computerchoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        //console.log("you win!");
        msg.innerText = `You Win! Your ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        computerscorepara.innerText = compscore;
        //console.log("you lose!");
        msg.innerText = `You Lose! ${computerchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    // generate computer choice
    const computerchoice = generatecompchoice();
    console.log("computer choice = ", computerchoice);

    if(userchoice === computerchoice)
    {
        //draw
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock")
        {
            //paper, scissors
            userwin = computerchoice === "paper"?false:true;
        }
        else if(userchoice === "paper")
        {
            //rock, scissors
            userwin = computerchoice === "rock"?true:false;
        }
        else{
            // user is scissors, and computer is paper, rock
            userwin = computerchoice === "paper"?true:false;
        }
        showwinner(userwin, userchoice, computerchoice);
    }
}

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userchoiceid = choice.getAttribute("id"); 
        //console.log("choice was clicked", userchoiceid); 
        playgame(userchoiceid);
    })
})