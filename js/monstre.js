// exemple d'objet litteral
let monstre = {
  x: 100,
  y: 100,
  l: 50,
  h: 50,
  scale: 1,
  incScale: 0,
  xOeil: 450,
  yOeil: 60,
  angle: 0,
  incAngle: 0,
  vitesseX: 0,
  vitesseY: 0,
  donneTonNom: function () {
    return "Je m'appelle Paul, je suis en x= " + this.x + " y=" + this.y;
  },
  draw: function (ctx) {
    // bonne pratique : sauver le contexte courant
    // couleur courante, taille du trait, etc. avant
    // de dessiner ou de modifier qq chose dans le contexte
    ctx.save();

    /*
    ctx.translate(this.x, this.y);
    ctx.translate(this.l / 2, this.h / 2);
    ctx.scale(this.scale, this.scale);
    ctx.rotate(this.angle);
    ctx.translate(-this.l / 2, -this.h / 2);
    */
    

    //ctx.fillRect(0, 0, this.l, this.h);
    

    ctx.drawImage(assets.vaisseau, this.x, this.y, this.l, this.h);
    //ctx.lineWidth = 3;
    //ctx.strokeStyle = "blue";
    //ctx.strokeRect(this.x,this.y,this.l,this.h);

    // On restaure le contexte
    ctx.restore();
  },
  drawOeil(ctx) {
    ctx.save();

    ctx.rotate(0.2);
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 20, 20);

    ctx.restore();
  },
  setPos: function (x, y) {
    this.x = x - this.l / 2;
    this.y = y - this.h / 2;
  },
  move: function () {
    this.x += this.vitesseX;
    this.y += this.vitesseY;
    this.angle += this.incAngle;
    this.scale += this.incScale;
    if (this.scale > 2) this.incScale = -this.incScale;
    if (this.scale < 1) this.incScale = -this.incScale;
  },
  animeYeux: function () {
    this.xOeil = 450 + Math.random() * 5;
    this.yOeil = 60 + Math.random() * 5;
  },
};

function changePositionYeux() {
  //console.log("change changePositionYeux");
  monstre.animeYeux();
}
