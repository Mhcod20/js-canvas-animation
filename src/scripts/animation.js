import Ball from './ball';

/* TYPE Animation */
export default class Animation {

  constructor(canvas, requete = null){
    this.canvas = canvas;
    this.balls = [];/*new Ball(50,50);*/
    this.context =this.canvas.getContext("2d");
    this.requete = requete;
  }

  aleaXY(n){
    return Math.floor( Math.random() * n );
    /*
    m = Math.floor(1 / Math.random());
    while (!(m < n || m > 0)){
      m = Math.floor(1 / Math.random());
    }
    return m;
    */
  }

  aleaDeltaXY(n){
    return Math.floor( Math.random() * (2 * n) - n );
  }

  addBall(){
    let x = this.aleaXY(this.canvas.width);
    let y = this.aleaXY(this.canvas.height);
    let deltaX = this.aleaDeltaXY(5);
    let deltaY = this.aleaDeltaXY(5);
    let ball = new Ball(x, y, deltaX, deltaY);
    this.balls.push(ball);
  }
  /*
  animateAll(){
    this.balls.forEach(ball => { () => this.animate(ball)});
  }
  */
  
  animate(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balls.forEach(
      ball => {
      ball.move(this.canvas);
      ball.draw(this.context);
    }
  )
  this.requete = window.requestAnimationFrame(() => this.animate()); 
  }

  startAndStop() {
    if (this.requete == null){
      this.animate();
    }else{
      window.cancelAnimationFrame(this.requete);
      this.requete = null;
    }
  }
}
