document.addEventListener("keydown", processKeyEvent);

const code = document.getElementById("code");
const which = document.getElementById("which");
const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");
const keyPressed = document.getElementById("key-pressed");

function processKeyEvent(e) {

    code.innerText = e.code;
    which.innerText = e.which;
    key.innerText = e.key;
    keyCode.innerText = e.keyCode;

    keyPressed.style.fontSize = "100px";

    if (e.key === " ") {
        keyPressed.innerText = "␣";
    }
    else if (e.key === "Enter") {
        keyPressed.innerText = "↵";
    }
    else if (e.key === "Backspace") {
        keyPressed.innerText = "⌫";
    }
    else if (e.key === "ArrowUp") {
        keyPressed.innerText = "↑";
    }
    else if (e.key === "ArrowDown") {
        keyPressed.innerText = "↓";
    }
    else if (e.key === "ArrowLeft") {
        keyPressed.innerText = "←";
    }
    else if (e.key === "ArrowRight") {
        keyPressed.innerText = "→";
    }
    else {

        if (e.key.length > 1) {
            keyPressed.style.fontSize = "35px";
        }

        keyPressed.innerText = e.key;
    }
}