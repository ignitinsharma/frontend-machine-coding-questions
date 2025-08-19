document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTodoButton = document.getElementById("add-todo");
  const todoDiv = document.querySelector(".todo-div");

  addTodoButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
      alert("Please enter a todo item.");
      return;
    }

    // Create a container for the todo item and button
    const todoContainer = document.createElement("div");
    todoContainer.className = "todo-container";

    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", () => {
      todoDiv.removeChild(todoContainer);
    });


    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Pending";
    toggleButton.className = "toggle-button";

    toggleButton.addEventListener("click", () => {
        toggleButton.textContent = toggleButton.textContent === "Pending" ? "Done" : "Pending";
    })

    todoInput.value = "";

    todoContainer.appendChild(todoItem);
    todoContainer.appendChild(toggleButton);
    todoContainer.appendChild(deleteButton);
    todoDiv.appendChild(todoContainer);
  });
});
