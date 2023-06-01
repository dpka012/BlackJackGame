
let cards = []
let sum = 0
let message = " "
let hasBlackjack = false
let isAlive = false


let player = {
    name: "Rizz",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    return Math.floor( Math.random()*13 ) + 1 
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
   cards = [firstCard , secondCard]
   sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    
   for (let i = 0; i < cards.length; i++) {
          cardsEl.textContent += cards[i] + " "
      }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
      message = "Do you want to draw a new card? (✿◠‿◠)  "
    } else if (sum === 21) {
      message = "You've got Blackjack!! ᕙ(`▿´)ᕗ "
      hasBlackjack = true
    } else {
      message = "You're out of the game! ಥ_ಥ "
      isAlive = false
    }
    messageEl.textContent = message
  }
  function newCards() { 
    if ( isAlive === true && hasBlackjack === false )
    {
    let card = getRandomCard()
    sum += card
      cards.push(card)
    renderGame()
  }
  }
  