class Torpille {
    x;
    y;
    vitesseX = 0;
    vitesseY = 0;
    rayon = 3;
  
    constructor(x, y, vitesseX, vitesseY) {
      this.x = x;
      this.y = y;
      if (vitesseX) this.vitesseX = vitesseX;
      if (vitesseY) this.vitesseY = vitesseY;
    }
  
    draw(ctx) {
      ctx.save();
  
      ctx.translate(this.x, this.y);
  
      // dessin d'un cercle, on utilise le mode "chemin"
      ctx.beginPath();
  
      // cx, cy, rayon, angle départ, angle arrivée en radians
      ctx.arc(0, 0, this.rayon, 0, 2 * Math.PI);
  
      // on donne l'ordre d'afficher le chemin
      ctx.fillStyle = "black";
      ctx.fill(); // en formes pleines
  
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

  torpillesEnJeu.push(t);

  console.log(torpillesEnJeu);
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
