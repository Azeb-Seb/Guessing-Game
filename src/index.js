document.addEventListener('DOMContentLoaded', () =>{
    //card options 
     const cardsArray = [
         {
             name:'fries',
             img : 'src/images/fries.png'
         },
         {
            name:'cheeseburger',
            img : 'src/images/cheeseburger.png'
        },
        {
            name:'ice-cream',
            img : 'src/images/ice-cream.png'
        },
        {
            name:'pizza',
            img : 'src/images/pizza.png'
        },
        {
            name:'milkshake',
            img : 'src/images/milkshake.png'
        },
        
        {
            name:'hotdog',
            img : 'src/images/hotdog.png'
        },
        {
            name:'fries',
            img : 'src/images/fries.png'
        },
        {
           name:'cheeseburger',
           img : 'src/images/cheeseburger.png'
       },
       {
           name:'ice-cream',
           img : 'src/images/ice-cream.png'
       },
       {
           name:'pizza',
           img : 'src/images/pizza.png'
       },
       {
           name:'milkshake',
           img : 'src/images/milkshake.png'
       },
       
       {
           name:'hotdog',
           img : 'src/images/hotdog.png'
       }
     ]


//sort the card randomley
//This will give sort the array randomly we put -0.5 may be not to get 0

cardsArray.sort(() => 0.5 - Math.random());
//console.log(cardsArray);

// put the card in the grid
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
console.log(cardsArray);
let cardChosen=[];
let cardChosenIds=[];
let cardsWon = [];
//function to creat bord
function creatBoard(){
    for(let i = 0; i < cardsArray.length; i++){
        const card = document.createElement('img');//creaet card
        card.setAttribute('src', 'src/images/blank.png');//put the attribute of img
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card); //put the card in the grid
    }
}


function flipCard(){
    let cardId = this.getAttribute('data-id');//choose the card using card Id
    cardChosen.push(cardsArray[cardId].name);// put the chossen card in the cardChoosen array
    cardChosenIds.push(cardId);
    this.setAttribute('src', cardsArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }
    console.log(cardChosenIds);
}

function checkForMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];
    if(optionOneId == optionTwoId){
        alert('you have clicked the same image!');
        cards[optionOneId].setAttribute('src', 'src/images/blank.png');
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png');
    }else if(cardChosen[0]===cardChosen[1]){
        alert('you have found a match');
        cards[optionOneId].setAttribute('src', 'src/images/white.png');
        cards[optionTwoId].setAttribute('src', 'src/images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'src/images/blank.png');
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png');
        alert('Sorry, try again!');
    }
    cardChosen=[];
    cardChosenIds=[];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardsArray.length/2){
        resultDisplay.textContent = 'Congratulations! You have Won!';
    }
    
    console.log(cardChosen);
    console.log(cardsWon);
    
}

creatBoard();









});