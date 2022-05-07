var tabla = [
  {
    a: 1,
    b: "z"
  },
  {
    a: 2,
    b: "Otra"
  }
]

console.table(tabla);

//También es válido poner funciones dentro del .group
console.group("Conversción");
console.log("Hola");
console.group("bla")
console.log("Blablabla");
console.log("Blablabla");
console.log("Blablabla");
console.groupEnd()
console.log("Adios");
console.groupEnd()

console.log("ASJDASJJD");

console.count("veces")
console.count("veces")
console.count("AS")
console.count("veces")
console.count("AS")
console.countReset("veces")
console.count("veces")