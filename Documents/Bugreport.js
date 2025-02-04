window.onerror = function (message, source, lineno, colno, error) {
    let errorReport = `🚨 ERROR DETECTED 🚨
    Message: ${message}
    File: ${source}
    Line: ${lineno}, Column: ${colno}
    Stack Trace: ${error?.stack || "No stack trace available"}
    `;

    console.error(errorReport); // Log to console

    // Display a friendly error message on screen
    let errorBox = document.createElement("div");
    errorBox.style.position = "fixed";
    errorBox.style.bottom = "10px";
    errorBox.style.left = "10px";
    errorBox.style.background = "red";
    errorBox.style.color = "white";
    errorBox.style.padding = "10px";
    errorBox.style.zIndex = "1000";
    errorBox.style.fontFamily = "monospace";
    errorBox.textContent = "⚠️ Game Error! Check the console (F12)";

    document.body.appendChild(errorBox);

    // (Optional) Save error log in localStorage for debugging
    let existingErrors = JSON.parse(localStorage.getItem("bugReports") || "[]");
    existingErrors.push({ message, source, lineno, colno, stack: error?.stack });
    localStorage.setItem("bugReports", JSON.stringify(existingErrors));

    return true; // Prevents default error popup in some browsers
};