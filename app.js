const CULTURE_SECONDS = 20;
const TRUE_FALSE_SECONDS = 10;
const BLIND_SECONDS = 30;

const cultureData = [
  ["Facile", "Food", "Dans une brandade traditionnelle, quel poisson utilise-t-on ?", "La morue / le cabillaud"],
  ["Facile", "Animal", "Quel est le plus gros poisson du monde ?", "Le requin-baleine"],
  ["Facile", "Mode", "Quelle marque bretonne est célèbre pour ses marinières ?", "Armor Lux"],
  ["Facile", "Cinéma", "Dans Le Monde de Nemo, de quelle espèce est Dory ?", "Un chirurgien bleu"],
  ["Facile", "Géo", "Comment appelle-t-on la zone où la terre rencontre la mer ?", "Le littoral / le rivage"],
  ["Facile", "Géo", "Quel est le plus grand océan du monde ?", "L'océan Pacifique"],
  ["Moyenne", "Science", "Quel phénomène fait varier le niveau de la mer chaque jour ?", "La marée"],
  ["Moyenne", "Animal", "Quel animal est surnommé la licorne des mers ?", "Le narval"],
  ["Moyenne", "Food", "Comment appelle-t-on les œufs de poisson volant servis sur les sushis ?", "Le tobiko"],
  ["Moyenne", "Géo", "Quelle ligne imaginaire sépare l'Atlantique Nord de l'Atlantique Sud ?", "L'Équateur"],
  ["Moyenne", "WTF", "Comment appelle-t-on la grande zone de déchets plastiques du Pacifique nord ?", "Le vortex de déchets du Pacifique nord"],
  ["Moyenne", "Histoire", "Quel était le célèbre navire de recherche du commandant Cousteau ?", "La Calypso"],
  ["Moyenne", "Animal", "Combien de bras et tentacules possède un calamar ?", "10 : 8 bras et 2 tentacules"],
  ["Moyenne", "Science", "Quel organisme marin produit une grande partie de l'oxygène terrestre ?", "Le phytoplancton"],
  ["Moyenne", "Géo", "Quel détroit sépare l'Europe de l'Afrique ?", "Le détroit de Gibraltar"],
  ["Moyenne", "WTF", "Quelle créature marine peut casser une carapace d'un coup ultra-rapide ?", "La crevette-mante / squille"],
  ["Difficile", "Animal", "Quel poisson est connu pour être entièrement à sang chaud ?", "L'opah / lampris"],
  ["Difficile", "Mystère", "Quel nom a-t-on donné au mystérieux son sous-marin capté en 1997 ?", "Le Bloop"],
  ["Difficile", "Pirates", "Quel pirate gallois était surnommé Black Bart ?", "Bartholomew Roberts"],
  ["Difficile", "Science", "À partir d'environ quelle profondeur la lumière du soleil disparaît-elle totalement ?", "Environ 1000 mètres"],
  ["Difficile", "Géo", "Quelle mer n'a aucune côte terrestre ?", "La mer des Sargasses"]
];

const bonusData = [
  ["Bonus", "Record", "Record Guinness de souffle retenu sous l'eau : environ combien de minutes ?", "29 minutes 03 secondes"]
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

const slides = [...culture, ...bonus, ...blind, ...emojis, ...trueFalse];
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
  ytFrame: document.getElementById("ytFrame"),
  ytShell: document.getElementById("ytShell")
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
  const params = new URLSearchParams({
    autoplay: "1",
    controls: "0",
    modestbranding: "1",
    rel: "0",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    playsinline: "1",
    start: String(slide.start),
    end: String(slide.end)
  });

  el.ytShell.hidden = false;
  el.ytFrame.src = `https://www.youtube.com/embed/${slide.ytId}?${params.toString()}`;
  startTimer(slide.timer);
}

function stopMedia() {
  if (el.ytFrame) el.ytFrame.removeAttribute("src");
  if (el.ytShell) el.ytShell.hidden = true;
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
