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

shuffle();


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

for (let i = 0; i < cards.length; i++){
cards[i].addEventListener("click", () => {
    if(!click){
        timer();
    }
    click = true;
    if (cards[i].state =="unclicked") {
        cards[i].style.transform = "rotateY(180deg)"
        cards[i].state = "clicked";
        cardPair.push(cards[i]) 
        check()
    }
    else if (cards[i].state == "clicked"){
        cards[i].style.transform = "rotateY(0deg)";
        cards[i].state = "unclicked"

        cardPair = [];

    }
});

}







//***************************** */
// function to check cards
//if card[0] = card[1] = match fucntion
//else unmatched fucntion
function check(){
if (cardPair.length == 2) {
    if (
        cardPair[0].querySelector("img").src ==
    cardPair[1].querySelector("img").src)
 {
    match()
} else {
    noMatch(cardPair[0], cardPair[1])
}
}
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
let score = document.querySelector("#scoreboard").innerHTML;
scoreboard++;
document.querySelector("#scoreboard").innerHTML = score

}

//************************************************ */
//unmatch function// want cards to flip completely over if they are an unmatched pair.
// setTimeouit 
//card1 & card2.style.transform ), 750)
//repeat above **cardpair 1 and 2 = blocked
//pair of cards array empty again
function noMatch (stop1, stop2) {
    setTimeout(() => {
        stop1.state = "unclicked";
        stop2.state = "unclicked";
        stop1.style.transform = "rotateY(0deg)";
        stop2.style.transform = "rotateY(0deg)";

        }, 500);
        cardPair[0].state = "blocked";
        cardPair[1].state = "blocked";
        cardPair = [];
}

//************************************************** */
//game timer function
//needs to roll over 60 seconds to 1 minute
function timer (){
    let secs = 0;
    let mins = 0;
    let Sec;
    let Min;
    setInterval (() =>{
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++
        }
        secs < 10 ? (Sec = `0${secs}`) : (Sec = `${secs}`);
        mins < 10 ? (Min = `0${mins}`) : (Min = `${mins}`);
        document.querySelector("#timer").innerHTML = `${Min}: ${Sec}`;
    }, 1000)
}

//************************* */
//shuffle card function
//query select IMG
//declare array of pictures
//need to invoke towards beginning of code

function shuffle() {
    let images = document.querySelectorAll('img');
    let srcs = [
        "assets/grandpa.jpg",
        "assets/gusFace.jpg",
        "assets/hank.jpg",
        "assets/heisenburg.jpg",
        "assets/Jesse.jpg",
        "assets/mike.jpg",
        "assets/Saul.jpg",
        "assets/tuco.jpg",
        "assets/waltJR.jpg",
        "assets/walterundies.jpg",
        "assets/grandpa.jpg",
        "assets/gusFace.jpg",
        "assets/hank.jpg",
        "assets/heisenburg.jpg",
        "assets/Jesse.jpg",
        "assets/mike.jpg",
        "assets/Saul.jpg",
        "assets/tuco.jpg",
        "assets/waltJR.jpg",
        "assets/walterundies.jpg"
        
    ];
/// for loop to shuffle cards
// use .length -1 so we dont execute the loop one time too many 
for (let i = srcs.length -1; i >0; i--){
    let j = Math.floor(Math.random() * i)
    let temporary = srcs[i];
    srcs[i] = srcs[j];
    srcs[j] = temporary
}


//ASSIGNS SRC PROPERY TO ALL IMAGE ELEMENTS
for(let i = 0; i < images.length; i++){
    images[i].src = srcs[i]
}
}





