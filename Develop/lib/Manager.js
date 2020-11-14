const Employee=require('./Employee')

//Creating the manage class as extension of the Employee class
class Manager extends Employee {

    constructor (name, id, email, officeNumber){
// Here I am borrowing the name, id and email properties from the Employee function
        super(name, id, email)
        this.officeNumber=officeNumber

    }// cl br for the constructor funtion

getOfficeNumber (){
    return this.officeNumber
}

getRole(){
    return 'Manager'
}

}// cl br for employee function

module.exports=Manager