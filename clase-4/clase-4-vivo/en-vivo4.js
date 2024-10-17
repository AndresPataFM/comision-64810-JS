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
// nombres.unshift("Alejandro")
// console.log(nombres)

// console.log(nombres.sort())
// nombres.reverse()

// nombres.sort().reverse()

/* function aZNombres(){
  nombres.sort()
  console.table(nombres)
}

function zANombres(){
  nombres.sort().reverse()
  console.table(nombres)
} */



// console.log(nombres)

/* const numeros = [2, 13, 131, 1000, 4]

numeros.sort()

console.log(numeros) */

const pacientes = []

function mostrarPacientes(){
  let listaPacientes = "Los turnos son:"
  let i = 0
  for(paciente of pacientes){
    i++
    listaPacientes += `\n ${i} - ${paciente}`
  }
  alert(listaPacientes)
}

function agregarPaciente(){
  let nombre = prompt("Ingrese el nombre del paciente que llego recien:")
  pacientes.push(nombre)
  mostrarPacientes()
}

function dejarPasarPaciente(){
  let primerPaciente = pacientes.shift()
  if(pacientes.length === 0){
    alert(`Por favor, que pase el paciente ${primerPaciente}`)
  } else {
    alert(`Por favor, que pase el paciente ${primerPaciente} y que se valla preparando ${pacientes[0]}`)
    mostrarPacientes
  }
}

const encontrarPaciente = (nombre)=>{
  const indicePaciente = pacientes.indexOf(nombre)
  alert(`Encontramos su nombre en el orden ${indicePaciente+1} en la lista`)
}

function seleccionarOpcion(opcion){
  switch(opcion){
    case 1: 
      agregarPaciente()
      break;
    case 2:
      dejarPasarPaciente();
      break;
    case 3:
      const nombrePaciente = prompt("Ingrese el nombre del paciente (cuidado con mayúsculas, tildes y espacio)")
      encontrarPaciente(nombrePaciente);
      break
    case 4:
      alert("No se realzio nada")
    default:
      alert("Se ingreso un dato no válido")
  }
}


function app(){
  let loop = true
  alert("Buenos días")
  while(loop){
    let opcion = parseInt(prompt("Operaciones a realizar: \n 1 - Agregar Paciente \n 2 - Dejar Pasar Paciente \n 3- Buscar en la lista al paciente \n 4- Nada"))
    seleccionarOpcion(opcion)
    loop = confirm("¿Desea seguir realizando operaciones?")
  }
  alert("Que tenga un buen día")
}

app()