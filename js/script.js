console.log('script.js loaded!');

$('#gameStartButton').click(function() {
    // $(resetBoard();
    $('#startButtonDiv').hide();
    $('#board').show();
    $('H2').hide();
    // Scroll to function found at http://www.robertprice.co.uk/robblog/using-jquery-to-scroll-to-an-element/
    $('html,body').animate({
      scrollTop: ($('#board').offset().top)
    }, 500);
});

var myCards = []
var firstClick = "";
var secondClick = "";

var $cards = $(".card")
    // var $cards = $('.card')
for (var i = 0; i < $cards.length; i++) {
    $cards.eq(i).click(cardFlip)
}

// .addEventListener("click", cardFlip);

function cardFlip() {
  console.log(this);
    //this first if statement below fixes the three click fast issue that was allowing three cards to be clicked before the settimeout refliped the cards.
    if (secondClick === "") {

        if (this.id == 'lisa1' || this.id == 'lisa2') {
            // console.log('working')
            this.classList.add('lisa');
        } else if (this.id == 'bart1' || this.id == 'bart2') {
            this.classList.add('bart');
        } else if (this.id == 'burns1' || this.id == 'burns2') {
            this.classList.add('burns');
        } else if (this.id == 'homer1' || this.id == 'homer2') {
            this.classList.add('homer');
        } else if (this.id == 'marge1' || this.id == 'marge2') {
            this.classList.add('marge');
        } else if (this.id == 'maggie1' || this.id == 'maggie2') {
            this.classList.add('maggie');
        }

        if (firstClick === "") {
            firstClick = this
        } else {
            secondClick = this
        }
    }
    if (secondClick !== "") {
        if (firstClick.classList[1] === secondClick.classList[1]) {
            myCards.push(firstClick.classList[1])
            $(firstClick).unbind("click", cardFlip)
            $(secondClick).unbind("click", cardFlip)
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

function checkForWin() {
    if (myCards.length === 6) {
        alert("You Win!")
        $('#startButtonDiv').show();
        $('#board').hide();
    }
}
// The Fisher-Yates Shuffle
var idsArray = ["homer1", "maggie1", "marge1", "lisa2", "bart1", "burns2", "homer2", "maggie2", "lisa1", "marge2", "burns1", "bart2",]

function shuffle(cardsArray) {
    var i = 0,
        j = 0,
        temp = null

    for (i = cardsArray.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = cardsArray[i]
        cardsArray[i] = cardsArray[j]
        cardsArray[j] = temp
    }
}

function resetBoard() {
  // console.log("game reset");
  shuffle(idsArray);
  // console.log("game shuffled");
  for(var i = 0; i < idsArray.length; i++) {
    $cards[i].id = idsArray[i];
  }
}
