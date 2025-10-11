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
cardIdx = [...emojis, ...emojis] //dublicate emojis
cardIdx.sort(() => Math.random() - 0.5) //shuffle cards
flippedCards = []
matchedCards = []
lockBoard = false
}

//flip cards when clicked
const handleClick = (card, index) => {
    if (lockBoard) {
        return //prevents player to flip new cards during chick 
    }

    if (card.classList.contains('flipped') || matchedCards.includes(card)) {
        return //stops rest of the code if one of the conditions true
    }

//flip card
card.classList.add('flipped') //shows the card to the player
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

//check for match
const checkForMatch = () => {
const [firstCard, secondCard] = flippedCards //bring flipped cards 
//find the location of cards in the allCards
const firstIdx = [...allCards].indexOf(firstCard) //indexOf used to know card index in array 
const secondIdx = [...allCards].indexOf(secondCard)
//if first & second card match push them in matchedCards 
if (cardIdx[firstIdx] === cardIdx[secondIdx]) {
matchedCards.push(firstCard, secondCard)
resetFlippedCards()
checkForWin()
}
else {
    //if cards not match setTimeOut 
    setTimeout(() => {
        //returned card to its back side
        firstCard.classList.remove('flipped') 
        secondCard.classList.remove('flipped')
        //clear back content
        firstCard.querySelector('.back').textContent = ''  
        secondCard.querySelector('.back').textContent =''
        resetFlippedCards()
    },1000)
}
}

//resets settings of flipped cards to their normal state
const resetFlippedCards = () => {
    flippedCards = []
    lockBoard = false // open board to continue 
}

//set timer
const startTimer = () => {
const startTime = 60
time = startTime

//clear any previous timer 
if (timer) clearInterval(timer)
//every second we lose time 
    timer = setInterval(() => {
        time--
        if (timerEl) timerEl.textContent = `Timer: ${time}s`
        //check the loss if time runs out
        if (time <= 0) {
            stopTimer()
            if (matchedCards.length !== allCards.length) {
                messageEl.textContent = `😢 You Lose! Time is Up` //shows loss message
            }
        }
    }, 1000);
}

//stop timer when win or loss 
const stopTimer = () => {
    clearInterval(timer)
}

//check for win 
const checkForWin = () => {
    if (matchedCards.length === allCards.length) {
        stopTimer() //stop timer if all cards match

        if (time > 0) {
            messageEl.textContent = messageEl.textContent = `🎉 You Win! Time: ${time}s`
        } //if player match all cards befor time ends up show win message
        else {
            messageEl.textContent = `😢 You Lose! Time is Up`
        } //if not show loss message
    }
}

//event listeners 

//if there is cards in the page, 'if the condition true prepare the game and start timer
if (allCards.length > 0) {
    init()
    startTimer()
}
//start game
if (startBtn) {
startBtn.addEventListener('click', () => {
    window.location.href = 'game.html' //opens the game page
}) 
} 
//whan player clicks on resetBtn reshuffle cards and restart timer
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        init()
        startTimer()
    })
 }
 //when cards is clicked, the handleClick function is called 
allCards.forEach((card, index) => {
card.addEventListener('click', () => handleClick(card, index))
})

