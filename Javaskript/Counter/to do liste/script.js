
//Speichern aller Todos in einer List
let todos = [];

//Wir suchen die HTML Liste und speichern es in einer Variablen
let todosElement = document.getElementById("todos");
let todoInput = document.getElementById("todo-input");

//Neues Todo hinzufügen
function addTodo() {
    let value = todoInput.value;
    todos.unshift()

    if (value !== "") {
        todos.unshift(value);

        todoInput.value = "";
        todosElement.innerHTML = "";

        let id = 0;
        for (let todo of todos) {
            let li = document.createElement("li");
            li.innerHTML = `<input type="checkbox"/>
            ${todo}
            <button class="delete".onclick="deleteTodo(${id})">X</button>
            todosElement.appendChild(li);
        }
    }

}