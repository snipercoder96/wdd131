🗂 Project Planning Template
1. Goal
What is the app supposed to do?

Example: “A to‑do list that saves tasks even after refresh.”

2. Data
What information do I need to store?

Where will it live (array, localStorage, database)?

Example: “Tasks stored in an array, persisted in localStorage.”

3. DOM
What elements will I need?

IDs/classes for input, buttons, list container.

Example: “#taskInput, #addTaskBtn, #taskList, #clearAllBtn.”

4. Functions
Break down into small, single‑purpose helpers.

Example:

setTasks() → save array to localStorage

getTasks() → load array from localStorage

displayTask(task) → show one task in DOM

deleteTask(task, li) → remove from array, storage, DOM

5. Events & Flow
What triggers user actions?

Example:

Add button → push, save, display, clear input

Delete button → remove from array, save, remove li

Clear button → empty array, clear storage, clear DOM

Page load → get tasks, display all



Primary	Electric Blue	#0d47a1	`Headings, nav bar, links, buttons`
Secondary	Deep Navy	#333333	`Sub‑headings, hover states, section titles`
Accent	Vibrant Orange	#FF8C00	`Highlights, call‑to‑action buttons`
Neutral Light	Soft Gray	#F5F5F5	`Page background, cards, sections`
Neutral Dark	Charcoal Gray	#333333	`Body text, footer text`
Border/Shadow	Light Gray	#E0E0E0	`Card borders, dividers`
Success/Highlight	Fresh Green	#32CD32	`Positive feedback, success messages`
BAckground color #333333

links hover #1E90FF