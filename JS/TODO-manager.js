function new_TODO() {
    var todo_text = document.getElementById("new-list-text");
    var todo_table = document.getElementById("TODO-table");
    let new_todo_row = document.createElement("tr");
    var new_todo = document.createElement("td");
    new_todo.append(todo_text.getAttribute("value"));
    new_todo_row.append(new_todo);
    todo_table.appendChild(new_todo_row);
}