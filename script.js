// NDYRSHO KËTU KODIN SEKRET (p.sh. "1234" ose datën e përvjetorit)
const CORRECT_CODE = "1234"; 

let currentCode = "";

const passDisplay = document.getElementById("passDisplay");
const statusLight = document.getElementById("statusLight");
const vaultCard = document.getElementById("vaultCard");
const secretContent = document.getElementById("secretContent");
const bgMusic = document.getElementById("bgMusic");

function updateDisplay() {
  passDisplay.textContent = currentCode.padEnd(4, "-");
}

function pressKey(num) {
  if (currentCode.length < 4) {
    currentCode += num;
    updateDisplay();
  }
}

function clearCode() {
  currentCode = "";
  updateDisplay();
}

function checkCode() {
  if (currentCode === CORRECT_CODE) {
    // Kodi i saktë
    statusLight.classList.add("unlocked");
    passDisplay.style.color = "#3fb950";
    passDisplay.textContent = "ACCESS";

    // Pas 0.8 sekondash hapet kasaforta dhe nis muzika
    setTimeout(() => {
      vaultCard.classList.add("hidden");
      secretContent.classList.remove("hidden");
      
      // Luaj muzikën
      bgMusic.play().catch(e => console.log("Audio block:", e));

      // Shpërthim konfetesh
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 }
      });
    }, 800);

  } else {
    // Kodi i gabuar
    passDisplay.style.color = "#ff7b72";
    passDisplay.textContent = "ERROR";
    
    setTimeout(() => {
      passDisplay.style.color = "#00d2ff";
      clearCode();
    }, 1000);
  }
}


