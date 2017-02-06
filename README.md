# OO Racing Game in Node

In this lab you will be modeling an Object Oriented racing game using constructors and `node.js`. Unlike the game you built in your browser, this game will have *no visual representation*. The only way to play this game is by calling methods on objects.

> Jargon Note: The words "model", "constructor", "class", "resource", and "object" mean roughly the same thing, but are used in different contexts.

## Sidenote: What is MVC?
MVC stands for "Model", "View", "Controller" and is a convenient way to divide the responsibility of a program.

- **Model** -- a combination of data and behavior. A `Flower` model can be thought of as having attributes (`f.height`, `f.color`, `f.petals`) and behaviors (`f.grow()`, `f.drink()`, `f.crossPolinate(f2)`) that make it seem alive.
- **Controller** -- The controller is the glue between the model and the view. A controller handles updating the "state" of both the model and the view. For example, a controller may take a command from the user (like "up arrow"), call a method on a model (e.g. `f.grow()`), and then re-render the view.
- **View** -- a visual representation of the underlying data. A "view" can be "rendered" in a browser, on the command line, or even via a touch-tone phone.

### Exercise: Design a game of chess using the MVC pattern
![chessboard](https://cloud.githubusercontent.com/assets/1489337/22665750/bffba6a4-ec6a-11e6-9f04-f2c62d0025fb.gif)

<!-- DO NOT INDENT details/summary BLOCK -->
<details>
<summary>**What are our models? Identify at least 3.** (Click Here)</summary>
<br>
- `ChessGame` -- A game has two players and the concept of a turn.
- `GamePlayer` -- A player has a color and many pieces.
- `Board` -- A board has a height and a width and many pieces.
- `Piece` -- A piece has a color, type, and position on the board.
</details>

<!-- DO NOT INDENT details/summary BLOCK -->
<details>
<summary>**How can we represent the view?** (Click Here)</summary>
<br>
- As a 3D video game
- As an HTML table with images for each type of chess piece.
- As a retro, ascii based game with letters representing each piece
- As a voice-recorded list of pieces and positions (e.g. "Black Knight on B4")
</details>

<!-- DO NOT INDENT details/summary BLOCK -->
<details>
<summary>**What is the job of the controller?** (Click Here)</summary>
<br>
- (Browser) To listen for the user to select (mousedown) a piece that belongs to them, drag their mouse to a new square, and release (mouseup) the piece. The controller communicates to the board that a piece needs to be moved from one position to another. The board checks what kind of piece it is and whether it is a legal move. If the move is legal, the DOM is re-rendered. If the move is not legal, the move is canceled.

- (Command Line Interface) To wait for the user to submit a text-based command (e.g. "move B4 to C5"). The controller communicates to the board that piece needs to be moved. The board checks what kind of piece it is and whether it is a legal move. If the move is legal, an updated board is printed to the command line. If the move is not legal, the move is canceled.

- (Phone Dialogue System) To wait for the user to speak their command into the phone (e.g. "take the White Pawn with the Black Queen"). The controller communicates to the board that piece needs to be moved. The board checks what kind of piece it is and whether it is a legal move. If the move is legal, the user hears: "Black Queen takes White Pawn. Player 1, your turn". If the move is not legal, the user hears: "Illegal move. Player 2, try again".
</details>


> Pro-Tip: Developers often say: *Controllers should be "fat" and Models should be "skinny"*. That means your controllers should be doing the heavy lifting!


## The OO Racing Game
Before we jump into coding, let's think about the "models" or "agents" we need in order to simulate a racing game.

- How do we model the game? What objects or agents do we need?
    + List them out. What are they?
    + What is the responsibility of each object?
- What does the object know about itself? (i.e. what data does the object contain or encapsulate?)
- What does the object know about the world? (i.e. does the object know about other objects? Does it interact with them?)
- How does the object behave? (i.e. what methods/interfaces does it have?)


### Driver Code Example
It's helpful to think about an object in terms of its interfaces. For example, energetic Sally is 12 (her attributes), she's likes to jump around and hates taking naps (her behaviors). Before we write any implementation code, we can think about the "interfaces" (methods) she exposes.

```js
var sally = new Child({name: "sally", age: "12"});
sally.takeNap();   //=> false

sally.hasEnergy(); //=> true
sally.jump();      //=> true
sally.hasEnergy(); //=> true
sally.jump();      //=> true
sally.hasEnergy(); //=> true
sally.jump();      //=> false

sally.takeNap();   //=> true
sally.hasEnergy(); //=> true
```

**Try it out**:

- Clone this repo.
- From the command line, run: `node test-sally.js`.
- Can you modify `sally-demo/child.js` to make the code work?
    + You will need to fill in the empty methods to get the desired output:

    ```
        //=> sally has energy at first: true
        //=> sally refuses to jump when she is tired: true
        //=> sally has energy after a nap: true
    ```

### Exercise: Write Driver Code for your Game

Setup:

```bash
$ mkdir racing-game
$ touch racing-game/player.js
$ touch test-racing-game-player.js
```

```js
// test-racing-game-player.js

/* DRIVER CODE */
var Player = require("./racing-game/player.js");

var p1 = new Player();
var color = p1.color;
console.log("player1's color is:", color);
/* ... MORE DRIVER CODE ... */
```

Now run `node test-racing-game-player.js`. You will definitely see errors. What do they say? Maybe that `Player` is not defined? Imagine!

Let's create our `Player` constructor:

```js
// racing-game/player.js

function Player() {

}

module.exports = Player;
```

Now run your code again: `node test-racing-game-player.js`. What happens now? Do you see the name of player 1's color? What do you need to update now?

> Don't forget you can run your code in the node REPL! Just type `node` and then copy your code from `test-racing-game-player.js`!

- **Repeat the above steps for each of your player's attributes**
    + e.g. player `currentPosition`
- **Repeat the above steps for each of your player's methods**
    + e.g. `player.move()`
    + How will you confirm the method works? What steps need to be taken in what order?
- **Repeat the above steps for each of your models**
    + e.g. `Game` (knows about all the players, knows the game is over, knows who won a round)
