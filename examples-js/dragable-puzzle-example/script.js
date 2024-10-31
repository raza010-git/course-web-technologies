const cells = document.querySelectorAll('.cell');
let draggedElement = null;

// Add event listeners for drag and drop functionality
cells.forEach(cell => {
    cell.addEventListener('dragstart', dragStart);
    cell.addEventListener('dragend', dragEnd);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', drop);
});

function dragStart(event) {
    draggedElement = event.target;
    setTimeout(() => {
        event.target.style.visibility = 'hidden';
    }, 0);
}

function dragEnd(event) {
    setTimeout(() => {
        event.target.style.visibility = 'visible';
    }, 0);
    draggedElement = null;
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    if (event.target.classList.contains('dropzone')) {
        event.preventDefault();
        event.target.style.border = '2px dashed #555';
    }
}

function dragLeave(event) {
    if (event.target.classList.contains('dropzone')) {
        event.target.style.border = '2px dashed #aaa';
    }
}

function drop(event) {
    if (event.target.classList.contains('dropzone')) {
        event.preventDefault();
        event.target.style.border = '2px dashed #aaa';
        event.target.textContent = draggedElement.textContent;
        draggedElement.textContent = '';
        
        // Swap the "dropzone" class to make the new empty cell draggable
        event.target.classList.remove('dropzone');
        draggedElement.classList.add('dropzone');
    }
}
