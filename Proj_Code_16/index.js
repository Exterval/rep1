import chalk from 'chalk';
//import from module use "type": "module", in package.json

let isAnError = false; //is !isAnError, therefore must be true to the bottom code.

if(isAnError){
    console.log(chalk.blue('Program proceeded as normal.'));
}else{
    console.log(chalk.red('An error occured.'));
}





