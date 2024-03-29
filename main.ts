#! /usr/bin/env node
import inquirer from "inquirer";
while (true){
    const options: {num1:number, operators:string, num2:number} = await inquirer.prompt([{
        type: 'number',
        name: 'num1',
        message: 'Enter first number: '
    },
    {
        type: 'list',
        name: 'operators',
        message: 'Please Choose Operator',
        choices: ["ADD", "SUBTRACT", "DIVIDE", "MULTIPLY", "REMAINDER",'PERCENTAGE']
    },
    {
        type: 'number',
        name: "num2",
        message: 'Enter second number: '
    }
    ]);

    if (options.operators === "ADD") {
        console.log(`${options.num1} + ${options.num2} = ${options.num1 + options.num2}`)
    } else if (options.operators === "SUBTRACT") {
        console.log(`${options.num1} - ${options.num2} = ${options.num1 - options.num2}`)
    } else if (options.operators === "DIVIDE") {
        console.log(`${options.num1} / ${options.num2} = ${options.num1 / options.num2}`)
    } else if (options.operators === "MULTIPLY") {
        console.log(`${options.num1} * ${options.num2} = ${options.num1 * options.num2}`)
    } else if(options.operators === "REMAINDER") {
        console.log(`The remainder of ${options.num1} / ${options.num2} is ${options.num1 % options.num2}`)
    } else {
        console.log(`THE ${options.num2} PERCENT OF ${options.num1} is ${(options.num2 * options.num1) / 100}`)
    }

    const repeat = await inquirer.prompt([{
        type: 'list',
        name: 'calculateAgain',
        message: 'Do you want to calculate again',
        choices: ['YES', 'NO']
    }]);
    if (repeat.calculateAgain === "NO") {
        break
    }
};