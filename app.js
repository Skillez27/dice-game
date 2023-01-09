// toglogchiin eeljiig hadgalah  huvisagch, 1r  toglogchiig 0, 2r toglogchiig 1 gej temdeglii

var activePlayer = 1;



// toglochdiin tsugluulsan onoog hadgalah huvisagch

var scores = [0, 0];



// toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch

var roundScore = 0;


// shoo ali talaar buusniig hadgalah huvisagch heregtei, 1-6 gesen utgiig  ene huvisagchid sanamsarguigeer uusgej  ogoh

var dice = Math.floor  (Math.random()*6) + 1;
// <div class="player-name" id="name-0">Player 1</div>
//<div class="player-score" id="score-0">43</div>

//window.document.querySelector('#score-0').textContent = dice;

//document.querySelector('#score-1').innerHTML = "<em>eyss</em>";




document.querySelector('.dice').style.display = 'none';
window.document.querySelector('#score-0').textContent = 0;
window.document.querySelector('#score-1').textContent = 0;
window.document.querySelector('#current-0').textContent = 0;
window.document.querySelector('#current-1').textContent = 0;

console.log("shoo ni : " + dice);




