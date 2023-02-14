const {readFile, writeFile} = require('fs').promises;
/* Esto queda para referencia pero si hago require('fs).promise trae las funciones con promesa, entonces no hace falta que use util 
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile); */


const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile(
            './content/result-mind-grenade.txt',
            `An example of how to use promises: ${first} ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
    
}

start();


/* const getText = (path) => {
    return new Promise((resolve,reject) => {        
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }

        })
    })
} */


/* Esta parte del codigo fue reemplazada con try - catch 
getText('./content/second.txt')
    .then((result) =>console.log(result))
    .catch((err) => console.log(err)); */