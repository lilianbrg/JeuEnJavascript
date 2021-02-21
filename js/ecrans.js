function afficheMenuPrincipal() {
    ctx.save();

    ctx.translate(0, 100);

    ctx.fillStyle = "pink";
    ctx.font = "30px Calibri";

    ctx.fillText("Menu Principal", 100, 100);

    ctx.fillText("Jouer Partie", 100, 300);
    

    canvas.onmousedown = traiteMouseDown;

    //assets.musicHome.play();

    ctx.restore();
}

function updateJeu() {
    //affichage du niveau
    ctx.fillText("niveau: " + niveau, 50, 50);
    ctx.fillText("Nombre de torpilles restantes: " + nombreDeTorpillesJouees, 50, 60);
    ctx.drawImage(assets.background, 0, 0, canvas.width, canvas.height);

    // 2 On dessine les objets
    monstre.draw(ctx);

    updateBalles();

    updateTorpilles();

    // 3 on déplace les objets
    monstre.move();
    //deplacerLesBalles();

    // 4 on peut faire autre chose (par ex: detecter des collisions,
    // ou prendre en compte le clavier, la souris, la manette de jeu)
    traiteCollisionsJoueurAvecBords();
}

function afficheEcranChangementNiveau() {
    ctx.save();

    ctx.translate(0, 100);

    ctx.fillStyle = "pink";
    ctx.font = "30px Calibri";

    ctx.fillText("Niveau Fini", 100, 100);

    ctx.fillText("Continuer", 100, 300);

    canvas.onmousedown = traiteMouseDown;

    ctx.restore();
}

function afficheEcranGameOver() {
    ctx.save();

    ctx.translate(0, 100);

    ctx.fillStyle = "pink";
    ctx.font = "30px Calibri";

    ctx.fillText("Game Over", 100, 100);

    ctx.fillText("Tu es quand même pas trop mauvais, réeessaie", 100, 300);

    canvas.onmousedown = traiteMouseDown;

    niveau = 1;

    ctx.restore();
}