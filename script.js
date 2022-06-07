///going to need 4 divs for each card in HTML
//need to name Div for query selector
///////////////////////////////////////////////////////////

//use queryselector to get the div I want
//declare variable for empty array
//use boolean to declare the first click as false
var cards = document.querySelectorAll(".cardCore");
var click = false;
var cardPair = [];

//*********************************************************** */
//card [] event listener to click
cards.forEach((card) =>{
    card.state = "unclicked";
});

//             SHUFFLE FUCNTION


/*** NEED EVENT LISTENER FOR ALL CARDCORES */
//*********************************************** */
//if cards[] = unclicked
//cards [] transform
//card[] = clicked
//push card to cardpair
//checked function
//else if cards [] = clicked
// transform nothing
// pair of cards array empty
if (cards[i] = "unclicked"){


}
else if (cards[i] = "clicked"){



}

//***************************** */
// function to check cards
//if card[0] = card[1] = match fucntion
//else unmatched fucntion
function check(){
if(cardPair.length == 2){
    if (cardPair[0].querySelector("img").src ==
    cardPair[1].querySelector("img").src)
} //MATCH FUNCTION
} else {
    //UNMATCH FUNCTION
}


//*************************************** */
//match function needs to update state of the div once two correct cards are matched, turn off event listener
//cardpair 1 & 2 = blocked(event listener off)
//cardpair array is emptied again
//query previous score and score++
function match() {
cardPair[0].state = "blocked";
cardPair[1].state = "blocked";
cardPair = [];
let score = document.querySelector(/*scoreboard */);
scoreboard++;
document.querySelector(/*scoreboard*/).innerHTML = score

}

//************************************************ */
//unmatch function// want cards to flip completely over if they are an unmatched pair.
// setTimeouit 
//card1 & card2.style.transform ), 750)
//repeat above **cardpair 1 and 2 = blocked
//pair of cards array empty again
function noMatch () {
    setTimeout(() => {
        cardPair[1].state = "unclicked";
        cardPair[0].state = "unclicked";
        cardPair[1].style.transform = "rotateY(0deg)";
        cardPair[0].style.transform = "rotateY(0deg)";

        }, 500);
        cardPair[0].state = "blocked";
        cardPair[1].state = "blocked";
        cardPair = [];
}

//************************************************** */
//game timer function
//need to reference

//************************* */
//shuffle card function
//query select IMG
//declare array of pictures
//need to invoke towards beginning of code

function shuffle() {
    let images = document.querySelectorAll('img');
    let srcs = [
        //INSERT IMAGES
    ] 
/// for loop to shuffle cards
// use .length -1 so we dont execute the loop one time too many 
for (let i = srcs.length -1; i >0; i--){
    let j = Math.floor(Math.random() * i)
    let temporary = srcs[i];
    srcs[i] = srcs[j];
    srcs[j] = temporary
}



for(let i = 0; i < images.length; i++){
    images[i].src = srcs[i]
}
}





