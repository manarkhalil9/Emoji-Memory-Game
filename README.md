# Emoji-Memory-Game
Description:

This is a browser-based memory game that uses emoji cards. The player must flip two cards at a time to find matching pairs. The game will include three levels of difficulty, with each level increasing in challenge by having more cards and more complex arrangements.

Additional features will include:

A move counter to track the number of attempts.
A timer for each level to add a time-based challenge.
Feedback when a pair is correctly matched or mismatched.
A final score based on completed matches, moves, and time.

This game will help players improve memory and concentration while being interactive and visually appealing.


---------

Pseudo-code :

1. Start Game
Show the game board, moves counter, and timer for the level.

2. Prepare Cards
Create an array of emojis, duplicate for pairs, shuffle, and display face down.

3. Player Clicks a Card
Flip the card if it’s not already flipped/matched and add to flipped cards list.

4. Check Two Flipped Cards
If two cards are flipped, increase moves, check for match, mark matched or flip back, then reset flipped cards list.

5. Check End of Level
If all pairs matched, stop timer, show completion message, and calculate score.

6. Timer
Count down each second; if time runs out, end level and show score with option to restart.

7. Restart Button
Reset moves, timer, matched pairs, shuffle cards, and start level from beginning.


----------

How to Get Started:

i will start with 2 HTML, one for the index while the other for the game. 
style.CSS for styling cards\board.
level1.js, level2.js, level3.js => game logic per level


index.html

Game title
A start game button that navigates to game.html 



---

game.html

A container for the cards like: <div class = "board"><\div>
A display for the move counter (e.g <div id = "moves"><\div>) 
A display for the timer (e.g <div id = "timer"><\div>) 
A restart button to reset the current level

-----

style.css

.board => grid display for cards
.card => front (emoji) and back (?)
.flipped => class for showing emoji
simple animations for flip

-----
script.js

Level 1 => 8 cards (4 pairs), 60s timer

Level 2 => 12 cards (6 pairs), 50s timer

Level 3 => 20 cards (10 pairs), 40s timer

-----


wireframe :

<img width="1024" height="1536" alt="memory game wireframe" src="https://github.com/user-attachments/assets/9767de42-8d84-47da-8629-bbe576f9b6ca" />

