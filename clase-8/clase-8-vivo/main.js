// console.log( "Inicio 1")

// setTimeout(()=>{
//   console.log("👻 2")
//   // alert("👻")
// }, 3000)

// setTimeout(()=>{
//   console.log("💀 3")
//   // alert("👻")
// }, 0)


// console.log("Fin 4")


/* let segundos = 0

const segundero = setInterval(()=>{
  console.log(`Pasaron ${++segundos} segundos`)
}, 1000)

console.log(segundero)

const mataSegundero = setTimeout(()=>{
  clearInterval(segundero)
}, 5000)

console.log(mataSegundero)

clearTimeout(mataSegundero) */

// console.log("inicio")

// try{
//   const nombre = "andrés"
//   console.log("hola " + nombre)
//   // nombre = "David"
//   console.log("chau")
// } catch (error) {
//   console.warn(error)
// } finally {
//   console.log("siempre me ejecuto")
// }

// console.log("fin")

// const promesa = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     const nro = Math.random()
//     if(nro<0.5){
//       return reject("Cruz")
//     } else {
//       return resolve("Cara")
//     }
//   }, 3000)
// }).then(rta=>{
//   console.log(rta)
// }).catch(err=>{
//   console.warn(err)
// })

// console.log(promesa)

const listaDOM = document.getElementById("pokemon")
const url = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151"

function mostrarPokemons(arrayPokemon){
  listaDOM.innerHTML = ""
  arrayPokemon.forEach(pokemon => {
    const a = document.createElement("a")
    const li = document.createElement("li")
    a.href = pokemon.url
    a.target = "_blank"
    a.textContent = pokemon.name
    li.appendChild(a)
    listaDOM.appendChild(li)
  });
}


// fetch(url).then(rta=>{
//   return rta.json()
// }).then(respuesta=>{
//   console.log(respuesta)
//   mostrarPokemons(respuesta.results)
// }).catch(e=>
//   console.warn("Fetch fallido")
// )

async function cargarPokemon(){
  // promesa inicial
  const datosJSON = await fetch(url)
  // promesa para cambiar a json
  const datos = await datosJSON.json()
  // agarro lo que uso de los resultados
  const listaPoke = datos.results
  mostrarPokemons(listaPoke)
}

cargarPokemon()