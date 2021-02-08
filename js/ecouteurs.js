let mousePos = {};

function traiteMouseDown(event) {
  switch (etatDuJeu) {
    case "menuPrincipal":
      etatDuJeu = "jeuEnCours";
      break;
    case "ecranChangementDeNiveau":
      changeNiveau(); //balles a agmenter ou peu importe
      //niveauCourant++;
      etatDuJeu = "jeuEnCours";
      break;
    case "gameOver":
      etatDuJeu = "menuPrincipal";
      break;
  }
  //console.log("Souris clickée dans le canvas bouton " + event.button);
  //console.log("Clickée en x = " + mousePos.x + " y = " + mousePos.y);
}

function traiteMouseUp(event) {
  //console.log("Souris relâchée dans le canvas bouton " + event.button);

}

function traiteMouseMove(event) {
  //console.log("Souris déplacée dans le canvas");
  // pour prendre en compte les marges, le css, etc.
  var rect = canvas.getBoundingClientRect();

  mousePos.x = event.clientX - rect.left;
  mousePos.y = event.clientY - rect.top;

  //console.log("Souris en x = " + mousePos.x + " y = " + mousePos.y);

  monstre.setPos(mousePos.x, mousePos.y);
}

function traiteKeyDown(event) {

  if (etatDuJeu = "jeuEnCours"){
    switch (event.key) {
      case "ArrowLeft":
        creerUneTorpille("left");
        break;
      case "ArrowRight":
        creerUneTorpille("right");
        break;
      case "ArrowUp":
        creerUneTorpille("up");
        break;
      case "ArrowDown":
        creerUneTorpille("down");
        break;
    }
  }
}

function traiteKeyUp(event) {
  
}
