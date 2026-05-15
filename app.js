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
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Wave_off_Kanagawa2.jpg"
  },
  {
    q: "Quel artiste a peint ce tableau ?",
    a: "J. M. W. Turner",
    title: "Le Dernier Voyage du Téméraire",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Turner%2C_The_Fighting_Temeraire.jpg"
  },
  {
    q: "Quel artiste a peint ce tableau ?",
    a: "Sandro Botticelli",
    title: "La Naissance de Vénus",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
  },
  {
    q: "Quel artiste a peint ce tableau ?",
    a: "Georges Seurat",
    title: "Une baignade à Asnières",
    image: "./images/seurat.jpg"
  },
  {
    q: "Quel artiste a réalisé cette œuvre ?",
    a: "David Hockney",
    title: "A Bigger Splash",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b7/A_Bigger_Splash%2C_David_Hockney%2C_1967.jpg"
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

const blind = blindData.map(([a, audioSrc], index) => ({
  type: "blind",
  round: "Blind test",
  num: index + 1,
  q: `Extrait ${index + 1}`,
  a,
  audioSrc,
  timer: BLIND_SECONDS
}));

const art = artData.map((item, index) => ({
  ...item,
  type: "art",
  round: "Tableaux",
  num: index + 1,
  timer: CULTURE_SECONDS
}));

const emojis = emojiData.map(([q, a], index) => ({
  type: "emoji",
  round: "Émojis",
  num: index + 1,
  q,
  a,
  timer: CULTURE_SECONDS
}));

const trueFalse = trueFalseData.map(([q, a], index) => ({
  type: "truefalse",
  round: "Vrai ou faux",
  num: index + 1,
  q,
  a,
  timer: TRUE_FALSE_SECONDS
}));

const slides = [...culture, ...bonus, ...blind, ...art, ...emojis, ...trueFalse];
const roundTotals = slides.reduce((totals, slide) => {
  totals[slide.round] = (totals[slide.round] || 0) + 1;
  return totals;
}, {});

const state = {
  index: Number(localStorage.getItem("glq:index") || 0),
  timer: 0,
  timerMax: 0,
  timerId: null,
  paused: false,
  revealed: false
};

const el = {
  cover: document.getElementById("cover"),
  shell: document.getElementById("quizShell"),
  roundKicker: document.getElementById("roundKicker"),
  timerWrap: document.getElementById("timerWrap"),
  timerDisp: document.getElementById("timerDisplay"),
  ringFill: document.getElementById("ringFill"),
  progress: document.getElementById("progressLabel"),
  content: document.getElementById("contentArea"),
  answerBar: document.getElementById("answerBar"),
  answerText: document.getElementById("answerText"),
  jumpMenu: document.getElementById("jumpMenu"),
  playBtn: document.getElementById("playBtn"),
  stopBtn: document.getElementById("stopBtn"),
  pauseBtn: document.getElementById("pauseBtn"),
  audioPlayer: document.getElementById("audioPlayer")
};

const CIRC = 2 * Math.PI * 18;

function startTimer(seconds) {
  clearInterval(state.timerId);
  state.timer = seconds;
  state.timerMax = seconds;
  state.paused = false;
  el.pauseBtn.textContent = "Pause";
  renderTimer();
  state.timerId = setInterval(tick, 1000);
}

function tick() {
  if (state.paused) return;
  state.timer = Math.max(0, state.timer - 1);
  renderTimer();
  if (state.timer === 0) clearInterval(state.timerId);
}

function resetTimer() {
  clearInterval(state.timerId);
  state.timer = 0;
  state.timerMax = 0;
  state.paused = false;
  el.pauseBtn.textContent = "Pause";
  renderTimer();
}

function pauseTimer() {
  if (state.timerMax === 0) return;
  state.paused = !state.paused;
  el.pauseBtn.textContent = state.paused ? "Reprendre" : "Pause";
}

function renderTimer() {
  if (state.timerMax === 0) {
    el.timerDisp.textContent = "—";
    el.timerWrap.className = "tl-timer";
    el.ringFill.style.strokeDashoffset = CIRC;
    return;
  }
  el.timerDisp.textContent = String(state.timer);
  el.ringFill.style.strokeDashoffset = CIRC * (1 - state.timer / state.timerMax);
  el.timerWrap.className = state.timer === 0 ? "tl-timer done" : state.timer <= 5 ? "tl-timer low" : "tl-timer";
}

function playMedia() {
  const slide = slides[state.index];
  if (slide.type !== "blind") return;

  stopMedia();
  el.audioPlayer.src = slide.audioSrc;
  el.audioPlayer.currentTime = 0;
  el.audioPlayer.play();
  startTimer(slide.timer);
}

function stopMedia() {
  if (!el.audioPlayer) return;
  el.audioPlayer.pause();
  el.audioPlayer.currentTime = 0;
  el.audioPlayer.removeAttribute("src");
}

function buildContent(slide) {
  if (slide.type === "culture") {
    const bonusClass = slide.round === "Bonus" ? " bonus" : "";
    return `
      <div class="culture-card">
        <p class="round-label${bonusClass}">${slide.level} · ${slide.tag}</p>
        <h1>${slide.q}</h1>
      </div>
    `;
  }

  if (slide.type === "blind") {
    return `
      <div class="blind-card">
        <div class="blind-note">♪</div>
        <div class="blind-extrait">${slide.q}</div>
        <div class="blind-hint">Titre + artiste</div>
      </div>
    `;
  }

  if (slide.type === "emoji") {
    return `
      <div class="emoji-card">
        <p class="round-label">Film · série · émission</p>
        <div class="emoji-display">${slide.q}</div>
      </div>
    `;
  }

  if (slide.type === "art") {
    return `
      <div class="visual-card">
        <div class="visual-image-wrap"><img src="${slide.image}" alt=""></div>
        <p class="visual-label">${slide.q}</p>
      </div>
    `;
  }

  if (slide.type === "truefalse") {
    return `
      <div class="truefalse-card">
        <p class="round-label">Vrai ou faux</p>
        <h1>${slide.q}</h1>
      </div>
    `;
  }

  return "";
}

function render() {
  const slide = slides[state.index];
  stopMedia();
  state.revealed = false;
  el.answerBar.hidden = true;
  el.roundKicker.textContent = slide.round;
  el.progress.textContent = `${slide.num} / ${roundTotals[slide.round]}`;
  el.content.innerHTML = buildContent(slide);
  el.playBtn.hidden = slide.type !== "blind";
  el.stopBtn.hidden = slide.type !== "blind";
  resetTimer();
  el.jumpMenu.value = String(state.index);
  localStorage.setItem("glq:index", String(state.index));
}

function buildJumpMenu() {
  el.jumpMenu.innerHTML = slides
    .map((slide, index) => `<option value="${index}">${slide.round} — Q${slide.num}</option>`)
    .join("");
}

function startSlideTimerIfNeeded() {
  const slide = slides[state.index];
  if (slide.type !== "blind") startTimer(slide.timer);
}

function goNext() {
  if (state.index >= slides.length - 1) return;
  state.index += 1;
  render();
  startSlideTimerIfNeeded();
}

function goPrev() {
  if (state.index <= 0) return;
  state.index -= 1;
  render();
}

function toggleReveal() {
  state.revealed = !state.revealed;
  el.answerText.textContent = slides[state.index].a;
  el.answerBar.hidden = !state.revealed;
}

document.getElementById("startBtn").addEventListener("click", () => {
  state.index = 0;
  localStorage.setItem("glq:index", "0");
  el.cover.remove();
  el.shell.removeAttribute("hidden");
  render();
  startSlideTimerIfNeeded();
});

document.getElementById("nextBtn").addEventListener("click", goNext);
document.getElementById("prevBtn").addEventListener("click", goPrev);
document.getElementById("revealBtn").addEventListener("click", toggleReveal);
document.getElementById("playBtn").addEventListener("click", playMedia);
document.getElementById("stopBtn").addEventListener("click", () => {
  stopMedia();
  resetTimer();
});
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
document.getElementById("fsBtn").addEventListener("click", () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
});
el.jumpMenu.addEventListener("change", () => {
  state.index = Math.max(0, Math.min(slides.length - 1, Number(el.jumpMenu.value)));
  render();
});
document.addEventListener("keydown", (event) => {
  if (event.target.matches("select, input")) return;
  if (event.key === "ArrowRight" || event.key === " ") {
    event.preventDefault();
    goNext();
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goPrev();
  }
  if (event.key.toLowerCase() === "r") toggleReveal();
  if (event.key.toLowerCase() === "p") playMedia();
  if (event.key.toLowerCase() === "s") {
    stopMedia();
    resetTimer();
  }
  if (event.key.toLowerCase() === "f") {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  }
});

buildJumpMenu();
render();
