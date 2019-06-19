export default class Task {

    id: string;
    name: string;
    check: boolean;

    constructor(name: string) {
        this.id = (+new Date()).toString();
        this.name = name;
        this.check = false;
    };
}