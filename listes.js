/* ------------------------------------------------------------------
   Listes personnalisées de pays
   ------------------------------------------------------------------
   Chaque liste apparaît dans le menu déroulant des jeux, sous
   « Mes listes ». Les codes sont les codes ISO à 2 lettres : voir
   le fichier pays.md pour la liste complète (code, nom, continent).

   Pour ajouter une liste : copie un bloc { nom: ..., pays: [...] },
   change le nom et les codes, puis recharge la page du jeu.
   Un code inconnu est signalé dans la console du navigateur (F12).
   ------------------------------------------------------------------ */
const LISTES = [
  {
    nom: "Maghreb",
    pays: ["MA", "DZ", "TN", "LY", "MR", "XA"],
  },
  {
    nom: "Europe de l'Ouest",
    pays: ["FR", "DE", "BE", "NL", "LU", "CH", "AT", "GB", "IE"],
  },
  {
    nom: "Amérique centrale",
    pays: ["GT", "BZ", "HN", "SV", "NI", "CR", "PA"],
  },
  {
    nom: "Iles cheloues",
    pays: ["BS", "FK", "SB", "FJ", "TF", "TL", "TT", "TW", "VU", "DO", "PG", "BN"],
  },
];
