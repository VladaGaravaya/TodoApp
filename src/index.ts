import TaskList from './TaskList'

const taskList = new TaskList();

document.onload = new function () {
    out(taskList.tasks);
};

document.getElementById("clearAll")!.onclick = function () {
    if (confirm("Are you sure?")) {
        taskList.checkedList();
        out(taskList.tasks);
    };
};

document.getElementById("add")!.onclick = function () {
    var newTask = prompt("Please enter task name");
    if (newTask) {
        taskList.add(newTask);
        (document.getElementById("search") as HTMLInputElement).value = "";
        out(taskList.tasks);
    };
};

document.getElementById("search")!.onkeyup = function () {
    let TaskList = taskList.search((document.getElementById("search")! as HTMLInputElement).value);
    out(TaskList);
};


function out(tasks: any[]) {
    let tasklistDiv = document.getElementById("out");
    tasklistDiv!.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let days;
        if (tasks[i].deathline) {
            let date = (Date.now() - tasks[i].deathline)/(1000*60*60*24);
            if (date < 0) {
                days = " ("+Math.trunc(-date) + " days)";
            }
            else {
                days = " (You died)";
                var youDied = true;
                if (tasks[i].check === false) {
                    tasks[i].check = true;
                };
            };
        } else {
            days = "";
        };
        let isChecked = (tasks[i].check === true) ? "checked" : "";
        document.getElementById("out")!.insertAdjacentHTML('afterbegin',
            `<div id="div` + tasks[i].id + `" class="task">  
                <input type="checkbox"` + isChecked + ` id="setActive` + tasks[i].id + `"></input>
                <label>`+ tasks[i].name + days + `</label>
                <a class="little" id="addSubtask`+ tasks[i].id + `">+</a>   
                <a class="little" id="addDate`+ tasks[i].id + `">D</a>  
                <a class="little" id="remove`+ tasks[i].id + `">x</a>
            </div>`
        );
        document.getElementById("setActive" + tasks[i].id)!.onclick = function () {
            taskList.setActive(tasks[i].id);
        };
        document.getElementById("remove" + tasks[i].id)!.onclick = function () {
            document.getElementById("div" + tasks[i].id)!.remove();
            taskList.remove(tasks[i].id);
        };
        document.getElementById("addSubtask" + tasks[i].id)!.onclick = function () {
            let name = prompt("Please enter subtask name");
            if (name) {
                taskList.addSubtask(tasks[i].id, name);
                out(taskList.tasks);
            };
        };
        document.getElementById("addDate" + tasks[i].id)!.onclick = function () {
            let date = prompt("Please enter date.. (YYYY-MM-DD)");
            if (Date.parse(date)) {
                taskList.addDate(tasks[i].id, date);
                out(taskList.tasks);
            }
            else {
                alert("Try again.");
            };
        };
        if (tasks[i].subtask.length > 0 && !youDied) {
            for (let j = 0;  j < tasks[i].subtask.length; j++) {
                let isChecked = (tasks[i].subtask[j].check === true) ? "checked" : "";
                document.getElementById("div" + tasks[i].id)!.insertAdjacentHTML('beforeend',
                    `<div id="subdiv` + tasks[i].subtask[j].id + `" class="subtask"> 
                        <input type="checkbox"` + isChecked + ` id="subSetActive` + tasks[i].subtask[j].id + `"></input>
                        <label>`+ tasks[i].subtask[j].name + `</label>
                        <a class="little" id="subRemove`+ tasks[i].subtask[j].id + `">x</a>
                    </div>`
                );
                document.getElementById("subSetActive" + tasks[i].subtask[j].id)!.onclick = function () {
                    taskList.setActiveSubtask(tasks[i].id, tasks[i].subtask[j].id);
                };
                document.getElementById("subRemove" + tasks[i].subtask[j].id)!.onclick = function () {
                    taskList.removeSubtask(tasks[i].id, tasks[i].subtask[j].id);
                    out(tasks);
                };
            };
            
        };
    };
};