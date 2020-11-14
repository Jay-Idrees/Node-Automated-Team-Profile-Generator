
// As we are depending on the parent class employee, so this page relies on that functionality so it should be specified as the requirement

const Employee=require('./Employee');

class Engineer extends Employee{

    constructor (name, id, email, github) {

     super(name, id, email);
     this.github=github;


    } // closing brackets for the constructor function
    
    getGithub(){
        return this.github;
    }
    
    getRole(){
        return "Engineer";
    }


}// closing br for the enineering class

module.exports=Engineer