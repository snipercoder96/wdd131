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

🗂 Page-by-Page Strategy
index.html

Acts as your landing page.

Include a clear navigation bar linking to all other pages.

Make it visually appealing and responsive (mobile-first layout).

tips.html

Perfect spot for your Tip of the Day feature.

Use JavaScript arrays + methods to rotate tips.

Store user-submitted tips in localStorage via a form.

Display tips dynamically with template literals.

resources.html

Curate links, diagrams, or cheat sheets.

Use lazy-loaded images for accessibility and performance.

Could include a small interactive element (like filtering resources by category).

references.html

Required by the assignment.

List all sources for images, text, or inspiration.

Keep it simple — no styling needed.

about.html

Share the purpose of your site and your role as “HTMLMARKUP Mentor.”

Add a contact form here (or on index) that saves entries to localStorage.

This form checks off the form requirement and ties into your JavaScript logic.