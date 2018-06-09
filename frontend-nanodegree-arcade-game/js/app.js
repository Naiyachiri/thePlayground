// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor(row = 0, difficulty = 'easy'){
        this.sprite = 'images/enemy-bug.png'; // enemy sprite
        this.x = -100; // // 0, 100, 200, 300, 400, 500 (intervals of 100 per column)
        this.y = row // -25, 60, 145, 230, 315, 400  (intervals of 85 per row)
        this.difficulty = difficulty; // easy, med, hard change the speed of the enemy
    }
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
let time = 0;
Enemy.prototype.update = function(dt) {
    if(this.x >= 501){
        this.x = 0; // resets enemy positions once they go off screen
        return;
    }
    if (this.difficulty == 'easy') {
        this.x += 200*dt; // currently an arbitrary value - change it according to difficulty
    } 
    else if (this.difficulty == 'med') {
        this.x += 300*dt;
    }
    else if (this.difficulty == 'hard') {
        this.x += 400*dt;
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

class Player {
    constructor(sprite = 'images/char-boy.png') {
        this.sprite = sprite; // set sprite equal to inputted sprite
        this.x = 200; //default position at row 2
        this.y = 400; // default position row 5
    }
    
};

Player.prototype.handleInput = function(keypress) {
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


Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let p1 = new Player;
let e1 = new Enemy(60, 'med');
let e2 = new Enemy(145, 'hard');
let e3 = new Enemy(230);

let player = p1;
let allEnemies = [e1, e2, e3];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
