import Task from './Task'
import Subtask from './Subtask';

export default class TaskList {
    
    tasks: any[];

    constructor() {
        if (localStorage.getItem("ItemsList")) {
            this.tasks = Array.from(JSON.parse(localStorage.getItem("ItemsList")));
        }
        else {
            localStorage.setItem("ItemsList", JSON.stringify([]));
            this.tasks = [];
        };
    };

    toLocalStorrage() {
            localStorage.setItem("ItemsList", JSON.stringify(this.tasks));
    };

    search(value: string) {
        if (value !== "") {
            let temp = [];
            this.tasks.forEach((task) => {
                var string = task.name.toLocaleLowerCase();
                if (string.indexOf(value) === 0) {
                    temp.push(task);
                }
            });
            return temp;
        }
        else {
            return this.tasks;
        };
    };

    checkedList() {
        localStorage.removeItem("ItemsList");
        this.tasks = this.tasks.filter(x => x.check === false);
        this.toLocalStorrage();
    };

    add(name: string) {
        var newTask = new Subtask(name);
        this.tasks.push(newTask);
        this.toLocalStorrage();
    };

    remove(id: string) {
        this.tasks = this.tasks.filter(x => x.id !== id);
        this.toLocalStorrage();
    };

    setActive(id: string) {
        this.tasks.find(x => x.id === id).check = !this.tasks.find(x => x.id === id).check;
        this.toLocalStorrage();
    };

    addSubtask(thisId, name) {
        this.tasks.find(x => x.id === thisId).subtask.push(new Task(name));
        this.toLocalStorrage();
    };

    removeSubtask(thisId, subid) {
        this.tasks.find(x => x.id === thisId).subtask = this.tasks.find(x => x.id === thisId).subtask.filter(x => x.id !== subid);
        this.toLocalStorrage();
    };

    setActiveSubtask(id: string, subid: string) {
        this.tasks.find(x => x.id === id).subtask.find(x => x.id === subid).check = !this.tasks.find(x => x.id === id).subtask.find(x => x.id === subid).check;
        this.toLocalStorrage();
    };

    addDate(id: string, date: string) {
        this.tasks.find(x => x.id === id).deathline = Date.parse(date);
        this.toLocalStorrage();
    };
}