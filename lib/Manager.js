const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, office, role) {
        super(name,id,email);
        this.office = office;
        this.role = role;
    }
    getOffice() {
        return this.office;
    }
    getRole () {
        return this.role;
    }
}

module.exports = Manager;