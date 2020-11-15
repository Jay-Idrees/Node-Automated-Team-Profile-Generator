// TODO: Write code to define and export the Employee class
class Employee {

    constructor (name, id, email) {
 //This constructor function is basically creating an 'employee' object and turing the values received as parameters into variables (also called member variables or properties)
 // This value that you have received in as parameter as name -turn it into a variable called name
        this.name=name;
        this.id=id;
        this.email=email;

    }// closng  br for the costructor function

// More fuctions inside the employee class

//obtaining the name, id and email as needed

getName(){
    return this.name;
}


getId(){
    return this.id;
}

getEmail(){
    return this.email;
}

getRole(){
    return "Employee";
}


} //closing br for the employee class

module.exports=Employee;