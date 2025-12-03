// install package.json and prompt-sync
// npm init -y
// npm install prompt.sync

const prompt = require("prompt-sync")({ sigint: true });

// DONE: Game elements/assets constants
const GRASS = '░';
const HOLE = 'O';
const HAT = '^';
const PLAYER = '*';

// DONE: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// DONE: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_QUIT / MSG_INVALID message constants
const MSG_UP = "\n****************************\n\n------- You moved UP -------\n";
const MSG_DOWN = "\n****************************\n\n------ You moved DOWN ------\n";
const MSG_LEFT = "\n****************************\n\n------ You moved LEFT ------\n";
const MSG_RIGHT = "\n****************************\n\n------ You moved RIGHT -----\n";
const MSG_QUIT = "\n****************************\n\n---- You QUIT the game ----";
const MSG_INVALID = "\n****************************\nInvalid entry.\n";
const MSG_WELCOME = "\n****************************\n  WELCOME TO FIND YOUR HAT  \n****************************\n";

// DONE: WIN / LOSE / OUT / QUIT messages constants
const WIN = "      CONGRATULATIONS!      \n\nYou've found the HAT. You won!\n\n****************************\n"
const LOSE = "You fell into a hole, you lost!\n"
const OUT = "You went out-of-bound, you lost!\n"

// DONE: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 28;
const PERCENT = 0.2; // variable that set the % of randomization of holes in the game field, now it's 20% 


class Field {
  // DONE: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
  // To generate the keyin "/**" and press ENTER

  /**
   * 
   * @param {Array} field - field is passed in as an Array to populate the property field of this class's instance
   */
  constructor(field = null) {
    this.field = field;
    this.gamePlay = false;        // game is by default = false, game have not start
    this.playerPos = { x: 0, y: 0 };  // initial Position of the player at 0,0
  }

  /**
   * DONE: generateField is a static method, returning a 2D array of the fields
   * @param {Number} rows     - rows for the field
   * @param {Number} cols     - cols for the field
   * @param {percent} percent - percentage of random holes on the field
   * @returns {Array}         - returns a 2D array to be used by the instance of the game
   */
  static generateField(rows = 8, cols = 8, percent = 0.1) {
    const map = new Array();
    for (let row = 0; row < rows; row++) {    // for each row
      map[row] = new Array();                 // create new Array

      for (let col = 0; col < cols; col++) {
        map[row][col] = Math.random() > percent ? GRASS : HOLE; // STORE the GRASS array percent is 0.1
      }
    }

    // returns map of the field, default is 8x8
    return map;
  }

  /**
   * DONE: welcomeMessage is a static method, displays a string
   * @param {String} msg - a string value to display a string
   */
  static welcomeMessage(msg) {
    console.log(msg);
  }

  // DONE: setHat positions the hat along a random x and y position within field array
  setHat() {
    // position of the HAT
    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1; // ( 0 to 3) + 1, therefore min for x= 1
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1; // ( 0 to 3) + 1, therefore min for y= 1
    this.field[xHat][yHat] = HAT;
  }

  // DONE: printField displays the updated status of the field 
  printField() {
    this.field.forEach((row) => {
      console.log(row.join(""))
    });
  }

  // DONE: updateMove displays the move (key) entered by the user
  /**
   * 
   * @param {String} m - passes in the value representing the player's movement 
   * @returns 
   */
  updateMove(m = "") {
    if (m === UP) return console.log(MSG_UP);            // Tell user he move up
    if (m === DOWN) return console.log(MSG_DOWN);        // Tell user he move down
    if (m === LEFT) return console.log(MSG_LEFT);         // Tell user he move left
    if (m === RIGHT) return console.log(MSG_RIGHT);       // Tell user he move right
    if (m === QUIT) return console.log(MSG_QUIT);      // Tell user he quit the game
    console.log(MSG_INVALID);
  }

  // !! TODO: updateGame Assessment Challenge
  /**
   * 
   * @param {*} m - to accept the value of the player's move: UP | DOWN | LEFT | RIGHT
   */
  updateGame(m = "") {
    // 1. capture the players currX and currYposition first
    const userInput = String(m).toLowerCase();

    let newRow = this.playerPos.x;
    let newCol = this.playerPos.y;

    switch (userInput) {
      case UP:
        newRow--;
        break;
      case DOWN:
        newRow++;
        break;
      case LEFT:
        newCol--;
        break;
      case RIGHT:
        newCol++;
        break;
      default:
        console.log(MSG_INVALID);
        break;
    }

    this.playerPos.x = newRow;
    this.playerPos.y = newCol;

    // 2. if player x and y position is a hole
    // LOSE
    // process.exit()
    if (
      this.field[newRow] &&
      this.field[newRow][newCol] === HOLE
    ) {
      console.log(LOSE);
      process.exit();
    }
    // 3. if player x and y position is out of field
    // LOSE
    // process.exit()
    if (
      newRow < 0 || newRow >= ROWS ||
      newCol < 0 || newCol >= COLS
    ) {
      console.log(OUT);
      process.exit();
    }
    // 4. if player x and y position === x and y of the HAT
    // WIN
    // process.exit()
    if (this.field[newRow][newCol] === HAT) {
      console.log(WIN);
      process.exit();
    }
    // otherwise move the player to the new x and y position based on move
    this.field[newRow][newCol] = PLAYER;

  }

  // DONE: start() a method of the class to start the game
  // immediate-left and immediate-right, immediate-top and immediate-bottom is blocked
  // if(hatBlocked(this.field) && !this.gamePlay)  
  // this.field = Field.generateField();

  start() {

    this.gamePlay = true;       // start the game
    this.field[0][0] = PLAYER;  // positioning the player on the field, based on player's default position
    this.setHat();              // the postion of the Hat


    // while gamePlay === true, Track players movement
    do {
      
      this.printField();          // print the formatted field
      const input = prompt("\n****************************\n****** MAKE YOUR MOVE ******\n****************************\n          Controls          \n  UP: w |  DOWN: s |\nLEFT: a | RIGHT: d | Quit: q\n\nWhich way will you go: ");

      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          break;
        case DOWN:
          this.updateMove(DOWN);
          break;
        case LEFT:
          this.updateMove(LEFT);
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          break;
        case QUIT:
          this.updateMove(QUIT);
          break;
        default:
          this.updateMove(MSG_INVALID);
          break;
      }

      if (input === QUIT)
        this.gamePlay = false; // process.exit(); - another function to exit the program

      // TODO
      this.updateGame(input);

    } while (this.gamePlay);
  }

  t
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// DONE: Generate aa welcome message
Field.welcomeMessage(MSG_WELCOME);

// DONE: Create a new instance of the game
const game = new Field(gameField);

// DONE: Invoke method start(...) from the instance of game object
game.start();


