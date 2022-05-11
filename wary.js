class Card{
   constructor (suit, rank, faceValue){
       this.suit = suit;
       this.rank = rank;
       this.faceValue = faceValue;
   }
}

let myDeck = [];

let myFirstCard = new Card ("Spades", 8, "eight");
let rankValue= [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let faceValue= ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let suitValues= ["Heart", "Diamond", "Club", "Spade"];

for(let i = 0; i < rankValue.length; i++){
    for(let j=0; j < suitValues.length; j++){

    
    myDeck.push(new Card (suitValues[j], rankValue[i], faceValue[i] ))
}
}
console.log(myDeck);


function shuffleArray(array) {
    for (let i = myDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(myDeck);

const half = Math.ceil(myDeck.length / 2);    
  
  const firstHalf = myDeck.slice(0, half)
  const secondHalf = myDeck.slice(-half)
  console.log(firstHalf);
  console.log(secondHalf);

  let player1score=0;
  let player2score=0;
  
  for(let i = 0 ; i < firstHalf.length; i++){
    if (firstHalf[i].rank > secondHalf[i].rank) {
        player1score ++; 
    console.log(`Round ${[i +1]}  ||   Player 1 Wins!    Card: ${firstHalf[i].faceValue} of ${firstHalf[i].suit}s 
               Player 2          Card: ${secondHalf[i].faceValue} of ${secondHalf[i].suit}s`);
      }else if (secondHalf[i].rank > firstHalf[i].rank) {
        player2score ++;
        console.log(`Round ${[i +1]}  ||   Player 2 Wins!    Card: ${secondHalf[i].faceValue} of ${secondHalf[i].suit}s 
               Player 1          Card: ${firstHalf[i].faceValue} of ${firstHalf[i].suit}s`);
      } else {
          console.log(`Round ${[i +1]}  ||   TIE!!!   Player 1     Card: ${firstHalf[i].faceValue} of ${firstHalf[i].suit}s 
               TIE!!!   Player 2     Card: ${secondHalf[i].faceValue} of ${secondHalf[i].suit}s `)
      }
      
}

console.log(`Player 1: ${player1score}`);
console.log(`Player 2: ${player2score}`);

function declare(var1, var2){
    if(var1 > var2){
        console.log(`Player 1 wins!!!!!  ||  Player 1: ${var1} points to Player 2: ${var2} points`);
    } else if (var2 > var1){
       console.log (`Player 2 wins!!!!!  ||  Player 2: ${var2} points to Player 2: ${var1} points`);
    } else{
        console.log(`TIE!!!!" ||  Player 1: ${var1} points to Player 2: ${var2} points`);
    }
}
declare(player1score, player2score);


  