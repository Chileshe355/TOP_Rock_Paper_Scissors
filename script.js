//function to randomly generate a play from the computer  and covert to upper case 

function compPlay(){
  let play='' ; 
  let num= Math.random()*100;
    console.log(num);

  if(num<=30){
      play='Rock';
  }
  else if((num>30)&&(num<=60)){
      play='Paper';
  }
  else{
      play='Scissors'
  }
  console.log(play);
  return play.toUpperCase();
}
//accept info form user and covert to upper case 
function playerPlay(){
    let select=prompt('rock paper or scissors');
    console.log(select);
    return select.toUpperCase();
}


// function for the calculation of the game

function playRound(playerPlay,compPlay){
    let result=';'
    if(playerPlay==='ROCK'){
        switch (compPlay) {
            case 'SCISSORS': result= `you win! ${playerPlay} beats ${compPlay}`;
            break;
            
            case 'ROCK': result=`draw`;
            break;

            case 'PAPER':result=`you lose! ${compPlay} beats ${playerPlay}`;
            break;
        }   
    }
    else if(playerPlay==='PAPER'){
        switch (compPlay) {
            case 'ROCK': result= `you win! ${playerPlay} beats ${compPlay}`;
            break;
            
            case 'PAPER': result=`draw`;
            break;

            case 'SCISSORS':result=`you lose! ${compPlay} beats ${playerPlay}`;
            break;
        }
    }
    else {
        switch (compPlay) {
            case 'PAPER': result= `you win! ${playerPlay} beats ${compPlay}`;
            break;
            
            case 'SCISSORS': result=`draw`;
            break;

            case 'ROCK':result=`you lose! ${compPlay} beats ${playerPlay}`;
            break;
        }
    }
    console.log(result);
    return result;
}


// function to run the game a 5 times 

let game=()=>{
    
    
    for(let i=0;i<5;i++){
        //assigns the value of the of the functions playerPlay() and compPlay() to variables with global visibility  
        let playerChoice=playerPlay();
        let computerChoice=compPlay();
        playRound(playerChoice,computerChoice);
    }
}

game();





