// Exemple de classe
class Balle {
  x;
  y;
  rayon;
  couleur = "black";
  vitesseX = 0;
  vitesseY = 0;
  touche = 0;

  constructor(x, y, rayon, couleur, vitesseX, vitesseY) {
    this.x = x;
    this.y = y;
    this.rayon = rayon;
    if (couleur) this.couleur = couleur;
    if (vitesseX) this.vitesseX = vitesseX;
    if (vitesseY) this.vitesseY = vitesseY;
  }

  draw(ctx) {
    ctx.save();

    ctx.translate(this.x, this.y);

    /*
    // dessin d'un cercle, on utilise le mode "chemin"
    ctx.beginPath();

    // cx, cy, rayon, angle départ, angle arrivée en radians
    ctx.arc(0, 0, this.rayon, 0, 2 * Math.PI);

    // on donne l'ordre d'afficher le chemin
    ctx.fillStyle = this.couleur;
    ctx.fill(); // en formes pleines
    */

    ctx.drawImage(assets.alien, this.x, this.y, this.rayon, this.rayon);

    /*
    ctx.lineWidth = 10;
    ctx.strokeStyle = "yellow";
    ctx.stroke(); // en fil de fer

    */
    ctx.restore();
  }

  move() {
    this.x += this.vitesseX;
    this.y += this.vitesseY;
  }
}

/*****************************************
    Gestion des Balles
*******************************************/

//Cette fonction permet de générer des ennemis aléatoirement sur la map
function creerDesBalles(nb) {
  let tabCouleurs = ["red", "green"];
  for (let i = 1; i < nb; i++) {
    if (i % 5 == 0) {
      tabCouleurs.push("red");
    }
  }

  for (let i = 0; i < nb; i++) {
    //Génerer la position
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    //générer le rayon
    let r = Math.random() * 30;
    if (r < 10) {
      r = 10;
    }

    // Vérifier si il n'y a pas déja une collision avec le monstre et l'éviter
    if (circRectsOverlap(monstre.x, monstre.y, monstre.l + 50, monstre.h + 50, x, y, r + 50)) {
      x = monstre.x + 200;
      y = monstre.y + 200;
      console.log("collision évitée");
    }

    let indexCouleur = Math.floor(Math.random() * tabCouleurs.length);
    let couleur = tabCouleurs[indexCouleur];
    let vx = -5 + Math.random() * 10;
    let vy = -5 + Math.random() * 10;

    let b = new Balle(x, y, r, couleur, vx, vy);

    // on ajoute la balle au tableau
    tableauDesBalles.push(b);
  }
  //Créer obligatoirement une balle verte 
  let r = Math.random() * 30;

  //vérifier son rayon
  if (r < 10) {
    r = 10;
  }

  let verte = new Balle(Math.random() * canvas.width, Math.random() * canvas.height, r, "green", -5 + Math.random() * 10, -5 + Math.random() * 10);

  tableauDesBalles.push(verte);
}

function updateBalles() {
  // utilisation d'un itérateur sur le tableau
  tableauDesBalles.forEach((b) => {
    b.draw(ctx);
    traiteCollisionsBalleAvecBords(b);
    traiteCollisionBalleAvecMonstre(b);
    b.move();
  });
}