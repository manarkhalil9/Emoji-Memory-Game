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
