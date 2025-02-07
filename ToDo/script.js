// Element used by this script
const addbutton = document.getElementById("add-button");
const input = document.getElementById("input-box");
const tasks_list = document.getElementById("tasks_list");

var i = 1;
// Function used to add a task to the list
function ajouter_tache(){
    var text = input.value;
    if (text === ""){
        return;
    } 
    else {
        const new_task = document.createElement("li");
        new_task.innerHTML = text;
        new_task.id = i.toString();
        tasks_list.appendChild(new_task);
        input.value = "";
        i+=1;
    }
}

// The task is added if you click on the button
addbutton.addEventListener("click", ajouter_tache);

// The task is added if you press enter key
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        ajouter_tache();
    }
});

tasks_list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
}, false);