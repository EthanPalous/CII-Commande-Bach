function encodeLevel(level) {
    return level.toString(16);
}

function saveProgress(level) {
    let saveCode = encodeLevel(level);
    localStorage.setItem(saveCode); // Store hex code in local storage
    console.log(`Progress saved: ${saveCode}`);
}

function decodeLevel(saveCode) {
    let level = parseInt(saveCode, 16); // Convert hex back to number
    return isNaN(level) ? null : level; // Validate if the code is valid
}

function loadProgress() {
    let saveCode = localStorage.getItem("gameSave");
    if (saveCode) {
        let level = decodeLevel(saveCode);
        if (level !== null) {
            console.log(`Loading Level ${level}...`);
            startLevel(level);
            return;
        }
    }
    console.log("No save found. Starting from Level 1.");
    startLevel(1);
}

function levelUp() {
    let currentLevel = decodeLevel(localStorage.getItem(saveCode)) || 1;
    let nextLevel = currentLevel + 1;
    
    saveProgress(nextLevel); // Save progress immediately
    startLevel(nextLevel);   // Load the new level
}

function reachCheckpoint(level) {
    saveProgress(level);
    console.log(`Checkpoint reached: Level ${level} saved.`);
}