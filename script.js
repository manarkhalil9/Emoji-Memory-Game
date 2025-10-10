//variables 
let cards //store shuffled cards
let flippedCards //track currently flipped cards
let matchedCards //store matched cards
let lockBoard //stop multiple clicks during checking
let timer //needed to start, stop or reset timer
let time //set limits
let emojis //store emoji array

//cached elemnts
const startBtn = document.querySelector('#startBtn')
const resetBtn = document.querySelector('#reset')
const allCards = document.querySelectorAll('.card')
const messageEl = document.querySelector('#message')
const timerEl = document.querySelector('#timer')

//functions
//prepare board
const init = () => {
emojis = ["🌹", "🌷", "🌻", "🪻", "🌸", "🌺","🌼","🪷"]
const cardIdx = [...emojis, ...emojis] //dublicate emojis
cardIdx.sort(() => Math.random() - 0.5) //shuffle cards
flippedCards = []
matchedCards = []
lockBoard = false
}
init()

//flip cards when clicked
const handleClick = (card, index) => {
    if (lockBoard) {
        return //prevents player to flip new cards during chick 
    }

    if (card.classlist.contains('flipped') || matchedCards.includes(card)) {
        return //stops rest of the code if one of the conditions true
    }

//flip card
card.classlist.add('flipped') //shows the card to the player
card.querySelector('.back').textContent = cardIdx[index] //link card to correct symbol
flippedCards.push(card) //saves card temporary to combare later

//check for match, if the player clicks two cards lock the board and check for match
if (flippedCards.length === 2) {
    lockBoard = true
    checkForMatch()
}
}

//restore cards to original position if start or reset game 
if (allCards && allCards.length > 0) //make sure all cards are exists & > 0
    {
    allCards.forEach(card => {
    card.classList.remove('flipped', 'matched') //remove flipped & matched cards

    //disappear emojis and game starts over
    const back = card.querySelector('.back')
    if (back) back.textContent = ''
    })
    messageEl.textContent = 'Start Matching!'
}

// /*-------------------------------- Functions --------------------------------*/
// const startTimer = () => {
//     time = 0
//     //clear any previous count
//     if (timer) clearInterval(timer)
//      //increase time every sec
//         timer = setInterval(() => {
//     time++
//     if (timerEl) timerEl.textContent = `timer: ${time}s`
//     }, 1000)
// }
// const stopTimer = () => {
//     clearInterval(timer)
// }

// const checkForMatch = () => {
//    const [firstCard, secondCard] = flippedCards
//    const firstIdx = [...allCards].indexOf(firstCard) 
//    const secondIdx = [...allCards].indexOf(secondCard) 

//    if (cardIdx[firstIdx] === cardIdx[secondIdx]) {
//     matchedCards.push(firstCard, secondCard)
//     resetFlippedCards()
//     checkForWin()
//    }
//    else {
//     setTimeout(() => {
//         firstCard.classList.remove('flipped')
//         secondCard.classList.remove('flipped')
//         firstCard.querySelector('.back').textContent = ''
//         secondCard.querySelector('.back').textContent = ''
//         resetFlippedCards()
//     }, 1000)
//    }
// } 

// const resetFlippedCards = () => {
//     flippedCards = []
//     lockBoard = false
// }

// const checkForWin = () => {
//     if (matchedCards.length === allCards.length) {
//         stopTimer()
//         messageEl.textContent = `🎉 You Win! Time: ${time}s`
//     }
// }
// /*----------------------------- Event Listeners -----------------------------*/
// if (allCards.length > 0) {
//  init()
//  startTimer()
// }
// allCards.forEach((card, index) => {
//     card.addEventListener('click', () => handleClick(card, index))
// })
 
 
// if (resetBtn) {
// resetBtn.addEventListener('click', () => {
//     init()
//     startTimer()
// })
// }

// if (startBtn) {
// startBtn.addEventListener('click', () => {
//     window.location.href = 'game.html'
// }) 
// }
