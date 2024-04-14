const div = document.querySelector('div');
let isDragging = false;
let offsetX, offsetY;

div.addEventListener('mousedown', function (e) {
    div.style.backgroundColor = '#00f'; // Zmiana koloru po wciśnięciu myszki
    isDragging = true;
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
    }
});

document.addEventListener('mouseup', function () {
    div.style.backgroundColor = '#000'; // Zmiana koloru po puszczeniu myszki
    isDragging = false;
});

