// Get all draggable sections
const sections = document.querySelectorAll('.section');
const dropArea = document.getElementById('drop-area');

sections.forEach(section => {
    section.addEventListener('dragstart', dragStart);
    section.addEventListener('dragend', dragEnd);
});

// Drop area events
dropArea.addEventListener('dragover', dragOver);
dropArea.addEventListener('dragenter', dragEnter);
dropArea.addEventListener('dragleave', dragLeave);
dropArea.addEventListener('drop', drop);

// Drag Functions
function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.style.opacity = '0.5';
}

function dragEnd(event) {
    event.target.style.opacity = '1';
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    dropArea.style.backgroundColor = '#e0e0e0';
}

function dragLeave() {
    dropArea.style.backgroundColor = '#fff';
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggable = document.getElementById(id);
    dropArea.appendChild(draggable);
    dropArea.style.backgroundColor = '#fff';
}
