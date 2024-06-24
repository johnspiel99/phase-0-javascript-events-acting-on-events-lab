
// DODGER to the left
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// DODGER to the right
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    if (left < 360) { 
        dodger.style.left = `${left + 1}px`;
    }
}

module.exports = {
    moveDodgerLeft,
    moveDodgerRight
};
