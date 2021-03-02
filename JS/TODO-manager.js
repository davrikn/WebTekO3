

function new_TODO() {
    var todo_text = document.getElementById("new-list-text");
    var todo_table = document.getElementById("TODO-table");
    let new_todo_div = document.createElement("div");
    let new_todo_deletebtn = document.createElement("input");
    let new_todo_finishbtn = document.createElement("input");
    let new_todo_row = document.createElement("tr");
    let new_todo = document.createElement("td");

    //Creates the button that moves the to do to the finished column
    new_todo_finishbtn.type="button";
    new_todo_finishbtn.value="Finish this TODO";
    new_todo_finishbtn.setAttribute("onclick","done_TODO(this)");

    //Creates the button that removes the to do from the site
    new_todo_deletebtn.type="button";
    new_todo_deletebtn.value="Delete this TODO";
    new_todo_deletebtn.setAttribute("onclick","remove_TODO(this)");

    //Sets all the elements classes
    new_todo_div.setAttribute("class", "TODO-div");
    new_todo_row.setAttribute("class", "TODO-row");


    //"Packs" all the elements into a new row
    new_todo.append(todo_text.value);
    new_todo_div.append(new_todo);
    new_todo_div.append(new_todo_deletebtn);
    new_todo_div.append(new_todo_finishbtn);
    new_todo_row.append(new_todo_div);
    todo_table.appendChild(new_todo_row);
}

function remove_TODO(deletebtn) {
    remove_TODO_div = deletebtn.parentNode;
    remove_TODO_div.remove();
}

function done_TODO(finishedbtn){
    console.log("dasdasda")
    finished_TODO_row = finishedbtn.parentNode.parentNode;
    let finished_table = document.getElementById("FINISHED-table");
    finished_TODO_row.parentNode.removeChild(finished_TODO_row);
    finished_table.append(finished_TODO_row);

}