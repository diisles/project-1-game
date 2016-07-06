console.log('script.js loaded!');
var myCards = []
var firstClick = "";
var secondClick = "";

var cards = document.getElementsByClassName("card")
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click',cardFlip)
}

// .addEventListener("click", cardFlip);

function cardFlip() {
  //this first if statement below fixes the three click fast issue that was allowing three cards to be clicked before the settimeout refliped the cards.
if(secondClick === ""){

  if(this.id == 'lisa1' || this.id == 'lisa2'){
    // console.log('working')
    this.classList.add('lisa');
  }
  else if(this.id == 'bart1' || this.id == 'bart2'){
    this.classList.add('bart');
  }
  else if(this.id == 'burns1' || this.id == 'burns2'){
    this.classList.add('burns');
  }
  else if(this.id == 'homer1' || this.id == 'homer2'){
    this.classList.add('homer');
  }
  else if(this.id == 'marge1' || this.id == 'marge2'){
    this.classList.add('marge');
  }
  else if(this.id == 'maggie1' || this.id == 'maggie2'){
    this.classList.add('maggie');
  }

  if(firstClick === "") {
    firstClick = this
  } else {
    secondClick = this
  }
  }
  if(secondClick !== "") {
    if(firstClick.classList[1] === secondClick.classList[1]) {
        myCards.push(firstClick.classList[1])
        firstClick.removeEventListener("click", cardFlip)
        secondClick.removeEventListener("click", cardFlip)
        firstClick = ""
        secondClick = ""
    } else {
      setTimeout(function() {
        firstClick.classList = ["card"]
        secondClick.classList = ["card"]
        firstClick = ""
        secondClick = ""
      }, 1000)

      

    }
  }
    checkForWin();
}

function checkForWin(){
  if(myCards.length === 6){
    alert("You Win!")
  }

}



  var faces = []; //array to store card images
      faces[0] = 'images-1.jpg';
      faces[1] = 'images-1.png';
      faces[2] = 'images-2.png';
      faces[3] = 'images-3.png';
      faces[4] = 'images.png';
