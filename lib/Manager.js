const Employee = require("./Employee");
//function to create manager

class Manager extends Employee {
    constructor(name,id,email,phone) {
        super(name,id,email);
        this.phone = phone;
        this.role = "Manager"
    }
    getPhone(){
        return this.phone
    }
}

module.exports = Manager;