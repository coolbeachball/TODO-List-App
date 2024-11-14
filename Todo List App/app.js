const inputBox = document.querySelector('.inputBox'); // selects input tag with inputBox as its id
const pinBtn = document.querySelector('.pinBtn'); // selects button element with the pinBtn as its class
const listContainer = document.querySelector('.listContainer'); // selects ul element with listContainer as its class

// Add task when pinBtn is clicked
pinBtn.onclick = () => {
    // Check if input is empty
    if (inputBox.value === '') {
        alert('You must add a task!');
        return; // Exit the function if no task is provided
    }
    
    // Create a new list item
    const listItem = document.createElement('li');

    // Add the task and two buttons (Checked and Remove)
    listItem.innerHTML = `
        <div class="containerLi">
            <div class="up-down">
                <button class="move-up">↑</button>
                <button class="move-down">↓</button>
            </div>
            <button class="remove">X</button>
            </div>
            <span class="task-text">${inputBox.value}</span> 
        <button class="checked">✓</button>
    `; // Add the task and the buttons

    // Append the new list item to the list container
    listContainer.appendChild(listItem);

    // Clear the input box
    inputBox.value = '';
};

// Handle clicks on the delete button using event delegation
listContainer.addEventListener('click', (param) => {
    const listItem = param.target.closest('li'); // Find the list item

    if (!listItem) return; // Exit if the click is not on a valid list item

    // If the clicked element is the checked button
    if (param.target.classList.contains('checked')) {
        const taskText = listItem.querySelector('.task-text');
        
        // Cross out only the task text
        taskText.innerHTML = `<del>${taskText.textContent}</del>`;
        
        // Remove the check button
        const checkButton = listItem.querySelector('.checked');
        checkButton.remove();
    }

    // If the clicked element is the remove button
    if (param.target.classList.contains('remove')) {
        listItem.remove(); // Remove the entire list item
    }

    // If the clicked element is the move-up button
    if (param.target.classList.contains('move-up')) {
        const previousItem = listItem.previousElementSibling; // Get the previous list item
        if (previousItem) {
            listContainer.insertBefore(listItem, previousItem); // Move the list item up
        }
    }

    // If the clicked element is the move-down button
    if (param.target.classList.contains('move-down')) {
        const nextItem = listItem.nextElementSibling; // Get the next list item
        if (nextItem) {
            listContainer.insertBefore(nextItem, listItem); // Move the list item down
        }
    }
});
