// const usuario = {
//   nombre: "Andrés",
//   edad: 30,
//   login: false,
//   saludar: function(){
//     console.log("hola")
//   }
// }
// const usuario2 = {
//   nombre: "Juan",
//   edad: 45,
//   login: true,
//   saludar: function(){
//     console.log("hola")
//   }
// }

// const usuarios = [usuario, usuario2]
// console.log(usuario)

// console.log(usuario.nombre)
// console.log(usuario["edad"])

// console.log(usuario.email)

// console.log(usuarios[0].login)


// // console.log(usuaario.nombre)
// // console.log(usuarios[2].edad)


// usuario.login = true

// console.log(usuario.login)
// console.log(usuarios[0].login)

// usuario.email = "asd@asd.com"

// console.log(usuario)

// usuario["apellido"]="Pata"

// console.log(usuario)

// usuario[" no lo hagan "] = "porque lo hiciste"

// console.log(usuario)

// // usuario.no lo hagan
// console.log(usuario[" no lo hagan "])

// // usuario." no lo hagan "

// /* for(propiedad in usuario){
//   console.log(propiedad)
// } */

// usuario.saludar()

// console.log(usuarios[1].edad)

// // crear usuarios

// function generarUsuario(nombre, edad){
//   const usuarioTemp = {
//     nombre: nombre,
//     edad: edad,
//     login: false,
//     saludar: function(){
//       console.log("hola")
//     }
//   }
//   return usuarioTemp
// }

// const usuario3 = generarUsuario("David", 20)

// console.log(usuario3)


/* function Usuario(nombre, edad){
  this.nombre = nombre;
  this.edad = edad
  this.login = false
  this.saludar = function(){
    console.log("hola")
    }
    }
    */

class Usuario {
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.login = false;
  }
  saludar = function(){
    console.log(`Bienvenido/a ${this.nombre}`)
  }
  mostrarDatos = function(){
    return `Nombre: ${this.nombre} | Edad: ${this.edad} | Estado: ${this.login ? "Conectado" : "Desconectado"}`
  }
}

function guardarUsuarios(){
  const usuariosJSON = JSON.stringify(usuarios)
  localStorage.setItem("usuarios", usuariosJSON)
}

function obtenerUsuarios(){
  const usuariosObtenidos = localStorage.getItem("usuarios")
  console.log(usuariosObtenidos)
  const usuariosParseados = JSON.parse(usuariosObtenidos)

  const usuariosTemp = []
  // Lo volvemos a pasar x el constructor para recuperar los métodos
  if(usuariosObtenidos){
    for(const usuario of usuariosParseados)[
      usuariosTemp.push(new Usuario(usuario.nombre, usuario.edad, usuario.login))
    ]
  }
  return usuariosTemp
}

const usuarios = obtenerUsuarios() 

function mostrarUsuarios(){
  let texto = "El listado de usuarios es:"
  for(usuario of usuarios){
    texto+= "\n"+usuario.mostrarDatos()
    // texto = texto + 
  }
  return texto
}

function agregarUsuario(nombre, edad, login){
  usuarios.push(new Usuario(nombre, edad, login))
  guardarUsuarios()
}
let loop = true
while(loop){
  alert("Generar Usuarios")
  const nombre = prompt("Ingrese el nombre")
  const edad = parseInt(prompt("Ingrese la edad"))
  const login = confirm("Se encuentra conectado?")
  agregarUsuario(nombre, edad, login)
  alert(mostrarUsuarios())
  loop = confirm("Desea agregar otro usuario?")
}


// agregarUsuario("Andrés", 23, true)
// agregarUsuario("Ezequiel", 34, false)
// agregarUsuario("Alicia", 25, true)
// agregarUsuario("Mateo", 14, false)
// agregarUsuario("julieta", 28, true)


// usuarios[2].login = true
// usuarios[4].login = true

// console.table(usuarios)

// console.log(usuario4)

// usuario4.saludar()
// usuario4.mostrarDatos()


/* console.log(mostrarUsuarios())

function revisarOnline(usuario){
  if(usuario.login){
    return "Conectado"
  } else {
    return "Desconectado"
  }
} */

/* console.log(usuarios[0].login ? "Conectado" : "Desconectado")
console.log(usuarios[1].login ? "Conectado" : "Desconectado")
console.log(usuarios[2].login ? "Conectado" : "Desconectado")
console.log(usuarios[3].login ? "Conectado" : "Desconectado")
console.log(usuarios[4].login ? "Conectado" : "Desconectado")

console.log(revisarOnline(usuarios[0]))
console.log(revisarOnline(usuarios[1]))
console.log(revisarOnline(usuarios[2]))
console.log(revisarOnline(usuarios[3]))
console.log(revisarOnline(usuarios[4])) 
 */
// const numero = 4

// localStorage.setItem("numeroFavorito", numero)


// const numeroObtenido = localStorage.getItem("numeroFavorito")

// console.log(numeroObtenido)
// console.log(typeof numeroObtenido)
// console.log(4)
// console.log("4")
// localStorage.setItem("usuarios", usuarios)



// localStorage.removeItem("usuarios")

// guardarUsuarios()

// console.log(usuarios)
// obtenerUsuarios()
// console.log(usuarios)

// const andres = {
//   nombre: "Andrés",
//   edad: 30,
//   login: false,
//   saludar: function(){
//     console.log("hola")
//   }
// }

// const andres2 = JSON.parse(JSON.stringify(andres))

// andres2.login = true

// console.log(andres)

