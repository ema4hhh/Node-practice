function hola(nombre, callback) {
  console.log('Hola, ' + nombre);
  setTimeout(() => {
    console.log('Estoy siendo asíncrona');
    callback();
  }, 1500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    otroCallback();
  }, 1000);
}

console.log('Iniciando proceso...');
hola('Emanuel', () => {
  console.log('Finalizando proceso...');
});
adios('Emanuel', () => {
  console.log('Finalizar x2')
});