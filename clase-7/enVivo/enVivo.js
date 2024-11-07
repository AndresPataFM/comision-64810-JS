// Procedimiento
// 🔶 Encontrar Nodos 🔶
// 🔶 Modificar Nodos 🔶

// o

// 🔶 Crear Nodos 🔶
// 🔶 Modificar Nodos 🔶
// 🔶 Agregarlo al DOM 🔶


// 🔶 Encontrar Nodos 🔶
// 🔹 document.getElementById 🔹
// array.find
const encontrame = document.getElementById("encontrame")

// console.log(encontrame)
// console.dir(encontrame)

const menu = document.getElementById("menu")
// console.log(menu)

// const liHTML = menu.getElementById("liHTML")

// console.log(liHTML)

// // 🔹 document.getElementsByClassName 🔹
// // array vivo => Nunca lo modifiquen mientras lo recorren
// // array.filter
const rojos = document.getElementsByClassName("rojo")
// console.log(rojos)

// // puede buscar combinación de clases


// // // 🔹 document.getElementsByTagName 🔹
// // Es similar a filter con un array vivo
const divs = document.getElementsByTagName("div")
// console.log(divs)


// // // 🔹 document.querySelector 🔹
// // como find, devuelve el primero que cumpla
const magenta = document.querySelector("#encontrame.magenta")
const confiable = document.querySelector("#menu")
// console.log(magenta)
// console.log(confiable)

const primerRojo = document.querySelector(".rojo")
const primerP = document.querySelector("p")
// console.log(primerP)

// // // 🔹 document.querySelectorAll 🔹
// // similar a filter

const todosLi = document.querySelectorAll("li")
// console.log(todosLi)


// // 🔶 Modificar Nodos 🔶
console.log(encontrame.innerHTML)
console.log(encontrame.innerText)
console.log(encontrame.textContent)

// encontrame.textContent = "Te encontre"
// encontrame.textContent = "Nuevamente"

// encontrame.innerHTML = "<button>Alo</button>"

console.log(encontrame.className)
// encontrame.className = "rojo cursiva carta"
console.log(encontrame.classList)

encontrame.classList.toggle("verde")

// Mas usados
// classlist
// innerHTML
// innerText
// textContent
// id

// // 🔶 Crear Nodos 🔶
const deberes = ["armar cama", "limpiar", "compras", "terminar proyecto"]

const listaDeberes = document.getElementById("listaDeberes")

// metodo bruto
// function mostrarDeberes(){
//   listaDeberes.innerHTML = ""
//   deberes.forEach(deber=>{
//     listaDeberes.innerHTML += `<li>${deber}</li>`
//   })
//   console.log(listaDeberes.innerHTML)
// }

// parte a parte
function mostrarDeberes(){
  listaDeberes.innerHTML = ""
  deberes.forEach(deber=>{
    const li = document.createElement("li")
    li.textContent = deber
    listaDeberes.appendChild(li)
  })
}

const h2 = document.createElement("h2")
h2.textContent = "alo"
document.body.appendChild(h2)

// 🔶 Eventos 🔶

const trabajador = document.getElementById("eventos")

// trabajador.onclick = ()=>{alert("hola")}
// trabajador.onclick = alert("hola")

// trabajador.addEventListener("click",function(){
//   console.log("no me toques")
// })
// trabajador.addEventListener("click",function(){
//   console.log("por favor")
// })
// trabajador.onclick = ()=>{console.log("no me toques")}
// trabajador.onclick = ()=>{console.log("por favor")}

// ============
