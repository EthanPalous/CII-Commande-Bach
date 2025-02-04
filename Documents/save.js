function encodeLevel(level) {
    return level.toString(16);
}

function saveProgress(level) {
    let saveCode = encodeLevel(level);
    localStorage.setItem("gameSave", saveCode); // Store hex code in local storage
    console.log(`Progress saved: ${saveCode}`);
}

function decodeLevel(hexCode) {
    let level = parseInt(hexCode, 16); // Convert hex back to number
    return isNaN(level) ? null : level; // Validate if the code is valid
}

function loadLevelFromCode() {
    let hexCode = prompt("Enter your save code:");
    let level = decodeLevel(hexCode);
    
    if (level !== null) {
        alert(`Loading Level ${level}...`);
        startLevel(level);
    } else {
        alert("Invalid code. Try again.");
    }
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