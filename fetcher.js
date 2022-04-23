const request = require('request');
const args = process.argv;
const fs = require('fs')
console.log(args);

const cmdArguments = args.slice(2);
request(cmdArguments[0], (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 

  //Write data to given file which us in same root directory
  fs.writeFile(cmdArguments[1], body, error => {
    if (error) {
      console.error('An error was encountered:', error);
    } else {
      console.log(`Downloaded and saved to ${cmdArguments[1]}`);
    }
  });
});