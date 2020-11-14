const Employee=require("./Employee");

// Creating the intern class as an extension of the Employee class
class Intern extends Employee {

    // Notice that I have name , id, email and shcool(new), of these the name, id and email properties will be pulled from the employee class using super
    constructor (name, id, email, school){
    super (name, id, email);

    this.school=school;
    }
    getSchool(){
        return this.school;
    };

    getRole(){
        return "Intern";
    }
}
module.exports=Intern