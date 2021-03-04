
function new_TODO_enter(event) {
    if (event.keyCode == 13) {
        new_TODO();
    }
}


function new_TODO() {
    var input = document.getElementById("new-list-text");
    if(input.value.length == 0){
        input.placeholder = "You have to write something";
        return;
    }
    input.placeholder = "Chuck Norrfis"
    var todo_text = input.value;
    input.value = "";

    // Get all required elements from the DOM
    var todo_table = document.getElementById("TODO-table");
    let new_todo_deletebtn = document.createElement("input");
    let new_todo_finishbtn = document.createElement("input");
    let new_todo_row = document.createElement("tr");
    let new_todo = document.createElement("td");
    let deletebtn_data = document.createElement("td");
    let finishedbtn_data = document.createElement("td");
    let new_todo_paragraph = document.createElement("p")

    //Creates the button that moves the to do to the finished column
    new_todo_finishbtn.type="button";
    new_todo_finishbtn.value="Finish this TODO";
    new_todo_finishbtn.setAttribute("onclick","done_TODO(this)");
    finishedbtn_data.appendChild(new_todo_finishbtn);


    //Creates the button that removes the to do from the site
    new_todo_deletebtn.type="button";
    new_todo_deletebtn.value="X";
    new_todo_deletebtn.setAttribute("onclick","remove_TODO(this)");
    deletebtn_data.appendChild(new_todo_deletebtn);

    //Sets all the elements classes
    new_todo_row.setAttribute("class", "TODO-row");
    new_todo_deletebtn.setAttribute("class", "button delete-button");
    new_todo_finishbtn.setAttribute("class","button");
    deletebtn_data.setAttribute("class", "button-data");
    finishedbtn_data.setAttribute("class", "button-data");

    //"Packs" all the elements into a new row
    new_todo_paragraph.append(todo_text);
    new_todo.append(new_todo_paragraph);
    new_todo_row.append(new_todo);
    new_todo_row.append(deletebtn_data);
    new_todo_row.append(finishedbtn_data);
    todo_table.appendChild(new_todo_row);

}

function remove_TODO(deletebtn) {
    remove_TODO_row = deletebtn.parentNode.parentNode;
    remove_TODO_row.remove();
}

function done_TODO(finishedbtn){
    finished_TODO_row = finishedbtn.parentNode.parentNode;
    finishedbtn.parentNode.parentNode.removeChild(finishedbtn.parentNode);
    let finished_table = document.getElementById("FINISHED-table");
    finished_TODO_row.parentNode.removeChild(finished_TODO_row);
    finished_table.append(finished_TODO_row);

}