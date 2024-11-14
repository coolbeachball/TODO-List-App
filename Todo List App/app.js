const inputBox = document.querySelector('.inputBox'); // Select the input box
const pinBtn = document.querySelector('.pinBtn'); // Select the pin button
const listContainer = document.querySelector('.listContainer'); // Select the container for tasks

// Add task when pinBtn is clicked
pinBtn.onclick = () => {
    if (inputBox.value === '') {
        alert('You must add a task!');
        return; // Exit if the input box is empty
    }

    // Create a new list item (using div)
    const listItem = document.createElement('div');
    listItem.classList.add('containerLi'); // Add a class for styling

    // Insert the task and buttons (move up, move down, remove, check)
    listItem.innerHTML = `
        <div class="up-down">
            <button class="move-up material-symbols-outlined">arrow_upward</button>
            <button class="move-down material-symbols-outlined">arrow_downward</button>
        </div>
        <button class="remove material-symbols-outlined">close</button>
        <span class="task-text">${inputBox.value}</span>
        <button class="checked material-symbols-outlined">check</button>
    `;

    // Append the new task to the list container
    listContainer.appendChild(listItem);

    // Clear the input box after adding the task
    inputBox.value = '';
};

// Handle clicks on the remove, check, move-up, and move-down buttons
listContainer.addEventListener('click', (param) => {
    // Find the closest .containerLi div (task item)
    const listItem = param.target.closest('.containerLi'); // Use .containerLi for div elements

    if (!listItem) return; // Exit if the click is not on a valid task item

    // If the clicked element is the checked button
    if (param.target.classList.contains('checked')) {
        const taskText = listItem.querySelector('.task-text');
        taskText.classList.toggle('completed'); // Toggle completion status
        param.target.remove(); // Remove the check button after marking as done
    }

    // If the clicked element is the remove button
    if (param.target.classList.contains('remove')) {
        listItem.remove(); // Remove the entire task
    }

    // If the clicked element is the move-up button
    if (param.target.classList.contains('move-up')) {
        const previousItem = listItem.previousElementSibling;
        if (previousItem) {
            listContainer.insertBefore(listItem, previousItem); // Move the task up
        }
    }

    // If the clicked element is the move-down button
    if (param.target.classList.contains('move-down')) {
        const nextItem = listItem.nextElementSibling;
        if (nextItem) {
            listContainer.insertBefore(nextItem, listItem); // Move the task down
        }
    }
});
