const CULTURE_SECONDS = 20;
const TRUE_FALSE_SECONDS = 10;
const BLIND_SECONDS = 30;

const cultureData = [
  ["Facile", "Cinéma", "Quel célèbre navire britannique coule en 1912 après avoir heurté un iceberg ?", "Le Titanic"],
  ["Facile", "Animal", "Quel animal marin est connu pour avoir trois cœurs ?", "La pieuvre / le poulpe"],
  ["Facile", "TV", "Quelle émission télé française a pour décor un fort en mer près de La Rochelle ?", "Fort Boyard"],
  ["Facile", "Aventure", "Dans Koh-Lanta, quel objet peut protéger un candidat de l'élimination ?", "Le collier d'immunité"],
  ["Facile", "Mythologie", "Dans L'Odyssée, quel héros erre en mer pendant dix ans ?", "Ulysse"],
  ["Moyenne", "Science", "Quel courant marin chaud influence fortement le climat de l'Europe occidentale ?", "Le Gulf Stream"],
  ["Moyenne", "Littérature", "Quel écrivain a écrit Le Vieil Homme et la Mer ?", "Ernest Hemingway"],
  ["Moyenne", "Littérature", "Quel roman met en scène la chasse d'une baleine blanche ?", "Moby Dick"],
  ["Moyenne", "Cinéma", "Quel réalisateur a signé Abyss, Titanic et Avatar : La Voie de l'eau ?", "James Cameron"],
  ["Moyenne", "Géo", "Quel océan porte le nom d'un titan de la mythologie grecque ?", "L'océan Atlantique"],
  ["Moyenne", "Santé", "Quelle maladie liée au manque de vitamine C touchait beaucoup les marins ?", "Le scorbut"],
  ["Moyenne", "Navigation", "Quelle unité de vitesse est utilisée en navigation maritime ?", "Le nœud"],
  ["Moyenne", "Animal", "Quel animal marin peut dormir avec une moitié de cerveau éveillée ?", "Le dauphin"],
  ["Moyenne", "Food", "Quel poisson venimeux japonais doit être préparé par des chefs spécialement formés ?", "Le fugu"],
  ["Moyenne", "Pop culture", "Dans Friends, qui explique que les homards tombent amoureux pour la vie ?", "Phoebe"],
  ["Difficile", "Pirates", "Dans Pirates des Caraïbes, quel est le nom du navire de Davy Jones ?", "Le Hollandais volant"],
  ["Difficile", "Phobie", "Quel mot désigne la peur intense des profondeurs marines ?", "La thalassophobie"],
  ["Difficile", "Exploration", "Quel navigateur a donné son nom au détroit situé au sud de l'Amérique du Sud ?", "Magellan"],
  ["Difficile", "Géo", "Dans quelle mer se jette le Jourdain ?", "La mer Morte"],
  ["Difficile", "Musique", "Quelle chanson de Luis Fonsi et Daddy Yankee a un clip tourné à Porto Rico ?", "Despacito"],
  ["Difficile", "Histoire", "Quel type de bateau est associé aux Vikings ?", "Le drakkar"]
];

const bonusData = [
  ["Bonus", "Record", "En apnée statique, le record du monde dépasse environ combien de minutes ?", "Environ 24 minutes"]
];

const blindData = [
  ["The B-52's - Rock Lobster", "./audio/01-rock-lobster.mp3.mp3"],
  ["Billie Eilish - Ocean Eyes", "./audio/02-ocean-eyes.mp3.mp3"],
  ["The Police - Message in a Bottle", "./audio/03-message-in-a-bottle.mp3.mp3"],
  ["Brigitte Bardot - La Madrague", "./audio/04-la-madrague.mp3.mp3"],
  ["Olivia Dean - Dive", "./audio/05-dive.mp3.mp3"],
  ["Kendrick Lamar - Swimming Pools (Drank)", "./audio/06-swimming-pools.mp3.mp3"],
  ["Orelsan feat. Stromae - La pluie", "./audio/07-la-pluie.mp3.mp3"],
  ["Julien Doré - Paris-Seychelles", "./audio/08-paris-seychelles.mp3.mp3"],
  ["Metronomy - The Bay", "./audio/09-the-bay.mp3.mp3"],
  ["The Kooks - Seaside", "./audio/10-seaside.mp3.mp3"]
];

const artData = [
  {
    q: "Quel artiste a peint ce tableau ?",
    a: "Hokusai",
    title: "La Grande Vague de Kanagawa",
    image: "./tableaux/01-hokusai.jpg.jpg"
  },
  {
    q: "Quel artiste a peint ce tableau ?",
    a: "J. M. W. Turner",
    title: "Le Dernier Voyage du Téméraire",
    image: "./tableaux/02-turner.jpg"
  },
  {
    q: "Quel artiste a peint ce tableau ?",
    a: "Sandro Botticelli",
    title: "La Naissance de Vénus",
    image: "./tableaux/03-botticelli.jpg"
  },
  {
    q: "Quel artiste a peint ce tableau ?",
    a: "Georges Seurat",
    title: "Une baignade à Asnières",
    image: "./tableaux/04-seurat.jpg"
  },
  {
    q: "Quel artiste a réalisé cette œuvre ?",
    a: "David Hockney",
    title: "A Bigger Splash",
    image: "./tableaux/05-hockney.jpg"
  }
];

const emojiData = [
  ["🍍 ⭐ 🧽", "Bob l'éponge"],
  ["🦈 🎶 🏖️", "Les Dents de la mer"],
  ["🚢 🧊 💔", "Titanic"],
  ["🏝️ 🏐 🧔", "Seul au monde"],
  ["🏖️ 👙 🏃‍♀️", "Alerte à Malibu"]
];

const trueFalseData = [
  ["Le corail est une plante marine.", "Faux : c'est un animal."],
  ["Un hippocampe peut bouger ses deux yeux séparément.", "Vrai"],
  ["Les requins sont des mammifères.", "Faux : ce sont des poissons."],
  ["La pieuvre a trois cœurs.", "Vrai"],
  ["La mer Morte est un océan.", "Faux"],
  ["Certains manchots plongent à plus de 500 mètres.", "Vrai"],
  ["Le corail peut blanchir quand il perd ses algues symbiotiques.", "Vrai"],
  ["Tous les poissons respirent avec des poumons.", "Faux"],
  ["Il existe des rivières sous-marines.", "Vrai"],
  ["Le sel de mer est naturellement rose.", "Faux"]
];

const culture = cultureData.map(([level, tag, q, a], index) => ({
