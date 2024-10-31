function dX(lados){
  return ()=>{
    return Math.floor((Math.random()*lados)+1)
  }
}

const d6 = dX(6)
const d20 = dX(20)

console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())

class Dado{
  constructor(lados){
    this.lados = lados
  }
  roll(){
    return Math.floor((Math.random()*this.lados)+1)
  }
}

const d12 = new Dado(12)

console.log(d12.roll())
console.log(d12.roll())
console.log(d12.roll())
console.log(d12.roll())

// !6
// 6 * 5 * 4 * 3 * 2 * 1 

const factorial = (numero)=>{
  if(numero <=1){
    return 1
  }
  return numero*factorial(numero-1)
}

// numero*factorial(numero-1)*factorial(numero-2)*factorial(numero-3)*factorial(numero-4)**factorial(numero-5)

console.log(factorial(6))

const numeros = [1,23,44,557,8]

function paraCada(proceso, lista){
  // el prioceso va a ser uan función
  // la lista es un array
  for(let i=0; i<lista.length; i++){
    proceso(lista[i])
  }
}

function porDos(nro){
  console.log( nro*2)
}
function mostrarConIVA(nro){
  console.log(`El nro ${nro} con IVA es ${nro*1.21}`)
}

// paraCada(porDos,numeros)
// paraCada(mostrarConIVA,numeros)

numeros.forEach(porDos)

numeros.forEach((elemento, indice) =>{
  console.log(indice)
  console.log(elemento)
  console.log(elemento*indice)
})
numeros.forEach((e, i) =>{
  console.log(i)
  console.log(e)
  console.log(e*i)
})

// For each de forma destructiva
// numeros.forEach((e,i)=>{
//   numeros[i] = e*i
// })

// console.log(numeros)


class Usuario {
  constructor(nombre, edad, login){
    this.nombre = nombre;
    this.edad = edad;
    this.login = login;
  }
  saludar = function(){
    console.log(`Bienvenido/a ${this.nombre}`)
  }
  mostrarDatos = function(){
    return `Nombre: ${this.nombre} | Edad: ${this.edad} | Estado: ${this.login ? "Conectado" : "Desconectado"}`
  }
}



const usuarios = []



function agregarUsuario(nombre, edad, login){
  usuarios.push(new Usuario(nombre, edad, login))
}



agregarUsuario("Andrés", 23, true)
agregarUsuario("Andrés", 28, true)
agregarUsuario("Ezequiel", 34, false)
agregarUsuario("Alicia", 25, true)
agregarUsuario("Mateo", 14, false)
agregarUsuario("Julieta", 28, true)

console.log(usuarios.find(usuario => usuario.nombre === "Juan"))
console.log(usuarios.find(usuario => usuario.nombre === "Andrés"))

console.log(usuarios.filter(usuario=> usuario.edad >= 18))
console.log(usuarios.filter(usuario=> usuario.login))

console.log(usuarios.some(usuario=>usuario.edad<=18))
console.log(usuarios.some(usuario=>usuario.login))

const productos = [{nombre:"pera", precio: 22},{nombre:"manzana", precio: 45},{nombre:"tomate", precio: 85},{nombre:"lechuga", precio: 12},{nombre:"cebolla", precio: 7}]

// const productosIva = productos.map(prod=>{
//   const temp = JSON.parse(JSON.stringify(prod))
//   temp.precio *= 1.21
//   // temp.precio = temp.precio*1.21
//   return temp
// })

// const prod2 = productos.map(elemento =>{
//   elemento.nombre = elemento.nombre.toUpperCase()
//   return elemento
// })
// console.log(numeros)
// const numerosDoble = numeros.map(x=>x*2)

// console.log(numeros)
// console.log(numerosDoble)


// console.log(productosIva)
// console.log(productos)

const carrito = []

function agregarCarrito(elemento, cantidad){
  const temp = JSON.parse(JSON.stringify(elemento))
  temp.cantidad = cantidad
  carrito.push(temp)
}

agregarCarrito(productos[2],3)
agregarCarrito(productos[1],7)
agregarCarrito(productos[3],1)

console.log(carrito)

const total = carrito.reduce((acumulador, producto)=>{
  return acumulador + producto.cantidad * producto.precio
}, 0)

// console.log(total)

const nombres = usuarios.reduce((accumulador, usuario)=>accumulador+` ${usuario.nombre};`,"Los usuarios son:")
// console.log(nombres)


const ordename = [2, 11, 3, 31, 144]

// ordename.sort()

console.log(ordename)

ordename.sort((primero, segundo)=>primero - segundo)

console.log(ordename)
ordename.sort((primero, segundo)=>segundo - primero)

console.log(ordename)

console.log(usuarios)

usuarios.sort((primer, segundo)=>{
  if(primer.login){
    return -1
  } else if(segundo.login){
    return 1
  } else {
    return 0
  }
})
console.log(usuarios)