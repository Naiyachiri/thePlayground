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
Enemy.prototype.update = function(dt, playerScore) {
    
    
    if(this.x >= 501){
        this.x = -55; // resets enemy positions once they go off screen
        return;
    }
    if (this.difficulty == 'easy') {
        this.x += (200)*dt; // currently an arbitrary value - change it according to difficulty
        this.x = Math.floor(this.x); // round x values for collision detection
    } 
    else if (this.difficulty == 'med') {
        this.x += (300)*dt;
        this.x = Math.floor(this.x); // round x values for collision detection
    }
    else if (this.difficulty == 'hard') {
        this.x += (400)*dt;
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

/**
 * 
 * Udacity Parameters:
 * Now write your own player class
 * This class requires an update(), render() and
 * a handleInput() method.
 *
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
        this.difficultyRamp = 0; // set a conditional variable to determine when to ramp up game difficulty because it is connected to the enemy.update() 
    }
    
};

//use this function for the setInterval callback
Player.prototype.incrementTime = function() {
    this.timer.time ++; // increments timer by 1
    return this.timer.time; // returns time value
}

//call this function after pulling data for the endScreenModal
Player.prototype.resetTime = function() {
    if(this.start == 0) {
        clearInterval(this.timer.keeper); // stop the timer
        this.timer.time = 0; // reset the time value
        console.log('time reset!');
        return this.timer.time;
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
    m1.show(condition);
}

/**
 * MODAL CLASS
 * invovles all the modal related properties and methods
 * is only initialized once upon application start named 'm1'
 */

class Modal {
    constructor() {
        this.condition = 'defeat';
        // targetters embedded in modal object which targets the DOM
        this.$modalOuter = document.querySelector('.modal-outer');
        this.$modalTitle = document.querySelector('.modal-title');
        this.$modalContent = document.querySelector('.modal-content');
        this.$modalClose = document.querySelector('.modal-close');
        this.$modalTime = document.querySelector('.modal-time');
        this.$modalScore = document.querySelector('.modal-score');
        //stored return values for Modal methods with initial values
        this.modalScoreMsg = "You current score is " + player.score;
        this.modalTimeMsg = "The time elapsed for this run was " + player.timer.time + " seconds.";
        this.modalTitleMsg; // changes according to updateModalTitle()
        this.modalOpen = 0; // modal open close status
    }
};

Modal.prototype.show = function (newCondition) {
    this.condition = newCondition; // update condition property
    this.modalOpen = 1; // set status to open
    console.log(this.$modalOuter);
    let modalOuter = this.$modalOuter;
    modalOuter.style.visibility = 'visible';
    this.updateModal();
}

Modal.prototype.updateModal = function() {
    this.$modalTitle.innerHTML = this.updateModalTitle();
    this.$modalScore.innerHTML = this.updateScoreMsg();
    this.$modalTime.innerHTML = this.updateTimeMsg();
}

Modal.prototype.updateModalTitle = function() {
    if (this.condition == 'defeat'){
        this.modalTitleMsg = "You lost. Nice try!";
    } else {
        this.modalTitleMsg = "You won! Good Job!";
    }
    return this.modalTitleMsg;
}

Modal.prototype.updateScoreMsg = function() { 
    this.modalScoreMsg = "Your current score is " + player.score + '.';
    return this.modalScoreMsg;
}

Modal.prototype.updateTimeMsg = function() {
    this.modalTimeMsg = "The time elapsed for this run was " + player.timer.time + " seconds.";
    return this.modalTimeMsg;
}

Modal.prototype.handleModalClose = function() { // event handler for modal closing
    this.modalOpen = 0;
    this.$modalOuter.style.visibility = 'hidden';
    player.start = 0; //prep reset function to reset time
    player.resetTime(); // call timer reset
}

Modal.prototype.initialModalSetup = function () { //event listener for close button on modal
    this.$modalClose.addEventListener('click', function(e){
        m1.handleModalClose();
    });
}
/**
 * create a function here that determines enemy creation based on player stats
 */

 /**
  * initialize player(s)
  * param is sprite address
  */

let p1 = new Player('images/char-boy.png');

/**
 * initialize enemy/ies
 * // enemy param1 = y axis position, enemy param 2 = difficulty(easy,med,hard = speed & radius)
 */

let e1 = new Enemy(60, 'med');
let e2 = new Enemy(145, 'hard');
let e3 = new Enemy(230);

/**
 *  connector variables which allow engine.js to locate players/enemies
 */ 
let player = p1; // Place the player object in a variable called player
let allEnemies = [e1, e2, e3]; // Place all enemy objects in an array called allEnemies

/**
 * initialize modal object 
 */

let m1 = new Modal;
m1.initialModalSetup(); // sets up event listeners for modal

/**
 *  MODAL RELATED FUNCTIONS
 * 
 */

 //CONVERTED to Object Modal
// function showModal(condition) {
//     modalOpen = 1;
//     clearInterval(player.timer.keeper); // stop timer
//     document.querySelector('.modal-outer').style.visibility = 'visible';
//     updateModal(condition);
// }


// converted to object Modal 
// function updateModal(condition) { 
//    //basic modal target
//     const modalTitle = document.querySelector('.modal-title');
//     const modal = document.querySelector('.modal-outer');
//     const modalScore = document.querySelector('.modal-score');
//     const modalTime = document.querySelector('.modal-time');

//     let modalScoreMsg = "Your current score is " + player.score;
//     let modalTimeMsg = "The time elapsed for this run was " + player.timer.time + ".";
//     let modalTitleMsg; // determines title message based on end condition passed through engine
//     if (condition == 'defeat') {
//         modalTitleMsg = "You lost! Nice try!";        
//     } else {
//         modalTitleMsg = "You won! Good Job!";
//     };

//     modalTitle.innerHTML = modalTitleMsg; // update modal end condition msg
//     modalScore.innerHTML = modalScoreMsg; // update the modal score message
//     modalTime.innerHTML = modalTimeMsg; // update modal time message

//     const modalClose = document.querySelector('.modal-close');
//    //set up listeners to close modal

//    function handleModalClose() {
//        modalOpen = 0;
//        modal.style.visibility = 'hidden';
//            player.start = 0; // set status to reset timer on loss
//            player.resetTime(); // fulfill timer reset
//    }

//    modalClose.addEventListener('click', function(e){
//        handleModalClose();
//    });
// };

// This listens for key presses and sends the keys to your character
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    if (m1.modalOpen == 1){ //also closes the modal on keypress
        if (e.keyCode == 38) {
            return; // does not register up key (incase of button mashing)
        }
        m1.handleModalClose();
        return; //to prevent the closing keypress from also moving the sprite
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
        document.querySelector('canvas').focus();``
    }
}

characterForm.addEventListener('click', function(event){
    handleCharacterFormClick(event);
}); // event listener for form