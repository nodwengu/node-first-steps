
const chalk = require('chalk');

const figlet = require('figlet');

const greet = require('./greet');

const styledMessage = chalk.bgGreen.black( greet('Xola') )

console.log(styledMessage)

const msg = greet('Xola');

figlet(msg, (error, data) => {
   if(error) {
      console.log('Something went wrong');
   }else {
      console.log(data)
   }
});
