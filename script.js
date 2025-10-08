<<<<<<< HEAD
/*---------------------------- Variables (state) ----------------------------*/
let cards //to store shuffled cards
let flippedCards //to store currently flipped cards
let matchedCards //to store matched cards
let lockBoard //to stop multiple clicks during checking
let timer
let time
let emojis
/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector('#startBtn') 
const allCards = document.querySelectorAll('.card')
const messageEl = document.querySelector('#message')
const resetBtn = document.querySelector('#restart')
const timerEl = document.querySelector('#timer')
/*-------------------------------- Functions --------------------------------*/
const startTimer = () => {
    time = 0
    //clear any previous count
    if (timer) clearInterval(timer)
     //increase time every sec
        timer = setInterval(() => {
    time++
    if (timerEl) timerEl.textContent = `timer: ${time}s`
    }, 1000)
}
const stopTimer = () => {
    clearInterval(timer)
}

// prepare and reset
const init = () => {
 emojis = ["🌹", "🌷", "🌻", "🪻", "🌸", "🌺","🌼","🪷"]
cardIdx = [...emojis, ...emojis] //dublicate cardIdx
cardIdx.sort(() => Math.random() - 0.5) //shuffle cards
flippedCards = []
matchedCards = []
lockBoard = false

//restore cards to original position
if (allCards && allCards.length > 0) {
    allCards.forEach(card => {
    card.classList.remove('flipped', 'matched')
    const back = card.querySelector('.back')
    if (back) back.textContent = ''
})
}

messageEl.textContent = 'Start Matching!'
}

//filp card when click
const handleClick = (card, index) => {
    if (lockBoard) {
        return
    }
    else if (card.classList.contains('flipped')) {

    }
    else if (matchedCards.includes(card)) {
 
    }
    else {
        //flip the card
        card.classList.add('flipped')
        card.querySelector('.back').textContent = cardIdx[index]
        flippedCards.push(card)
        //check for match
        if (flippedCards.length === 2) {
            lockBoard = true
            checkForMatch()
        }
    }
}

const checkForMatch = () => {
   const [firstCard, secondCard] = flippedCards
   const firstIdx = [...allCards].indexOf(firstCard) 
   const secondIdx = [...allCards].indexOf(secondCard) 

   if (cardIdx[firstIdx] === cardIdx[secondIdx]) {
    matchedCards.push(firstCard, secondCard)
    resetFlippedCards()
    checkForWin()
   }
   else {
    setTimeout(() => {
        firstCard.classList.remove('flipped')
        secondCard.classList.remove('flipped')
        firstCard.querySelector('.back').textContent = ''
        secondCard.querySelector('.back').textContent = ''
        resetFlippedCards()
    }, 1000)
   }
} 

const resetFlippedCards = () => {
    flippedCards = []
    lockBoard = false
}

const checkForWin = () => {
    if (matchedCards.length === allCards.length) {
        stopTimer()
        messageEl.textContent = `🎉 You Win! Time: ${time}s`
    }
}
/*----------------------------- Event Listeners -----------------------------*/
if (allCards.length > 0) {
 init()
 startTimer()
}
allCards.forEach((card, index) => {
    card.addEventListener('click', () => handleClick(card, index))
})
 
 
if (resetBtn) {
resetBtn.addEventListener('click', () => {
    init()
    startTimer()
})
}

if (startBtn) {
startBtn.addEventListener('click', () => {
    window.location.href = 'game.html'
}) 
}
=======
// /*-------------------------------- Constants --------------------------------*/
const emojis = ['🌿', '🍀', '☘️', '🌱']

const cards = [...emojis, ...emojis].map(emojis => ({
    emoji: emoji
    flipped: false
    matched: false
}))

// /*---------------------------- Variables (state) ----------------------------*/
let card
let firstCard
let secondCard
let lockBoard
let moves
let timer
let matchPairs

// /*------------------------ Cached Element References ------------------------*/
const cardEls = document.querySelectorAll('.card')
const movesEl = document.querySelector('moves')
const restartBtn = document.querySelector('restart')
const messageEl = document.querySelector('#message')
// /*-------------------------------- Functions --------------------------------*/
const render = () => {
updateCards()
updateMessage()
} 

const init = () => {
firstCard = null
secondCard = null
lockBoard = false
moves = 0
matchPairs = 0
render()
}
init()

const updateCards = () => {
    cards.forEach((cards, index) => {
        let card = cardEls[index]
        if (cards.flipped || cards.matched) {
            card.textContent = cards.emoji
        }
        else {
            card.textContent = "❓"
        }
    })
}

const updateMessage = () => {
if (matchPairs === totaCards % 2) {
    messageEl.textContent = "🎉 You Win!"
}
else {
    messageEl.textContent = `Moves: ${moves}`
}
}

const shuffleCards = () => {
for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    
}
}
// /*----------------------------- Event Listeners -----------------------------*/
cardEls.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped')
    })
})

restartBtn.addEventListener('click', restartGame)
>>>>>>> 5daa096d967359f327235a145ec01b5835e3509b
