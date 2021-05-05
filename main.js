var todoForm = document.querySelector("#todo-form");
var todoInput = document.querySelector("#todo-input");
var todoListGroup = document.querySelector("#todo-list-group");

var todos = [];
var todoInitialid = 0;


function TodoPrototype(text, id) {
    this.id = id;
    this.text = text;

}

function removeTodo(todoId) {
    document.querySelector(`#todo-number-${todoId}`).remove();
}


{/* <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>sdcsdc</span>
    <button class="btn btn-outline-danger">O'chirish</button>
</li> */}

function todoCreateDom(todoText, todoId) {
    var listItem = document.createElement("li");
    var deleteBtn = document.createElement("button");

    listItem.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center")
    listItem.textContent = todoText;
    listItem.appendChild(deleteBtn);
    listItem.setAttribute("id", `todo-number-${todoId}`);


    deleteBtn.addEventListener("click", function() {
        removeTodo(todoId);
    });
    

    deleteBtn.setAttribute("class", "btn btn-outline-danger");
    deleteBtn.textContent = "Delete";




    todoListGroup.appendChild(listItem);
}



function todoCreate(todoText, todoId) {
    todoCreateDom(todoText, todoId);
    // todos.push(new TodoPrototype(todoText, todoId));
}




todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    
    todoCreate(todoInput.value, todoInitialid);

    todoForm.reset();

    todoInitialid++;

    console.log(todos);
});