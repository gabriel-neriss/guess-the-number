// variables
const inputNumber = document.querySelector ("#guessedNumber");
const buttonSubmit = document.querySelector ("#submitNumber");
const buttonPlayAgain = document.querySelector ('#playAgain');
const screen1 = document.querySelector (".screen1");
const screen2 = document.querySelector (".screen2");
const randomNumber = Math.floor (Math.random() * 10);
let attempts = 1;



// switch between screens

function toggleScreen () {

   screen1.classList.toggle ('hide');
   screen2.classList.toggle ('hide');
}

// click any button on screen1 form

 function submit (event) {

   event.preventDefault();
   
   if ( randomNumber == inputNumber.value ) {

      toggleScreen();

      screen2.querySelector('h2').innerText = ` Você acertou em ${attempts} tentativas`;
   
   } else {

      alert ('Tente novamente!');
      inputNumber.value = "";
      
   }
 
 }

// click play button again screen2

 function playAgain () {

   toggleScreen();
   inputNumber.value = "";
  
 }

 // keyboard enter key

 function keyenter (enter) {

   if  (enter.key == 'Enter') {

      toggleScreen ();

   }

 }


// Events

buttonPlayAgain.addEventListener ('click', playAgain);

buttonSubmit.addEventListener ('click', submit );

document.addEventListener ('keydown', keyenter);

