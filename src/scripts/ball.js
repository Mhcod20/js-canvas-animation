
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

	static BALL_WIDTH = 48;

  constructor(x,y,deltaX = 3,deltaY = -2) {
    this.x = x;
    this.y = y;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
    this.image = this.#createImage(ballImgSrc);
  }


  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  getDeltaX(){
    return this.deltaX;
  }

  getDeltaY(){
    return this.deltaY;
  }


  /* draw this ball, using the given drawing 2d context */
  draw(context) {
    context.drawImage(this.image,this.x,this.y);
  }

  move(canvas){
    let newX = this.x + this.deltaX;
    let newY = this.y + this.deltaY;
    if (newX < 0 || newX + Ball.BALL_WIDTH > canvas.width){
      this.deltaX = -this.deltaX;
    }
    if (newY < 0 || newY + Ball.BALL_WIDTH > canvas.height){
      this.deltaY = - this.deltaY;
    }
    this.x = this.x + this.deltaX;
    this.y = this.y + this.deltaY;
  }

  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }


  get width() {
    return this.image.width;
  }

  
  get height() {
    return this.image.height;
  }
  collisionWith(obstacle) {

  const a1x = this.x;
  const a1y = this.y;
  const a2x = this.x + Ball.BALL_WIDTH;
  const a2y = this.y + Ball.BALL_WIDTH;

  const aPrim1x = obstacle.x;
  const aPrim1y = obstacle.y;
  const aPrim2x = obstacle.x + obstacle.width;
  const aPrim2y = obstacle.y + obstacle.height;

  const p1x = Math.max(a1x, aPrim1x);
  const p1y = Math.max(a1y, aPrim1y);

  const p2x = Math.min(a2x, aPrim2x);
  const p2y = Math.min(a2y, aPrim2y);

  return (p1x < p2x) && (p1y < p2y);
}

}
