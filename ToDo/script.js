// Element used by this script
const addbutton = document.getElementById("add-button");
const input = document.getElementById("input-box");
const tasks_list = document.getElementById("tasks_list");

var i = 1;
// Function used to add a task to the list
function ajouter_tache(){
    var text = input.value;
    if (text == ""){
        return;
    }
    const new_task = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = i.toString();
    new_task.innerText = text;
    new_task.id = i.toString();
    new_task.prepend(checkbox);
    tasks_list.appendChild(new_task);
    input.value = "";
    i+=1;
}

// The task is added if you click on the button
addbutton.addEventListener("click", ajouter_tache);

// The task is added if you press enter key
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        ajouter_tache();
    }
});