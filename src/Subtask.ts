import Task from "./Task";

export default class Subtask extends Task {

    id: string;
    name: string;
    check: boolean;
    subtask: any[];
    deathline: string;

    constructor(name: string) {
        super(name);
        this.id = new Date().getTime().toString();
        this.name = name;
        this.check = false;
        this.subtask = [];
        this.deathline = undefined;
    };
}