// ? SCALABLES

// event listener's skull function
export function call_an_event_listener(button, elistener, func_to_call) {
    button.addEventListener(elistener, func_to_call);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ! TASK'S PART
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ? SELECTORS
export const navbar_number_of_tasks = document.getElementById('number_of_tasks'); // related to new created todo items (tasks)
export const stats_tasks_todo_input = document.querySelector("#stats_tasks_todo_input"); // todolist input field #id (child)
export const stats_tasks_todo_button = document.querySelector("#stats_tasks_todo_button"); // todolist add button #id (child)
export const stats_new_tasks_container = document.querySelector(".stats_new_tasks_container"); // todo item container .class(child)
export const stats_add_new_task_select_container = document.querySelector(".stats_add_new_task_select_container"); // todolist filter div item .class (parent)
export const stats_tasks_filter_options_container = document.querySelector(".stats_tasks_to_filter"); // todolist filter select item .class (child)


// ? FUNCTIONS

// That function creates html elements considered as a todo item
export function stats_tasks_addToDo(e) {
    e.preventDefault;
    // ! Create my todolist container
    const stats_tasks_todo_container = document.createElement("div");
    stats_tasks_todo_container.setAttribute('class', 'stats_tasks_todo_container'); // 'todo'
    // ! Create an li and append it into the tododiv
    const stats_tasks_todo_li = document.createElement("li");
    stats_tasks_todo_li.innerText = stats_tasks_todo_input.value;
    stats_tasks_todo_li.setAttribute("class", "stats_tasks_todo_li");
    stats_tasks_todo_container.appendChild(stats_tasks_todo_li); // 'newtodo' 
    //Add the todo to localStorage
    saveLocalTodos(stats_tasks_todo_input.value);
    // ! The check button (completed) and append to todoDiv
    const stats_tasks_completed_button = document.createElement("button");
    stats_tasks_completed_button.innerHTML = '<i class="fas fa-check"></i>';
    stats_tasks_completed_button.setAttribute("class", "stats_tasks_completed_button");
    stats_tasks_todo_container.appendChild(stats_tasks_completed_button);
    // ! The delete button (trash) and append to todoDiv
    const stats_tasks_trash_button = document.createElement("button");
    stats_tasks_trash_button.innerHTML = '<i class="fas fa-trash"></i>';
    stats_tasks_trash_button.setAttribute("class", "stats_tasks_trash_button");
    stats_tasks_todo_container.appendChild(stats_tasks_trash_button);
    // ! Add our todolist into it's block parent
    stats_new_tasks_container.appendChild(stats_tasks_todo_container);
    stats_tasks_todo_input.value = "";
}

// That function creates an interaction in order to delete the selected todo or underline it following a condition
export function deleteCheck(e) {
    const item = e.target;
    // DELETE TODO
    if (item.classList[0] === "stats_tasks_trash_button") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos(todo);
        // Attend la fin de l'animation css (transitionend) avant de supprimer
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }
    // COMPLETE TODO
    if (item.classList[0] === "stats_tasks_completed_button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        // will toggle a class => add another class attribute in addition of the existant
    }
}

// That function gives us the opportunity to filter (categorize) our finished or in progress todos
export function filterTodo(e) {
    let rows = document.getElementById("stats_new_tasks_container").childNodes;
    let new_rows = Array.from(rows);
    // document.getElementById('number_of_tasks').innerHTML = new_rows.length;
    for (let i = 1; i < new_rows.length; i++) {
        switch (e.target.value) {
            case "all":
                new_rows[i].style.display = "flex";
                break;
            case "completed":
                if (new_rows[i].classList.item(1) === "completed") {
                    new_rows[i].style.display = "flex";
                } else {
                    new_rows[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (new_rows[i].classList.item(1) !== "completed") {
                    new_rows[i].style.display = "flex";
                } else {
                    new_rows[i].style.display = "none";
                }
                break;
        }
    }
}

export function saveLocalTodos(tdx) {
    let todoses;
    if (localStorage.getItem("todos") === null) {
        todoses = [];
    } else {
        todoses = JSON.parse(localStorage.getItem("todos"));
    }
    todoses.push(tdx);
    window.setTimeout(() => {
        navbar_number_of_tasks.innerHTML = todoses.length;
    }, 100);
    localStorage.setItem("todos", JSON.stringify(todoses));
}

export function getTodos() {
    let todoses;
    if (localStorage.getItem("todos") === null) {
        todoses = [];
    } else {
        todoses = JSON.parse(localStorage.getItem("todos"));
    }
    todoses.forEach((todo) => {
        // Create my todolist container
        const stats_tasks_todo_container = document.createElement("div");
        stats_tasks_todo_container.setAttribute('class', 'stats_tasks_todo_container');
        // Create an li and append it into the tododiv
        const stats_tasks_todo_li = document.createElement("li");
        stats_tasks_todo_li.innerText = todo;
        stats_tasks_todo_li.setAttribute("class", "stats_tasks_todo_li");
        stats_tasks_todo_container.appendChild(stats_tasks_todo_li);
        const stats_tasks_completed_button = document.createElement("button");
        stats_tasks_completed_button.innerHTML = '<i class="fas fa-check"></i>';
        stats_tasks_completed_button.setAttribute("class", "stats_tasks_completed_button");
        stats_tasks_todo_container.appendChild(stats_tasks_completed_button);
        const stats_tasks_trash_button = document.createElement("button");
        stats_tasks_trash_button.innerHTML = '<i class="fas fa-trash"></i>';
        stats_tasks_trash_button.setAttribute("class", "stats_tasks_trash_button");
        stats_tasks_todo_container.appendChild(stats_tasks_trash_button);
        stats_new_tasks_container.appendChild(stats_tasks_todo_container);
    })
}

export function removeLocalTodos(tdsuppr) {
    let todoses;
    if (localStorage.getItem("todos") === null) {
        todoses = [];
    } else {
        todoses = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = tdsuppr.children[0].innerText;
    todoses.splice(todoses.indexOf(todoIndex), 1);
    window.setTimeout(() => {
        navbar_number_of_tasks.innerHTML = todoses.length;
    }, 100);
    localStorage.setItem("todos", JSON.stringify(todoses));
}

export function add_number_of_tasks_to_navbar() {
    let todoses;
    if (localStorage.getItem("todos") === null) {
        todoses = [];
    } else {
        todoses = JSON.parse(localStorage.getItem("todos"));
    }
    window.setTimeout(() => {
        navbar_number_of_tasks.innerHTML = todoses.length;
    }, 100);
}

// ! EVENT LISTENERS
call_an_event_listener(stats_tasks_todo_button, 'click', stats_tasks_addToDo);
call_an_event_listener(stats_new_tasks_container, 'click', deleteCheck);
call_an_event_listener(stats_tasks_filter_options_container, 'input', filterTodo);
call_an_event_listener(document, 'DOMContentLoaded', getTodos);
call_an_event_listener(document, 'DOMContentLoaded', add_number_of_tasks_to_navbar);