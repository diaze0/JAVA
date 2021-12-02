  // random value generated
    var y = Math.floor(Math.random() * 100);
      
    // counting the number of guesses
    // made for correct Guess
    var guess = 10;
      
    document.getElementById("submitguess").onclick = function(){
      
   // number guessed by user     
   var x = document.getElementById("guessField").value;
   // add a guess
    guess--
   if (guess>0){


       if(x == y){
        if (guess>=7){
            alert("you are genuis")
        }  else {
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                    + guess + " GUESS ");
        } 
       }
       else if(x > y) /* if guessed number is greater
                       than actual number*/ 
       {    
           alert("OOPS SORRY!! TRY A SMALLER NUMBER\n "+"you have "+guess+" guesses");
       }
       else
       {
           alert("OOPS SORRY!! TRY A GREATER NUMBER\n "+"you have "+guess+" guesses")
       }
   }

   else {
       alert("GAME OVER !!")
   }
}
