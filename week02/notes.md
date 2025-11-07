# Event Listener

## Careful Instructions
Here before we need to do anything inn the event listener here is the html code:


``` html
<label for="favchap">Enter Book and Chapter: </label>
<input type="text" id="favchap" placeholder="Alma 5">
<button aria-label="Close" type="submit">Add Chapter</button>
<ul id="list"></ul>

```

## What we want to do:
1. We are making buttons work:

- the list button needs to work (deleting only!)
- the button when pressed, needs to work     

2. They must both use event listeners

3. If the user enters data the even must continue

In the snippet code:
``` javascript
// This is the first step
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

```

If we look closely:

``` javascript 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

```

see the id of input element we select it because:
    - This is the text that will be appended by the list.
    - and the id is favchap


like we show here:
``` javascript
const input = document.querySelector("#favchap");

```
so this line means:
- input variable has selcted the favchap id is found in:

``` html
<input type="text" id="favchap" placeholder="Alma 5">

```


## Line by line explanation


``` javascript
// Click is that event that happens over here
button.addEventListener("click", function () {
    if (input.value.trim() !== "") {

```
this is the event listener if the input variable (selected id favchap), is NOT empty!

Otherwise:

``` javascript
button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        // create an li element
        const li = document.createElement("li");
        li.textContent = input.value;

        // create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        // append delete button to li
        li.append(deleteButton);

        // append li to the list
        list.append(li);

        // clear input
        input.value = "";
        input.focus();

        // delete functionality
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
        });
    }
});
```


In this line:
``` javascript 
li.textContent = input.value;

```
the li variable has created the new li element:

``` javascript
const li = document.createElement("li");

```

then input (variable) and the user value


``` javascript

// create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        // append delete button to li
        li.append(deleteButton);
        // append li to the list
        list.append(li);



```
This code here explains that we create a delete button and set ❌ (we could've set it to "delete)

so now every time the user creates a list, we append a delete button for each user entry and lastly the list (variable) is appending to the li (created element)


``` javascript 
// clear input
        input.value = "";
        // resetting it back to empty

``` 
This is when you clear input after inserting values like Moroni.

``` javascript 

    input.focus();

```
Input field, that means the cursor (caret) starts blinking inside it, ready for the user to type.

``` javascript

// delete functionality
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
        });

```

This tells us to delete any users value when he/ she clicks delete.











