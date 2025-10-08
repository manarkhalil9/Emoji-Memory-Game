Cards Match

🎮 Description:

This is a browser-based memory card game using emoji cards. The player flips two cards at a time to find matching pairs. The game has a 1-minute countdown timer. When all pairs are matched or the timer reaches 0, the game ends and shows a completion message. Players can restart the game anytime using the restart button.

Benefits:

Improves memory and concentration. Fun, interactive, and visually appealing.

📝 Pseudo-code:

Start Game Show game board with 16 cards (8 pairs). Show countdown timer (60s). Prepare Cards Create an array of 8 unique emojis. Duplicate to make pairs (16 cards total). Shuffle cards randomly. Render cards face down on the board.

If Player Clicks a Card Flip the card if it’s not already flipped or matched. Add the card to a flipped cards list. Check Two Flipped Cards

If two cards are flipped: Check if they match. If match => mark as matched. If no match => flip back after a short delay. Reset flipped cards list.

Check End of Game If all pairs are matched or timer reaches 0: Stop the timer. Show completion message with time remaining (or zero).

Timer Start 60s countdown. Decrease by 1 every second. Update timer display on page. If timer reaches 0 => end game.

Restart Button Reset timer to 60s. Flip all cards back face down. Shuffle cards again. Start the countdown again.

⚡ How to Get Started :

index.html

Game title Start button (startBtn) => navigates to game.html

game.html

div for countdown timer div class="board" id="cardBoard" for the cards

Each card: div class="card" div class="front" ? div class="back"🐶

Restart button (restartBtn)

style.css

.board => grid layout for cards .card => size, perspective .front & .back => backface visibility .flipped => flip animation

script.js

Initialize cards and timer Shuffle cards Add event listeners and HandleClick card flip, match & win check, timer countdown HandleClick restart button

