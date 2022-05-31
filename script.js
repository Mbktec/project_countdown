const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const center = document.querySelector('.center')
const time = document.querySelector('.time');
const timeP = document.querySelector('.time-p');
let timer;




//fonction permettant d'affiche l'heur
function affiche(tempsInitial) {
    const now = Date.now();
    const then = now + tempsInitial* 1000;

    heurActuel(then);
   
    timeP.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

   timer = setInterval(() => {
        if(  tempsInitial > 0){
            tempsInitial--;
            timeP.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
      
        }
        else if( tempsInitial === 0){
            clearInterval(timer);
        }
}, 1000)
}

 function heurActuel(tempsInitial) {

     let tempsEnCou = new Date(tempsInitial);
     let heur = tempsEnCou.getHours();
     let min = tempsEnCou.getMinutes();

    time.textContent = `You will be back at ${heur}: ${
        min < 10 ? "0" : ""
      }${min}`;
     
 }


b1.addEventListener('click', () => {
    clearInterval(timer);
    let temps = 20;
    affiche(temps);
  
})

b2.addEventListener('click', () => {
    clearInterval(timer);
    let temps = 300;
    affiche(temps);
 
})

b3.addEventListener('click', () => {
    clearInterval(timer);
    let temps = 1200;
    affiche(temps);
})

b4.addEventListener('click', () => {
    clearInterval(timer);
    let temps = 1800;
    affiche(temps);
   
})

b5.addEventListener('click', () => {
    clearInterval(timer);
    let temps = 3600;
    affiche(temps);
})

center.addEventListener('click', () => {
    clearInterval(timer);
    let temps = center.value;
    temps = temps*60
    affiche(temps);
     
})