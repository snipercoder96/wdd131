const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

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
