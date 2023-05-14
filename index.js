const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers){
    // set svg value to empty string
    let svg = "";
// add the svg url to svg value
    svg =
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    // add the user shape selection to the svg value
    svg += `${answers.shape}`;
// if else to render the users selected shape and color
    let shapeChoice;
    if (answers.shape ==="Triangle") {
        shapeChoice = new Triangle();
        svg+= `<polygon points="145,10 285,180 10,180" fill="${answers.shapeColor}"/>`
    }else if (answers.shape ==="Square") {
        shapeChoice = new Square();
        svg+= `<rect x="50" y="25" width="200" height="200" fill="${answers.shapeColor}"/>`
    }else if (answers.shape ==="Circle") {
        shapeChoice = new Circle();
        svg+= `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`
    }
    svg += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    // add closing svg tag
    svg += "</svg>";


fs.writeFile(fileName, svg, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg")
});
};

function promptUser() {
// prompt questions to build out logo according to users preference
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'shape',
                message: 'How would you like your logo to take shape?',
                choices: ['Triangle', 'Square', 'Circle'],
              },
              {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color OR hexadecimal code for the text color of your logo.',
              },
              {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter a color OR hexadecimal code for the background color of your logo.',
              },
              {
                type: 'input',
                name: 'text',
                message: 'Please provide 3 characters you would like to display on your logo.',
              },
        ])
        // catch to make sure user doesn't enter too many characters
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Must enter a value of no more than 3 characters");
            }else {
                writeToFile("logo.svg", answers);
            }
        });
};
// call the prompt function to initiate questions
promptUser();

