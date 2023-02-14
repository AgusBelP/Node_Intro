const EventEmitter =  require('events');

const customEmitter = new EventEmitter();

// .on = listens to an event.
// .on: el primer string es el nombre del evento y luego a callback function
customEmitter.on('response', (name, id) => {   
    console.log(`data received with user ${name} and id: ${id}`);
} )

customEmitter.on('response', () => {   
    console.log(`some other logic here`);
} ) 

// .emit = emits an event
customEmitter.emit('response', 'jhon', 34);

// El orden IMPORTA!! Si coloco el método emit antes de un listen (on) ese segundo método on no será emitido