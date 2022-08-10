// variables
const inputNumber = document.querySelector ("#guessedNumber");
const buttonSubmit = document.querySelector ("#submitNumber");
const buttonPlayAgain = document.querySelector ('#playAgain');
const screen1 = document.querySelector (".screen1");
const screen2 = document.querySelector (".screen2");
let randomNumber =  Math.round (Math.random() * 10);
let attempts = 1;


function generaNumber () {

   randomNumber = Math.round (Math.random() * 10);

   return randomNumber;
   
}

// switch between screens

function toggleScreen () {

   screen1.classList.toggle ('hide');
   screen2.classList.toggle ('hide');
}

// click any button on screen1 form

 function submit (event) {

   event.preventDefault();
   
   if ( inputNumber.value == randomNumber ) {

      toggleScreen();
      generaNumber()
      screen2.querySelector('h2').innerText = ` Você acertou em ${attempts} tentativas`;
      attempts = 0
   
   } else {

      alert ('Tente novamente!');
     
   }

      inputNumber.value = "";
      attempts ++
 
 }

 console.log (randomNumber)

// click play button again screen2

 function playAgain () {

   toggleScreen();
   generaNumber()
  
 }


// Events

buttonPlayAgain.addEventListener ('click', playAgain);

buttonSubmit.addEventListener ('click', submit );



