console.log('script.js loaded!');
var mycards = []

var cards = document.getElementsByClassName("card")
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click',cardFlip)
}

// .addEventListener("click", cardFlip);

function cardFlip() {
    this.innerHTML = "YOU CLICKED ME!";
    this.classList.add('images.png');
}
  var faces = []; //array to store card images
      faces[0] = 'images-1.jpg';
      faces[1] = 'images-1.png';
      faces[2] = 'images-2.png';
      faces[3] = 'images-3.png';
      faces[4] = 'images.png';
