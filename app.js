// toglogchiin eeljiig hadgalah  huvisagch, 1r  toglogchiig 0, 2r toglogchiig 1 gej temdeglii

var activePlayer = 0;



// toglochdiin tsugluulsan onoog hadgalah huvisagch

var scores = [0, 0];



// toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch

var roundScore = 0;


// shoo ali talaar buusniig hadgalah huvisagch heregtei, 1-6 gesen utgiig  ene huvisagchid sanamsarguigeer uusgej  ogoh

var diceNumber = Math.floor(Math.random()*6) + 1;
// <div class="player-name" id="name-0">Player 1</div>
//<div class="player-score" id="score-0">43</div>

//window.document.querySelector('#score-0').textContent = dice;

//document.querySelector('#score-1').innerHTML = "<em>eyss</em>";



window.document.getElementById("score-0").textContent = '0';
window.document.getElementById("score-1").textContent = '0';
window.document.getElementById("current-0").textContent = '0';
window.document.getElementById("current-1").textContent = '0';

var diceDom = document.querySelector('.dice');
diceDom.style.display = 'none';
// shoog shiddeg event listernet
document.querySelector(".btn-roll").addEventListener("click", function (){      // sanansargui 1-6 hurtel shoog hayah heseg

    var diceNumber = Math.floor(Math.random()*6) + 1;
   
    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display = "block";
    
    // buusan shoog hargalzah zurguudtai holboh
    diceDom.src = "dice-" + diceNumber + ".png";
    
    //BUUSAN SHOONII TOO 1EES YLGAATAI BOL IDEVHTEI TOGLOJ BGA HUNII ONOOG NEMNE
    if(diceNumber !==1){
        //1EES ylgaatai too buuh ued
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer ).textContent = roundScore;

    }
    else{
        //1 buuh ued idevhtei toglogchiig solih
        
        roundScore = 0 ;
    
        //1 buuh ued toglogchiin tsugluulsan onoog 0 bolgoh
        document.getElementById("current-" + activePlayer ).textContent = 0;


        //1 buuh ued idevhtei toglogchiin eeljiig solih
        //  tovchlon bichsen code  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        if ( activePlayer === 0){
            activePlayer = 1;
        }
        else{
            activePlayer = 0;
        }
        //ulaan tsegiig shiljuuleh 
        document.querySelector(".player-0-panel").classList.toggle("active");

        document.querySelector(".player-1-panel").classList.toggle("active");
      
        diceDom.style.display = "none";
    } 
    // HOLD towchnii eventlisterner

});
 // HOLD towchnii eventlisterner
document.querySelector(".btn-hold").addEventListener("click", function() {
scores[activePlayer] = scores[activePlayer]  + roundScore;
document.getElementById("score-" + activePlayer).textContent = roundScore[activePlayer];

});





