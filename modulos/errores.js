function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z
}

function seRompeAsincrona() {
  //Se ejecuta en otro hilo de procesammiento, por eso el try catch que llama a esta función abajo no coge el error
  setTimeout(function() {
    try {
      return z + 3;
    } catch(err) {
      console.log(err.message)
    }
  })
}

try {
  /* otraFuncion(); */
  seRompeAsincrona();
} catch(err) {
  console.error("Algo ha salido mal")
  console.error(err.message)
  console.log("error capturado")
}