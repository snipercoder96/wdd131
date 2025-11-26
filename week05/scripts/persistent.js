// 1. Select elements ✅
// - taskInput = reference to #taskInput
// - addButton = reference to #addTaskBtn
// - taskList = reference to #taskList
// - clearButton = reference to #clearAllBtn

// 2. Initialize data ✅
// - tasksArray = getTasks() OR empty array
// - Loop through tasksArray → displayTask(task)

// 3. Helper functions ✅
// function setTasks()
//   - Save tasksArray to localStorage (stringify)

// function getTasks()
//   - Retrieve tasks from localStorage (parse)✅

// function displayTask(task) ✅
//   - Create <li> element with text
//   - Add delete button inside <li>
//   - Append <li> to taskList
//   - Attach delete event → deleteTask(task)

// function deleteTask(task)✅
//   - Remove task from tasksArray
//   - Update localStorage
//   - Remove <li> from DOM

// 4. Event listeners
// addButton click →
//   - If input not empty
//   - Push input.value into tasksArray
//   - setTasks()
//   - displayTask(input.value)
//   - Clear input field

// clearButton click →
//   - Empty tasksArray
//   - Clear localStorage
//   - Remove all <li> children from taskList()

// 5. Main flow
// On page load →
//   - getTasks()
//   - For each task in tasksArray → displayTask(task)

// Select elements
const taskInput = document.getElementById("taskInput"); // task input
const addButton = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearAllBtn");

// Initialize data

let tasksArray = getTasks() || [];

function displayTask(task) {
    // create <li>
    const li = document.createElement("li");
    li.textContent = task;

    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    // attach delete event
    deleteBtn.addEventListener("click", () => {
        deleteTask(task, li);
    });

    // append button to li
    li.append(deleteBtn);

    // append li to list
    taskList.append(li);
}


// Helper functions

function setTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}

function getTasks() {
    let lStorage = localStorage.getItem("tasks");

    return lStorage ? JSON.parse(lStorage) : null;
}

function deleteTask(task, li) {
    // function deleteTask(task)
    //   1. Find the task in tasksArray
    //      - Use indexOf(task) or filter it out
    //   2. Remove it from tasksArray
    //      - tasksArray.splice(index, 1) OR tasksArray = tasksArray.filter(...)
    //   3. Update localStorage
    //      - setTasks() → saves the new tasksArray
    //   4. Remove the <li> element from the DOM
    //      - li.remove() OR taskList.removeChild(li)

    tasksArray = tasksArray.filter(t => t !== task)
    setTasks()
    li.remove();
}

// Event listener 1
addButton.addEventListener("click", () => {
    // If input not empty
    //   - Push input.value into tasksArray
    //   - setTasks()
    //   - displayTask(input.value)
    //   - Clear input field

    if (taskInput.value !== "") {

        tasksArray.push(taskInput.value);
        setTasks();
        displayTask(taskInput.value);
        taskInput.value = "";
    }
});

//Event Listener 2

// clearButton click →
//   - Empty tasksArray
//   - Clear localStorage
//   - Remove all <li> children from taskList()

clearButton.addEventListener("click", () => {
    tasksArray = [];
    localStorage.removeItem("list");
    taskList.innerHTML = "";
});

tasksArray.forEach(task => displayTask(task));
