// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor(row = 0, difficulty = 'easy'){
        this.sprite = 'images/enemy-bug.png'; // enemy sprite
        this.x = -100; // // 0, 100, 200, 300, 400, 500 (intervals of 100 per column)
        this.y = row // -25, 60, 145, 230, 315, 400  (intervals of 85 per row)
        this.difficulty = difficulty; // easy, med, hard change the speed of the enemy
        this.speed; // initialize speed property
        this.radius; // initialize radius property

        switch(this.difficulty) { // depending on enemy difficulty, the speed and radius change
            case 'easy':
                this.speed = 200;
                this.radius = 1;
                break;
            case 'med':
                this.speed = 300;
                this.radius = 3;
                break;
            case 'hard':
                this.speed = 400;
                this.radius = 5;
                break;
        }
    }
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between tick
Enemy.prototype.update = function(dt) {
    if(this.x >= 501){
        this.x = -25; // resets enemy positions once they go off screen
        return;
    }
    if (this.difficulty == 'easy') {
        this.x += 200*dt; // currently an arbitrary value - change it according to difficulty
        this.x = Math.floor(this.x); // round x values for collision detection
    } 
    else if (this.difficulty == 'med') {
        this.x += 300*dt;
        this.x = Math.floor(this.x); // round x values for collision detection
    }
    else if (this.difficulty == 'hard') {
        this.x += 400*dt;
        this.x = Math.floor(this.x); // round x values for collision detection
    }

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

/**
 * the player is directly related to: (so if you need to modify these you can find them below)
 * player properties
 * victory conditions
 * timer/score handlers
 * 
 */
class Player {
    constructor(sprite = 'images/char-boy.png') {
        this.sprite = sprite; // set sprite equal to inputted sprite
        this.x = 200; //default position at row 2
        this.y = 400; // default position row 5
        this.score = 0; // score keeper for player
        this.timer = {time: 0}; // setup storage for timer keeper
        this.start = 0; // setup a conditional for when to begin incrementing time
    }
    
};

//use this function for the setInterval callback
Player.prototype.incrementTime = function() {
    this.timer.time ++; // increments timer by 1
    return this.timer.time; // returns time value
}

//call this function after pulling data for the endScreenModal
Player.prototype.resetTime = function() {
    if(this.start !== 1) {
        clearInterval(this.timer.keeper); // stop the timer
        this.timer.time = 0; // reset the time value
    }
}

Player.prototype.handleInput = function(keypress) {
    if (this.start == 0) {
        this.start = 1; //begin incrementing time with updates
        /**
         * setup a variable in timer to use in clearInterval() later to stop the timer
         */
        this.timer.keeper = setInterval(function(){player.incrementTime()}, 1000);
    }

    switch(keypress) {
        case 'down':
            if (this.y <= 315) { // set lower limit to 315
                this.y += 85; // increment player position by 1 row
            } else {
                break; // if the player has reached the bottom do nothing
            }
            break;

        case 'up':
            if (this.y >= 60) {
                this.y -= 85; // decrement player position by 1 row
            } else {
                break; // do nothing once top is reached
            }
            break;

        case 'left':
            if (this.x >= 100) {
                this.x -= 100; // decrement player position by 1 column
            } else {
                break; // do nothing once leftside is reached
            }
        break;

        case 'right':
            if (this.x <=301) {
                this.x +=100; // increment player position by 1 column
            } else {
                break; // do nothing once rightside is reached
            }
        break;

        default:
        break;
    }
}

// update function is called every tick of dt by the game's engine, so anything you want to cycle repeatedly include here (~300ms rate)
Player.prototype.update = function(dt) {
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleEnd = function(condition) {
    showModal(condition);
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let p1 = new Player('images/char-boy.png');
let e1 = new Enemy(60, 'med');
let e2 = new Enemy(145, 'hard');
let e3 = new Enemy(230);

let player = p1;
let allEnemies = [e1, e2, e3];

/**
 *  MODAL RELATED FUNCTIONS
 * 
 */

let modalOpen = 0; // status for determining of modal is open
function showModal(condition) {
    modalOpen = 1;
    document.querySelector('.modal-outer').style.visibility = 'visible';
    updateModal(condition);
}

function updateModal(condition) { 
   //basic modal target
    const modalTitle = document.querySelector('.modal-title');
    const modal = document.querySelector('.modal-outer');
    const modalScore = document.querySelector('.modal-score');
    const modalTime = document.querySelector('.modal-time');

    let modalScoreMsg = "Your current score is " + player.score;
    let modalTimeMsg = "The time elapsed for this run was " + player.timer.time + ".";
    let modalTitleMsg; // determines title message based on end condition passed through engine
    if (condition == 'defeat') {
        modalTitleMsg = "You lost! Nice try!";        
    } else {
        modalTitleMsg = "You won! Good Job!";
    };

    modalTitle.innerHTML = modalTitleMsg; // update modal end condition msg
    modalScore.innerHTML = modalScoreMsg; // update the modal score message
    modalTime.innerHTML = modalTimeMsg; // update modal time message

    const modalClose = document.querySelector('.modal-close');
    const modalOuter = document.querySelector('.modal-outer');
   //set up listeners to close modal

   function handleModalClose() {
       modalOpen = 0;
       modal.style.visibility = 'hidden';
           player.start = 0; // set status to reset timer on loss
           player.resetTime(); // fulfill timer reset
   }

   modalClose.addEventListener('click', function(e){
       handleModalClose();
   });
};

// This listens for key presses and sends the keys to your character
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    if (modalOpen == 1){ // prevents any inputs being processed when modal is open
        return;
    }

    player.handleInput(allowedKeys[e.keyCode]);
});

/**
 * HUD for character selection!
 */
//set up target for character form
let characterForm = document.querySelector('#character-select-form');

function handleCharacterFormClick(event) {
    let value = event.target.value;

    if (value !== undefined) {
        let newsprite = 'images/' + value + '.png';
        console.log(newsprite);
        player.sprite = 'images/'+ value + '.png';
        document.querySelector('canvas').focus();
    }
}

characterForm.addEventListener('click', function(event){
    handleCharacterFormClick(event);
}); // event listener for form