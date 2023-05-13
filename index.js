const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require(".lib/shapes");

function writeToFile(fileName, answers){
    let svgString = "";
    svgString =
    `svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape ==="Triangle") {
        shapeChoice = new Triangle();
        svgString+= `<polygon points="145,10 285,180 10,180" fill="${answers.shapeColor}"/>`
    }else if (answers.shape ==="Square") {
        shapeChoice = new Square();
        svgString+= `<rect x="50" y="25" width="200" height="200" fill="${answers.shapeColor}"/>`
    }else if (answers.shape ==="Circle") {
        shapeChoice = new Circle();
        svgString+= `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`
    }
    svgString += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</svg>";


fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg")
});
};

function promptUser() {

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
                name: 'text',
                message: 'Please provide 3 characters you would like to display on your logo.',
              },
              {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color OR hexadecimal number for the text color of your logo.',
              },
              {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter a color OR hexadecimal number for the text color of your logo.',
              },
        ])
}