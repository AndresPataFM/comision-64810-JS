/* 
La semana estudiaste la sintaxis para la creación de funciones, aplicando los conocimientos adquiridos completa la función.
Una vez completada tomala como base para crear una función flecha pero pasando los valores a sumar como parámetros en la función sumar. 
*/

/* 
________ sumar() {
  let numero1 = 5;
  let ________ = numero1 + 5;

  ________ resultado;
}

________ (sumar());
*/

// function sumar(numero1, numero2) {
//   const resultado = numero1 + numero2;
//   return resultado;
// }


/* const sumar = function(numero1, numero2){
  const resultado = numero1 + numero2;
  return resultado;
} */

/* const sumar = (numero1, numero2)=>{
  const resultado = numero1 + numero2;
  return resultado;
} */

/* const sumar = (numero1, numero2)=>{
  return numero1 + numero2;
} */

const sumar = (numero1, numero2) => numero1 + numero2;

console.log(sumar(7,4));
