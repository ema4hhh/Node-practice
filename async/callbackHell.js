function hola(nombre, callback) {
  setTimeout(() => {
    console.log('Hola, ' + nombre);
    callback();
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla...');
  })
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    otroCallback();
  }, 1000);
}

console.log('Iniciando proceso...');
hola('Emanuel', () => {});
adios('Emanuel', () => {});