const cardArray = [
  {
    img: "assets/grandpa.jpg",
  },
  {
    img: "assets/grandpa.jpg",
  },
  {
    img: "assets/gusFace.jpg",
  },
  {
    img: "assets/gusFace.jpg",
  },
  {
    img: "assets/hank.jpg",
  },
  {
    img: "assets/hank.jpg",
  },
  {
    img: "assets/heisenburg.jpg",
  },
  {
    img: "assets/heisenburg.jpg",
  },
  {
    img: "assets/Jesse.jpg",
  },
  {
    img: "assets/Jesse.jpg",
  },
  {
    img: "assets/mike.jpg",
  },
  {
    img: "assets/mike.jpg",
  },
  {
    img: "assets/Saul.jpg",
  },
  {
    img: "assets/Saul.jpg",
  },
  {
    img: "assets/tuco.jpg",
  },
  {
    img: "assets/tuco.jpg",
  },
  {
    img: "assets/waltJR.jpg",
  },
  {
    img: "assets/waltJR.jpg",
  },
  {
    img: "assets/walterundies.jpg",
  },
  {
    src: "assets/walterundies.jpg",
  },
];
 

//creates divs dynamically
 function addCard() {
 const container = document.querySelector("#container");

  const newCardShell = document.createElement("DIV");
  newCardShell.className = "cardShell";

  const newCardCore = document.createElement("DIV");
  newCardCore.className = "cardCore";

  const newCardFront = document.createElement("DIV");
  newCardFront.className = "cardFront";

  const newCardBack = document.createElement("DIV");
  newCardBack.className = "cardBack";
  

  container.appendChild(newCardShell);
  newCardShell.appendChild(newCardCore);
  newCardCore.appendChild(newCardFront);
  newCardCore.appendChild(newCardBack);
  }
//container.appendChild(addCard(cardArray));
