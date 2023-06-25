
function sps() {
    //taking inputs
       let userinput = parseInt(prompt("enter your choise(1 for rock ,2 for paper ,3for scissors)"))
       let compinput = Math.floor(Math.random() * 3) + 1;

    //setting name in input
       if (compinput == 1) {
           console.log("computer chooses rock ")

       }
       else if (compinput == 2) {
           console.log("computer chooses paper " )

       }
       else if (compinput == 3) {
           console.log("computer chooses scissors " )

       } else {
           console.log("computer chooses wrong turn ")

       }

       if (userinput == 1) {
           console.log("you choose rock ")
       }
       else if (userinput == 2) {
           console.log("you choose paper ")
       }
       else if (userinput == 3) {
           console.log("you choose scissors ")
       } else {
           console.log("wrong turn " )
       }

   //setting winning options

       if (userinput == compinput) {
           console.log("its draw")
       } else if (userinput == 1 && compinput == 3 || userinput == 2 && compinput == 1 || userinput == 3 && compinput == 2) {
           console.log("you win  ");
       } else {
           console.log("computer wins")

       }

   }sps()
