
// As we are depending on the parent class employee, so this page relies on that functionality so it should be specified as the requirement

const Employee=require('./Employee');

class Engineer extends Employee{

    // Notice how the new property is included in the parameter: github

    constructor (name, id, email, github) {

    // the word super is important - it pulls all the properties of the Employee class. If a property is not included in the small brackets - it will not be pulled
     super(name, id, email);
     // as github is not property of employee class, so I have added this to the Engineer class as extension
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