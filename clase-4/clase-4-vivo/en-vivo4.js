const usuario = {
  nombre: "Andrés",
  email: "asd@asd",
  login: false,
  saludar: function(){
    return "Hola soy Andrés"
  }
}

const usuario2 = {
  nombre: "David",
  email: "dsa@asd",
  login: true,
  saludar: function(){
    return "Hola soy David"
  }
}

/* console.log(usuario.nombre)
console.log(usuario.email)
console.log(usuario.login)
console.log(usuario.saludar())

usuario.nombre = "David"
console.log(usuario.nombre)

console.log(usuario)
console.table(usuario) */

const usuarios = [usuario, usuario2]



// for(let i =0; i<2; i++){
//   console.log(usuarios[i].nombre)
// }

const numeritos = [123, 45, 723, 5123, 66, 2, -5,]

console.log(numeritos)

/* console.log(numeritos[2])

for(let i=0; i<=6; i++){
  console.log(numeritos[i])
}
for(let i=0; i<7; i++){
  console.log(numeritos[i])
}
for(let i=0; i<numeritos.length; i++){
  console.log(numeritos[i])
} */

/* numeritos[4] = 7  

console.log(numeritos)

console.log(numeritos[-3])

numeritos[8] = 1

console.log(numeritos)

delete numeritos[8]

console.log(numeritos) */

const nombres = ["Andrés", "David", "Pablo", "Karina"]
console.log(nombres.length)
console.log(nombres)

// console.log(nombres.unshift("Franco"))

// console.log(nombres.push("Juan"))
// console.log(nombres.push("María"))


/* console.log(nombres.shift())
console.log(nombres.pop())

console.log(nombres)
console.log(nombres.length)
 */
/* 
console.log(nombres.join())
console.log(nombres.join("🎁"))
console.log(nombres)
 */
/* function mostrarUsuarios(){
  let usuariosString = "Los usuarios son: "
  // usuariosString = usuariosString + saraza
  usuariosString += nombres.join(",  ") + "."
  alert(usuariosString)
} */

// console.log(numeritos.join())
// console.log(usuarios.join())


/* 
console.log(nombres.indexOf("Pablo"))

console.log(nombres[nombres.indexOf("Pablo")])

const listaConRepe = [1,2,3,4,5,5,5,6]

console.log(listaConRepe.indexOf(5))
console.log(listaConRepe.lastIndexOf(5))

console.log(nombres.includes("Pablo"))
console.log(nombres.includes("Javier"))

const numeros = []

function agregarNumeros(numero){
  const existeEnLista = numeros.includes(numero)
  const esNumero = typeof numero === "number"
  if(existeEnLista){
    console.warn(`El número ${numero} ya existe en la lista`)
  } else if(!esNumero){
    console.warn("El valor ingresado no es un número")
  } else{
    numeros.push(numero)
  }
}

agregarNumeros(4)
agregarNumeros(3)
agregarNumeros(2)
agregarNumeros(2)
agregarNumeros("hola")

console.log(numeros) */