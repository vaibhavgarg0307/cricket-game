let scr=localStorage.getItem('score');
let  score
resetscore(scr);
function resetscore(scr){  
 score= scr ? JSON.parse(scr):{
    win:0, 
    tie : 0,
    lost:0,
};
score.displayscore = function(){
    return ` No of mathces Won:${score.win}
    No of matches lost: ${score.lost}
    No of matches tied: ${score.tie}`
};

showresult();
}

    function computer(){
        let computerchoice;
    let randomnumber= Math.random()*3;
    if(randomnumber>1 && randomnumber<2){
         computerchoice='bat'; 
    }
   else  if(randomnumber>0 && randomnumber<1){
         computerchoice='stump';   
    }
    else{
         computerchoice='ball';
    }
    return computerchoice;
    }

    function gameresult(computerchoice,userchoice){
        let result;
    if(computerchoice==='ball' && userchoice==='bat'){
        result='user won';
        score.win++;
    }
    else if(computerchoice==='bat'&& userchoice==='ball'){
        result='computer won';
        score.lost++;
    }
    else if(computerchoice==='stump'&& userchoice==='ball'){
        result='user won';
        score.win++;
    }
    else if(computerchoice==='stump'&& userchoice==='bat'){
        result='computer won';
        score.lost++;
    }
    else if(computerchoice==='ball' && userchoice==='stump'){
        result='computer won';
        score.lost++;
    }
    else if(computerchoice==='bat'&& userchoice==='stump'){
        result='user won';
        score.win++;
    }
    else if(computerchoice==userchoice)
    {
        result='tie';
        score.tie++;
    }
    return result;
    }

    function showresult(computerchoice,userchoice,result){
localStorage.setItem('score', JSON.stringify(score));
document.querySelector('#user').innerText=userchoice!==undefined?`User choice is  ${userchoice}`:'';
document.querySelector('#computer').innerText= computerchoice!==undefined?`computer choice is ${computerchoice} `:'';
document.querySelector('#result').innerText=result?`result is  ${result}`:'';
document.querySelector('#score').innerText= score.displayscore();
        
    }