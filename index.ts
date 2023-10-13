import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';


async function main() {
    const { operation } = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide', 'Exit'],
        }
    ]);

    if (operation === 'Exit') {
        return;
    }

    const { number1, number2 } = await inquirer.prompt([
        {
            type: 'input',
            name: 'number1',
            message: 'Enter the first number: ',
            validate: validateNumber,
        },
        {
            type: 'input',
            name: 'number2',
            message: 'Enter the second number: ',
            validate: validateNumber,
        }
    ]);

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
        console.log(chalk.red('Invalid input. Please enter valid numbers.'));
        return;
    }

    switch (operation) {
        case 'Add':
            console.log(chalk.green('The sum is: ' + (num1 + num2)));
            break;
        case 'Subtract':
            console.log(chalk.green('The difference is: ' + (num1 - num2)));
            break;
        case 'Multiply':
            console.log(chalk.green('The product is: ' + (num1 * num2)));
            break;
        case 'Divide':
            if (num2 === 0) {
                console.log(chalk.red('Division by zero is not allowed.'));
            } else {
                console.log(chalk.green('The quotient is: ' + (num1 / num2)));
            }
            break;
    }

    main();
}

function validateNumber(input: string) {
    const number = parseFloat(input);
    if (isNaN(number)) {
        return 'Please enter a valid number.';
    }
    return true;
}

main();
