// 🔗 FINAL YOUTUBE LINK (locked)
const YOUTUBE_LINK = "https://youtu.be/6g7TjGvf5Cc";

/* =========================
   BACKGROUND MUSIC
========================= */
const music = document.getElementById("bgMusic");
const tapOverlay = document.getElementById("tapOverlay");

let musicStarted = false;

tapOverlay.addEventListener("click", () => {
  if (!musicStarted) {
    music.volume = 0.6;
    music.play();
    musicStarted = true;
  }
  tapOverlay.style.display = "none";
});

/* =========================
   STEP NAVIGATION
========================= */
function nextStep(step) {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.add("hidden");
  });

  const target = document.getElementById("step" + step);
  if (target) target.classList.remove("hidden");
}

/* =========================
   FEEDBACK SYSTEM
========================= */
const feedbackOverlay = document.getElementById("feedbackOverlay");
const feedbackImg = document.getElementById("feedbackImg");
const feedbackText = document.getElementById("feedbackText");
const feedbackBtn = document.getElementById("feedbackBtn");

let nextStepNumber = null;

// Q1: Moo Deng
function handleAnswer(isCorrect, stepIfCorrect) {
  feedbackOverlay.classList.remove("hidden");

  if (isCorrect) {
    feedbackImg.src = "C1.jpg";
    feedbackText.innerText = "Obviously Moo Deng!";
    feedbackBtn.innerText = "Next Question";
    nextStepNumber = stepIfCorrect;
  } else {
    feedbackImg.src = "f1.png";
    feedbackText.innerText = "How can you not know her?";
    feedbackBtn.innerText = "Try Again";
    nextStepNumber = null;
  }
}

// Q2: Pig
function handleQ2(isCorrect, stepIfCorrect) {
  feedbackOverlay.classList.remove("hidden");

  if (isCorrect) {
    feedbackImg.src = "C2.jpg";
    feedbackText.innerText = "Are you sure?";
    feedbackBtn.innerText = "Next Question";
    nextStepNumber = stepIfCorrect;
  } else {
    feedbackImg.src = "f1.png";
    feedbackText.innerText = "It looks like one, right?";
    feedbackBtn.innerText = "Try Again";
    nextStepNumber = null;
  }
}

// Q3: Cute (all correct)
function handleQ3(isCorrect, stepIfCorrect) {
  feedbackOverlay.classList.remove("hidden");

  if (isCorrect) {
    feedbackImg.src = "C3.png";
    feedbackText.innerText = "How did you know?";
    feedbackBtn.innerText = "Next";
    nextStepNumber = stepIfCorrect;
  } else {
    feedbackImg.src = "f1.png";
    feedbackText.innerText = "Wrong answer?? Impossible 😼";
    feedbackBtn.innerText = "Try Again";
    nextStepNumber = null;
  }
}

// Feedback button action
feedbackBtn.addEventListener("click", () => {
  feedbackOverlay.classList.add("hidden");

  if (nextStepNumber !== null) {
    nextStep(nextStepNumber);
    nextStepNumber = null;
  }
});

function spawnHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 1.5 + Math.random() + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

function saveWord() {
  const input = document.querySelector("#step5 input");
  const word = input.value.trim();

  if (!word) {
    alert("Type something first");
    return;
  }

  localStorage.setItem("herWord", word);
  document.getElementById("herWord").innerText = word;

  spawnHearts(); 
  nextStep(6);
}

function launchConfetti() {
  const colors = ["#ffb6c1", "#ffc0cb", "#ffe4ec", "#ff7aa2"];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

function openGift() {
  const giftStep = document.getElementById("step7");
  if (!giftStep) return;

  launchConfetti(); // 🎉 CONFETTI

  giftStep.style.animation = "pop 0.4s ease";

  setTimeout(() => {
    nextStep(8);
  });
}

/* =========================
   QR CODE
========================= */
const qrImg = document.getElementById("qrImg");
qrImg.src =
  "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
  encodeURIComponent(YOUTUBE_LINK);
