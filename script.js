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
