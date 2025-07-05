let count = 0;
let cycles = 0;
const DEFAULT_LIMIT = 100;
let limit = DEFAULT_LIMIT;

function increase() {
    count++;
    if (count > limit) {
        count = 1;
        cycles++;
    }
    updateCounter();
}

function reset() {
    count = 0;
    cycles = 0;
    updateCounter();
}

function decrease() {
    count--;
    if (count < 0) count = limit;
    updateCounter();
}

function setLimit(newLimit) {
    limit = newLimit || DEFAULT_LIMIT;
    updateCounter();
}

function updateCounter() {
    document.getElementById("counter").innerText = count;
    document.getElementById("cycle-count").innerText = cycles;
    document.getElementById("current-limit").innerText = limit;
    
    // Update progress
    const progress = (count / limit) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    
    // Show/hide completion message
    if (count === limit) {
        document.getElementById("completion-message").style.display = "block";
    } else {
        document.getElementById("completion-message").style.display = "none";
    }
}