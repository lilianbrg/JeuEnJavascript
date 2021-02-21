
window.onload = init;

let canvas;
let ctx;

// ici on va stocker les objets graphiques du jeu, ennemis, etc.
let tableauDesBalles = [];
let niveau;
let etatDuJeu = "menuPrincipal";
let torpillesEnJeu = [];
let nombreDeTorpillesJouees = 1;
let assets;
let playMusicHome = 0;
let playLoose = 0;

niveau = 1;

/* *******************************************************           
    
                  PROGRAMME PRINCIPAL                      *

**********************************************************/

function init() {
  console.log("Page Chargée ! DOM ready ! Toutes les ressources de la page sont utilisables.");

  loadAssets(startGame);
}

function startGame(assetsLoaded) {
  // On récupère grace à la selector API un pointeur dans le canvas
  assets = assetsLoaded;
  canvas = document.querySelector("#myCanvas");

  window.addEventListener('resize', function(){
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth; 
  });
  
  ctx = canvas.getContext("2d");

  
  
  //console.log(assets.vaisseau);

  // On ajoute des écouteurs souris/clavier sur le canvas
  canvas.onmousedown = traiteMouseDown;
  canvas.onmouseup = traiteMouseUp;
  canvas.onmousemove = traiteMouseMove;

  document.onkeydown = traiteKeyDown;
  document.onkeyup = traiteKeyUp;

  // Initialisation du jeu

  console.log(monstre.donneTonNom());



  creerDesBalles(niveau);

  //assets.musicHome.play();
  requestAnimationFrame(animationLoop);
}

/********************************************************
 *                    ANIMATION LOOP                    *
 ********************************************************/

// animation à 60 images/s
function animationLoop() {
  // 1 on efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let n = 1;
  switch (etatDuJeu) {
    case "menuPrincipal":
      afficheMenuPrincipal();
      if (playMusicHome == 0){
        assets.musicHome.play();
        playMusicHome = 1;
      }
      if (playLoose == 1){
        playLoose =0;
      }
      //assets.musicHome.pause();
      //assets.musicHome.play();
      break;
    case "jeuEnCours":
      if (playMusicHome == 1){
        assets.musicHome.stop();
        playMusicHome = 0;
      }
      updateJeu();
      break;
    case "ecranChangementDeNiveau":
      afficheEcranChangementNiveau();
      break;
    case "gameOver":
      niveau = 1;
      tableauDesBalles = [];
      torpillesEnJeu = [];
      creerDesBalles(niveau);
      afficheEcranGameOver();
      if (playLoose == 0){
        assets.loose.play();
        playLoose = 1;
      }
      break;
  }
  // 5 On demande au navigateur de rappeler la fonction
  // animationLoop dans 1/60ème de seconde
  requestAnimationFrame(animationLoop);
}

