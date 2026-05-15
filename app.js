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
  ["The B-52's - Rock Lobster", "n4QSYx4wVQg", 7],
  ["Billie Eilish - Ocean Eyes", "viimfQi_pUw", 18],
  ["The Police - Message in a Bottle", "MbXWrmQW-OE", 14],
  ["Brigitte Bardot - La Madrague", "aN0kPQ085z0", 0],
  ["Olivia Dean - Dive", "NM4e606yFJg", 32],
  ["Kendrick Lamar - Swimming Pools (Drank)", "B5YNiCfWC3A", 28],
  ["Orelsan feat. Stromae - La pluie", "37StRy0LEbI", 39],
  ["Julien Doré - Paris-Seychelles", "cmE_aahc448", 35],
  ["Metronomy - The Bay", "DtVBCG6ThDk", 31],
  ["The Kooks - Seaside", "OgOwQvNzD-k", 0]
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
  type: "culture",
  round: "Culture G",
  level,
  tag,
  num: index + 1,
  q,
  a,
  timer: CULTURE_SECONDS
}));

const bonus = bonusData.map(([level, tag, q, a], index) => ({
  type: "culture",
  round: "Bonus",
  level,
  tag,
  num: index + 1,
  q,
  a,
  timer: CULTURE_SECONDS
}));

const blind = blindData.map(([a, ytId, start], index) => ({
  type: "blind",
  round: "Blind test",
  num: index + 1,
  q: `Extrait ${index + 1}`,
  a,
  ytId,
  start,
  end: start + BLIND_SECONDS,
  timer: BLIND_SECONDS
}));
