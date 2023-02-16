const {createReadStream} = require('fs');

const stream = createReadStream('./content/big_file.txt', {
    highWaterMark: 90000, 
    encoding: 'utf-8'})

// Buffer: It is a temporary memory in RAM that manages chunk data and sends it for processing, Buffer is a suitable very small-sized block for binary data. The default size of every stream is 64kB but since the createReadStream has options within it's mehtod there's the option on highWaterMark. The stream returned by this method has a default highWaterMark of 64 KiB and can be changed (see example):
// const stream = createReadStream('./content/big_file.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/big_file.txt', {encoding: 'utf-8'})
// with the enconding option we can now see the content of big_file.txt


stream.on('data', (result) => {console.log(result);})

stream.on('error', (err) => {console.log(err);}) // to see the congole.log() of the error simply misswrite the path for the content folder
