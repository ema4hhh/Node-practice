const fs = require("fs");

//console.log(fs);

function Leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  })
}

Leer(__dirname + "/archivo1.txt", console.log)

function Escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if(err) {
      console.log("Hay un error", err);
    } else {
      console.log("Se ha escrito correctamente");
    }

  })
}

Escribir(__dirname + "/archivo1.txt", "soy un archivo nuevo", console.log)

function Borrar(ruta, cb) {
  fs.unlink(ruta, cb);  
}

Borrar(__dirname + "/archivo1.txt", console.log)