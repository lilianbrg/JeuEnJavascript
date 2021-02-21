class Torpille {
    x;
    y;
    vitesseX = 0;
    vitesseY = 0;
    rayon = 25;
  
    constructor(x, y, vitesseX, vitesseY) {
      this.x = x;
      this.y = y;
      if (vitesseX) this.vitesseX = vitesseX;
      if (vitesseY) this.vitesseY = vitesseY;
    }
  
    draw(ctx) {
      ctx.save();

      switch (this.vitesseX) {
        case -5:
          ctx.drawImage(assets.bulletleft, this.x, this.y, this.rayon, this.rayon);
          break;
        case 5:
          ctx.drawImage(assets.bulletright, this.x, this.y, this.rayon, this.rayon);
          break;
      }

      switch(this.vitesseY){
        case -5:
          ctx.drawImage(assets.bullettop, this.x, this.y, this.rayon, this.rayon);
          break;
        case 5:
          ctx.drawImage(assets.bulletbottom, this.x, this.y, this.rayon, this.rayon);
          break;
      }
      ctx.lineWidth = 3;
      ctx.strokeStyle = "blue";
      ctx.strokeRect(this.x,this.y,this.l,this.h);
      
      //ctx.drawImage(assets.bulletleft, this.x, this.y, this.rayon, this.rayon);
  
      ctx.restore();
    }
    
  
    move() {
      this.x += this.vitesseX;
      this.y += this.vitesseY;
    }
}


function creerUneTorpille(direction) {
  let vx = 0;
  let vy = 0;

  if (nombreDeTorpillesJouees >= niveau * 10){
    nombreDeTorpillesJouees = 0;
    etatDuJeu = "gameOver" ;   
  } else {
    nombreDeTorpillesJouees++;
  }

  switch (direction) {
    case "up":
      vy = -5;
      console.log(assets.musicHome.paused);
      break;
    case "down":
      vy = 5;
      break;
    case "left":
      vx = -5
      break;
    case "right":
      vx = 5;
      break;
  }

  let t = new Torpille(monstre.x + (monstre.l/2), monstre.y, vx, vy);
  assets.laser.play();

  torpillesEnJeu.push(t);

  //console.log(torpillesEnJeu);
}

function updateTorpilles() {
  //console.log("entrée dans");
  torpillesEnJeu.forEach((t) => {
    t.draw(ctx);
    tableauDesBalles.forEach((b) =>{
      traiteCollisionBalleAvecTorpille(b,t);
    });
    traiteCollisionTorpilleAvecBords(t);
    t.move();
  });
}
