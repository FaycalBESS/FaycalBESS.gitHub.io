let playerName = "Player1";

function start() {
    playerName = prompt("Saisis ton nom pour commencer");
    playerGreetings.style.display = 'none';
    playerGreetings.style.textAlign = 'center';
    ordiGreetings.style.display = 'none';
    ordiGreetings.style.textAlign = 'center';
    document.getElementById("player2").innerHTML = playerName;
    document.getElementById('plScore').innerHTML = playerName + '\'s Score : 00';
    startup();
    return playerName;
}
//les Event.listenrs 
//window.addEventListener("load", startup, false);

function startup() {
    let rock = document.getElementById('icn_rock');
    let paper = document.getElementById('icn_paper');
    let scisors = document.getElementById('icn_scisors');
    rock.addEventListener("click", donne1, false);
    paper.addEventListener("click", donne2, false);
    scisors.addEventListener("click", donne3, false);
};
let playerValue;

function gamerDonne1() {
    playerValue = 'rock';
    gamer_rock.style.display = 'block';
    gamer_paper.style.display = 'none';
    gamer_scisors.style.display = 'none';
};

function gamerDonne2() {
    playerValue = 'paper';
    gamer_rock.style.display = 'none';
    gamer_paper.style.display = 'block';
    gamer_scisors.style.display = 'none';
};

function gamerDonne3() {
    playerValue = 'scisors';
    gamer_rock.style.display = 'none';
    gamer_paper.style.display = 'none';
    gamer_scisors.style.display = 'block';
};
let donne;
let ordiValue;
let range = ['rock', 'paper', 'scisors']

function ordiDonne() {
    donne = Math.round(Math.random() * 2)
    ordiValue = range[donne]
    if (donne == 0) {
        ordi_rock.style.display = 'block'
        ordi_paper.style.display = 'none'
        ordi_scisors.style.display = 'none'
    } else if (donne == 1) {
        ordi_rock.style.display = 'none'
        ordi_paper.style.display = 'block'
        ordi_scisors.style.display = 'none'
    } else if (donne == 2) {
        ordi_rock.style.display = 'none'
        ordi_paper.style.display = 'none'
        ordi_scisors.style.display = 'block'
    }
};
let roundCnt = 0;
let ordiScore = 0;
let playerScore = 0;

function score() {
    roundCnt += 1;
    if (
        (ordiValue == 'rock' && playerValue == 'scisors') ||
        (ordiValue == 'paper' && playerValue == 'rock') ||
        (ordiValue == 'scisors' && playerValue == 'paper')
    ) {
        //alert (ordiValue + " Beats " + playerValue + '\nThe point goes to the computer');
        document.getElementById('ordiGreetings').innerHTML = ordiValue + " Beats " + playerValue + ',   The point goes to computer';
        ordiGreetings.style.display = 'block';
        playerGreetings.style.display = 'none';
        ordiScore += 1;
    } else if (
        (ordiValue == 'rock' && playerValue == 'paper') ||
        (ordiValue == 'paper' && playerValue == 'scisors') ||
        (ordiValue == 'scisors' && playerValue == 'rock')
    ) {
        //alert(playerValue + " beats " + ordiValue + '\nThe point goes to player');
        document.getElementById('playerGreetings').innerHTML = playerValue + " beats " + ordiValue + ',   The point goes to ' + playerName;
        ordiGreetings.style.display = 'none';
        playerGreetings.style.display = 'block';
        playerScore += 1;
    } else if (
        (ordiValue == 'rock' && playerValue == 'rock') ||
        (ordiValue == 'paper' && playerValue == 'paper') ||
        (ordiValue == 'scisors' && playerValue == 'scisors')
    ) {
        //alert(ordiValue + " = " + playerValue +'\nDraw\nTry again');
        document.getElementById('ordiGreetings').innerHTML = ordiValue + " = " + playerValue;
        document.getElementById('playerGreetings').innerHTML = 'Draw  -  Try again';
        ordiGreetings.style.display = 'block';
        playerGreetings.style.display = 'block';
    }
    document.getElementById('rndCnt').innerHTML = 'Round : ' + roundCnt;
    document.getElementById('compScore').innerHTML = 'Computer Score : ' + ordiScore;
    document.getElementById('plScore').innerHTML = playerName + '\'s Score : ' + playerScore;
}

function donne1() {
    gamerDonne1();
    ordiDonne();
    setTimeout('score()', 250);

};

function donne2() {
    gamerDonne2();
    ordiDonne();
    setTimeout('score()', 250);

};

function donne3() {
    gamerDonne3();
    ordiDonne();
    setTimeout('score()', 250);

};