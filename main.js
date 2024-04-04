#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blackBright("\n \t Wellcome to my simple Calculator for craftcode-Noman\n"));
// Asking Question from user through inquirer
const answer = await inquirer.prompt([
    {
        message: chalk.yellow("Enter your first number"),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk.yellow("Enter your second number"),
        type: "number",
        name: "secondNumber",
    },
    {
        message: chalk.greenBright("Select one of the operators to perform operation"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(chalk.bgGray("answer"));
//conditional statement if - else
/*

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);

} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);

} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);

} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log(chalk.red("please select a valid input"));
}*/
if (answer.operator === "Addition") {
    console.log(chalk.yellow("Result: "), chalk.blue(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.yellow("Result: "), chalk.blue(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.yellow("Result: "), chalk.blue(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.yellow("Result: "), chalk.blue(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.red("Please select a valid input"));
}
