const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



const questionlist=[

                           /////////// NAME ///////////
// Question object 1: Name

{prompt:
            
        {
            type: 'input',
            name: 'name', // this is the name of the variable in which the repsponse is stored
            message: "Please type the {{Position}}'s name",
        },

// Note that this 'for' is important as it is going to help segregate questions that maybe applicable for every poisions vs those that are only applicable to specific position in subsequent functions

 for:'all'
    
    }, // cl br for name prompt
                         /////////// EMAIL///////////

// Question object 2: email

    {prompt:
            
        {
            type: 'input',
            name: 'email', 
            message: "Please type the {{Position}}'s email address",
        },

 for:'all'
    
    }, // cl br for email prompt
                        //////////OFFICE NUMBER for manager //////////

// Question object 3: office number

{prompt:
            
    {
        type: 'input',
        name: 'officeNumber', 
        message: "Please type the Manager's office number",
    },

// I only want this question to display for manager
for:'manager'

}, // cl br for office number prompt

                     /////////////GIT HUB for Software Engineer///////////////

// Question object 4: github username
{prompt:
            
    {
        type: 'input',
        name: 'github', 
        message: "Please type the Engineer's Git-Hub Username",
    },

for:'engineer'

}, // cl br for github username prompt

                //////////// School name for intern /////////////////
// Question object 5: school name
{prompt:
            
    {
        type: 'input',
        name: 'school', 
        message: "Please type the name of the school attended by the intern",
    },

for:'intern'

}, // cl be for email prompt

                ///////// Selecting Employee by their position //////

{prompt:
    {
        type: "list", 
        message: "Please select the employee's position", 
        name: "position", 
        choices: [
        {name: "Engineer", value: "engineer"},
        {name: "Intern", value: "intern"},
        {name: "I have finished adding employees", value: "done"}
        ]
    
    },               
    
for:'all'
                }, // cl be for position prompt

]; // cl br for the questionlist






// console.log(questionlist)

// Creating an async await function that does the following

// 1) Extracting data from the question list array of question objects 
// 2) Packaging the extrated data into employe objects specific to position
// 3) Using the switch function to alternate between employee positions
// 4) Pusing employee objects into the employeelist array of employee objects
// 5) Asigning unique ids with increments of 1 for each of the unique employee



// Now I want of get the questions from the questionlist object that are specific to the employee position

function pull_Qs_by(employee_type){
 
    // The function will automatically reqognize that refers to the question object inside the question list
    // I am first grabbing the the questions based on position and then modifying them such the {{position}} is replaced by the actual position
    const question_shortlist=questionlist.filter(function(question_object){
        return (question_object.for==='all' || question_object.for===employee_type);
       
    }); // br close filter
    
    // Now I want to replace the place holder {{position}} with the actual employee type
    // Note that here I am using the variable questions which already contains the filtered question list according to position from the questionlist object
    const modified_Qs=question_shortlist.map(function(question_object){
        //Grab whatever is inside each of the prompt object of the question object, copy it and save it into a variable called temp
        const x={...question_object.prompt}
        // Inside that prompt object that is just copied- replace {{position}} with the position
        // Note that here I am using x.message, because I only want the message to be updated
        x.message=x.message.replace ("{{Position}}", employee_type)
        return x
    });
    
    return modified_Qs;
    
} // br close for the get questions function
    
// console.log (pull_Qs_by('intern'))
    


generate_team_profile()

async function generate_team_profile(){
    const employee_list=[];
    
    // Setting the default position to 1 and the default position to manager
    let id=1;
    let employee_type='manager';
    

    while (employee_type !=='done') {
     
        // Initiating inquirer prompt, extrating only pertinent question objects from the question list array and then capturing response into a response variable
        const typed_answer =await inquirer.prompt(pull_Qs_by(employee_type));
        // console.log(typed_answer)

        switch(employee_type){
            case 'manager':
                employee_list.push(new Manager(typed_answer.name, id, typed_answer.email, typed_answer.officeNumber));
                break; // the break statement breaks out of a block of code in the switch case

             case 'engineer':
                employee_list.push(new Engineer(typed_answer.name, id, typed_answer.email, typed_answer.github));
                break; 

             case 'intern':
                 employee_list.push(new Intern(typed_answer.name, id, typed_answer.email, typed_answer.school));
                // Note that it is not necessary to break out of the block case
                break;

            
        } // br close for the swith case

        id++;
        employee_type=typed_answer.position



    } // br close for the while loop








const renderHTML=render(employee_list);

fs.access (OUTPUT_DIR, function(err){

    if (err){
        fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFile(outputPath, renderHTML, function(err){
        if (err) throw err;
        console.log("Thank you for using Team Profile Generator, A new team members profile has been generated and stored in the output folder as team.html")
    })

})//br close for the fs.access





}// br close async await function





