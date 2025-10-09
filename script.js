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

// //flip cards
// const handleClick = () => {
    
// }

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

// // prepare and reset
// const init = () => {
//  emojis = ["🌹", "🌷", "🌻", "🪻", "🌸", "🌺","🌼","🪷"]
// cardIdx = [...emojis, ...emojis] //dublicate cardIdx
// cardIdx.sort(() => Math.random() - 0.5) //shuffle cards
// flippedCards = []
// matchedCards = []
// lockBoard = false

// //restore cards to original position
// if (allCards && allCards.length > 0) {
//     allCards.forEach(card => {
//     card.classList.remove('flipped', 'matched')
//     const back = card.querySelector('.back')
//     if (back) back.textContent = ''
// })
// }

// messageEl.textContent = 'Start Matching!'
// }

// //filp card when click
// const handleClick = (card, index) => {
//     if (lockBoard) {
//         return
//     }
//     else if (card.classList.contains('flipped')) {

//     }
//     else if (matchedCards.includes(card)) {
 
//     }
//     else {
//         //flip the card
//         card.classList.add('flipped')
//         card.querySelector('.back').textContent = cardIdx[index]
//         flippedCards.push(card)
//         //check for match
//         if (flippedCards.length === 2) {
//             lockBoard = true
//             checkForMatch()
//         }
//     }
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
