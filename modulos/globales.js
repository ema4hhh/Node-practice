/* let i = 0

let intervalo = setInterval(function(){
  if (i === 3) { 
    clearInterval(intervalo)
  }
  i++;
  console.log("hola");
}, 1000)
 */
/* setImmediate(function() {
  console.log("Hola");
});
 */
//console.log(process);

console.log(__dirname);

console.log(__filename);

globalThis.miVariable = "elValor";

console.log(global.miVariable);