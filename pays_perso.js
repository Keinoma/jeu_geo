/* ------------------------------------------------------------------
   Pays personnalisés (formes dessinées à la main)
   ------------------------------------------------------------------
   Chaque pays est un polygone simple, défini par des points
   [longitude, latitude] (dans cet ordre !). Pas besoin de fermer la
   forme ni de se soucier du sens de rotation : c'est géré par le jeu.

   Champs :
     code       obligatoire : 2 lettres, qui ne doit pas déjà exister
                (voir pays.md). Sert aussi dans listes.js.
     nom        obligatoire : nom affiché dans le jeu
     coords     obligatoire : liste de points [lon, lat] (3 minimum)
     continent  optionnel : AF, NA, SA, AS, EU ou OC (pour le filtre)
     capitale   optionnel : nom de la capitale
     capitaleLL optionnel : [lon, lat] de la capitale
                (sans capitale, le pays est absent du mode capitales)
     voisins    optionnel : codes des pays voisins, pour frontieres.html
   ------------------------------------------------------------------ */
const PAYS_PERSO = [
  {
    code: "XA",
    nom: "Carrélande",
    continent: "AF",
    capitale: "Carréville",
    capitaleLL: [-30, 10],
    coords: [[-35, 5], [-25, 5], [-25, 15], [-35, 15]],   // un carré au milieu de l'Atlantique
    voisins: [],
  }
];
