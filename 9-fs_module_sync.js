const {readFileSync,writeFileSync} = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

//top write something in a file. If the file does not exist node creates it
/* writeFileSync(
    './content/third.txt', 
    `Here is the result: ${first},${second}` ) */

// to append something into a file
 writeFileSync(
    './content/third.txt', 
    `Here is the result: ${first},${second}`,
    {flag: 'a'}  //if flag equals "a" node appends
 )

 console.log('done with this task');
 console.log('starting the next one');
