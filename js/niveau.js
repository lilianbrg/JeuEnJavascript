/*******************************************************************
 *                       Gestion Niveaux
 *******************************************************************/
function changeNiveau() {

    if (checkIfResteVertes()) {
      etatDuJeu = "ecranChangementDeNiveau";
      niveau++;
      tableauDesBalles = [];
      torpillesEnJeu = [];
      nombreDeTorpillesJouees = 0;
      creerDesBalles(niveau);
    }
  }
  
  function checkIfResteVertes() {
    for (let i = 0; i < tableauDesBalles.length; i++) {
      if (tableauDesBalles[i].couleur == "green") {
        return false;
      }
    }
    return true;
  }