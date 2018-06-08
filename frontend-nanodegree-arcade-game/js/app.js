// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    constructor(row = 0, difficulty = 'easy'){
        this.sprite = 'images/enemy-bug.png'; // enemy sprite
        this.x = -100; // // 0, 100, 200, 300, 400, 500 (intervals of 100 per column)
        this.y = row // -25, 60, 145, 230, 315, 400  (intervals of 85 per row)
        this.difficulty = 'easy'; // easy, med, hard
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
    this.x += 200*dt; // 
    time ++;
    console.log(time/100);
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

let Player = function (){
    this.sprite = 'images/char-boy.png'
    this.x = 200; //default position at row 2
    this.y = -25; // default position row 5
};

Player.prototype.handleInput = function(keypress) {
    if(keypress == 'down') {
        if(this.y <= 315) { // set lower limit to 315
            this.y += 85;
        } else {
            return; // if the player has reached the bottom do nothing
        }
        
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
let e1 = new Enemy(60);
let e2 = new Enemy(145);
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
