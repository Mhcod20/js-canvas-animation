

export default class Obstacle {

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }


    draw(context){
        context.fillStyle = "rgb(0,0,0)";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    //  dans la classe Obstacle
    moveLeft() {              
    this.deltaX =  - 10;   // le déplacement se fera vers la gauche, par pas de 10px
    }
    moveRight() {
    this.deltaX =  + 10;   // le déplacement se fera vers la droite, par pas de 10px
    }
    stopMoving() {
    this.deltaX = 0;
    }
    move(box) {              // déplace sans sortir des limites de *box*
    this.x = Math.max(0, Math.min(box.width - this.width, this.x + this.deltaX));
    }
    handleMoveKeys(keyManager) {
    this.stopMoving();    // on réinitialise les déplacements
    if (keyManager.left)  // touche flèche gauche pressée ?
        this.moveLeft();
    if (keyManager.right) // touche flèche droite pressée ?
        this.moveRight();
    }




}