# Node Employee Team Profile Generator

## About the Project
This mini-fullStack application is designed for employers to automatically generate HTML profiles consisting of teams of interns, employees, software engineers and managers. The backend components of this application utilize inquirer and Node.JS to gather user input regarding an employee.This information is then passed on to the frontend by modifying an HTML template that generate a new html employee team page. I developed this application during the 6th week of coding bootcamp at Columbia University, NY. Date of publication: 10/26/2020


[Watch a video demonstrating the app functionality]()<br />

## Contact Programmer for questions

Jay J. Idrees, MD, MPH<br />
Full-Stack Software Engineer<br />
[JIDREES](https://github.com/jidrees) ![Github](http://img.shields.io/badge/github-black?style=flat&logo=github)<br />
jidrees@live.com



## Contents

- [User Story](#user-story)
- [Technologies used](#technologies-used)
- [Key files in the repository](#key-files-in-the-repository)
- [Packages used](#packages-used)
- [Applied Programming Skills](#applied-programming-skills)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Credits and Copyright](#credits-and-copyright)


## User Story

As a manager I want to generate a webpage that displays my ream's basic info so that I have quick access to the emails and github profiles of the employees




## Technologies used

![Node](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=Node.js)

![NPM](http://img.shields.io/badge/npm-yellow?style=for-the-badge&logo=NPM)

![Javascript](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

![HTML](https://img.shields.io/badge/HTML-informational?style=for-the-badge&logo=html5)

![CSS](https://img.shields.io/badge/css-darkgreen?style=for-the-badge&logo=css3)


## Packages used

Inquirer <br />
Jest

## Applied Programming Skills

By completing this project I was able to master application of the following programming skills: 

- Using object oriented programming including the use of classes, constructor functions, export modules and storing user information into employee category data objects

- Using classes in Javascript object oriented programing. For instance in this app I created an generic employee class and then extended this class to create subclasses for Software Engineer, Intern and Manager.

- Using the inquirer package to prompt questions and capturing user responses into variables

- Notice how a variety of inquirer features are used such as the input, expand, editor when capturing data from the user

- Using the JEST package in Node.JS and performing tests using javascript

   ![Testing](./assets/testing.png)

- Use of Node.JS to generate HTML with Javascript code. Notice how the javascript code is used to create employee classes and then a renderhtml function is used to replace HTML text with variables. Inquirer captures the user inputs into variables to be passed onto functions. The renderhtml function then generates a team-profile html page by modifying existing templates and replacing the placeholders with the actual data using object oriented programming.

- Using RegExp object in matching text and substituding placeholders with actual employee data

- Effectively using filter, map, foreach methods in object oriented programming.

- Using Node.JS to generate a high quality readme file. 

## Key files in the repository


htmlRenderer.js <br />
app.js <br />
team.html <br>
Manager.js



## Installation

For installation of the dependencies, please run the following command in the terminal

```
npm install
```

## Usage

To start the application, please type the following command in the terminal

```
node app.js
```


## Testing

For running the tests on application, please run the following commad

```
npm test
```


## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits and Copyright 
Copytight 2020- Present. Jay Idrees


