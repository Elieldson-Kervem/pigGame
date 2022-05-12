"use strict";
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");

const currentScore0=document.querySelector('#current--0');
const currentScore1=document.querySelector('#current--1');

const dice = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btns = document.querySelectorAll(".btn");

let scores,currentScore,activePlayer,playing
const inti=function(){
    scores=[0,0];
    currentScore=0
    activePlayer=0
    playing=true;

    score1.textContent=0;
    score2.textContent=0;
    currentScore1.textContent=0;
    currentScore0.textContent=0;

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
 

}
inti();


const switcherPlayer=function(){
    document.querySelector(`#current--${activePlayer}`).textContent=0
    currentScore=0;
         activePlayer = activePlayer === 0 ? 1:0;

         player0.classList.toggle('player--active')
         player1.classList.toggle('player--active')
}

btnRoll.addEventListener("click", function () {
    if(playing){
  const randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice);
  dice.src = `dice-${randomDice}.png`;

  if (randomDice !== 1) {
      currentScore+=randomDice;
      document.querySelector(`#current--${activePlayer}`).textContent=currentScore
      
  }
  else{
    switcherPlayer();
         

  }
  // 1. Gera um valor aleatorio nos dados, mostra o dado e checa se é igual a 1
}});


btnHold.addEventListener('click',function(){
    if(playing){
     scores[activePlayer] += currentScore
     document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer]

     if(scores[activePlayer]>=30){
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
         playing=false
     }
     else{
     switcherPlayer();
     }
}})


btnNew.addEventListener('click',inti)