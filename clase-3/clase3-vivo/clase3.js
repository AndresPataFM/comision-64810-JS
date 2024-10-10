/* function tirarDado(){
  console.log(Math.floor(Math.random()*6+1))
}

tirarDado()
tirarDado()
tirarDado()
tirarDado()
tirarDado()
tirarDado()
tirarDado()
tirarDado()
tirarDado() */

// console.log(tirarDado())

/* function tirarDado(){
  let valorDado = Math.floor(Math.random()*6+1)
  return valorDado
}

const dadoJugadorUno = tirarDado()
const dadoJugadorDos = tirarDado()

console.log(dadoJugadorUno)
console.log(dadoJugadorDos)


if(dadoJugadorUno < dadoJugadorDos){
  console.log("Gano el jugador 2")
} else if (dadoJugadorUno > dadoJugadorDos){
  console.log("Gano el jugador 1")
} else {
  console.log("Empate")
}
 */

/* function tirarDadoX(caras){
  console.log(caras)
  let valorDado = Math.floor(Math.random()*caras+1)
  return valorDado
} */

/* function tirarDadoX(caras = 6){
  console.log(caras)
  let valorDado = Math.floor(Math.random()*caras+1)
  return valorDado
}
console.log(tirarDadoX()) */

/* console.log(tirarDadoX(6))
console.log(tirarDadoX(20)) */

/* 
function comprarValorJugadores(valorUno, valorDos){
  console.log(valorUno)
  console.log(valorDos)
  if(valorUno < valorDos){
    console.log("Gano el jugador 2")
  } else if (valorUno > valorDos){
    console.log("Gano el jugador 1")
  } else {
    console.log("Empate")
  }
}

const j1 = tirarDadoX(20) 
console.log(j1)
const j2 = tirarDadoX(20) 
console.log(j2)

comprarValorJugadores(j1, j2) */

/* function tirarDadoX(caras = 6){
  console.log(caras)
  let valorDado = Math.floor(Math.random()*caras+1)
  return valorDado
}
console.log(tirarDadoX()) */

// function saludar(nombre = "Juan"){
//   return`Buenos dias ${nombre}`
// }

/* console.log(saludar("Andrés"))
console.log(saludar("David"))
console.log(saludar()) */


/* const saludo = function(nombre = "Juan"){
  return`Buenos dias ${nombre}`
}

console.log(saludo())

// alert(saludo())

// saludo = "Buenos días empresa, que día más productivo"

console.log(saludo)
console.log(saludo()) */


/* function tirarDadoX(caras = 6){
  const valorAzar = Math.random() * caras
  const valorFinal = Math.floor(valorAzar+1)
  return valorDado
} */

/* function tirarDadoX(caras = 6){
  console.log(caras)
  let valorDado = Math.floor(Math.random()*caras+1)
  return valorDado
}
 */


/* const tirarDadoX = function(caras = 6){
  console.log(caras)
  let valorDado = Math.floor(Math.random()*caras+1)
  return valorDado
} */

/* const tirarDadoX = (caras = 6)=>{
  console.log(caras)
  let valorDado = Math.floor(Math.random()*caras+1)
  return valorDado
} */


/* const tirarDadoX = (caras)=>{
  return Math.floor(Math.random()*caras+1)
} */

// Return implicito
// const tirarDadoX = (caras)=> Math.floor(Math.random()*caras+1)

/* const tirarDadoX = caras => Math.floor(Math.random()*caras+1)

console.log(tirarDadoX(12))






function pedirDatosUsuario(){
  const nombre = prompt(" Ingrese su nomrbe")
  const edad = parseInt(prompt("Ingrese su edad"))
}
 */

/* let edad = parseInt(prompt("Ingresa tu edad"));
let anioPrimerMundial = 1930
let anioActual = 2024 
let totalDeMundiales = 21;
let anioDeNacimiento = anioActual - edad;

if (anioDeNacimiento > anioActual) {
  console.log("edad invalida")
} else if (anioDeNacimiento >= anioActual - 4) {
  console.log("Lo lamento, no viviste ningun mundial")
} else {
  let mundialesVividos = Math.floor((anioActual - Math.max(anioDeNacimiento, anioPrimerMundial)) / 4)
  if (mundialesVividos > totalDeMundiales) {
    mundialesVividos = totalDeMundiales;
  }
  console.log(`Viviste ${mundialesVividos} mundiales`);
} */


// Premisa: una calculadora de mundiales sabiendo que estos ocurren cada 4 años y la fecha del último mundial, aproximado al año

function pedirEdad(){
  // que el usuario ingrese correctamente su edad
  let edadIngresada = parseInt(prompt("Ingresa tu edad"))
  while(isNaN(edadIngresada)){
    edadIngresada = parseInt(prompt("Ingresa tu edad nuevamente, como un número entero"))
  }
  return edadIngresada
}
function calcularMundiales(){
  // sin array con los años exactos esto no se puede hacer de manera exacta
  const anioUltimoMundial = 2022
  const anioActual = 2024 
  const totalDeMundiales = 21;
  const edad = pedirEdad()
  const edadUtil = edad - (anioActual-anioUltimoMundial)
  if(edadUtil/4>=totalDeMundiales){
    alert("viviste aproximadametne 21 mundiales")
  } else {
    const mundialesVistos = Math.floor(edadUtil/4)
    alert(`Con ${edad} viviste aproximadamente ${mundialesVistos} mundiales.`)
  }
}

calcularMundiales()