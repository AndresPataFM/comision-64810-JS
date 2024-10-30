//  nombre, el precio, los ingredientes y el número de combo de la hamburguesa
//  JS una clase con el nombre Hamburguesa
//  "nombre", "precio","ingredientes" y "número de combo"
class Hamburguesa{
  constructor(nombre, precio, ingredientes, nroCombo){
    this.nombre = nombre
    this.precio = precio
    this.ingredientes = ingredientes
    this.numeroDeCombo = nroCombo
  }
}

function agregarHamburguesa(nombre, precio, ingredientes, nroCombo){
  hamburguesas.push(new Hamburguesa(nombre, precio, ingredientes, nroCombo))
}
const hamburguesas = []

agregarHamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
agregarHamburguesa("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
agregarHamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
agregarHamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso','Aderezo'], 4)
agregarHamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
agregarHamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
agregarHamburguesa("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
agregarHamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)

console.table(hamburguesas)

const encontrarHamburguesa = hamburguesas.filter(hamb=>{
  return hamb.precio >200
})

if(encontrarHamburguesa.length>0){
  console.table(encontrarHamburguesa)
} else {
  console.warn("no se han encontrado productos coincidentes.")
}

const resultadoaumento = hamburguesas.map(hamb=>{
  const hambTemp = JSON.parse(JSON.stringify(hamb))
  hambTemp.precio = hambTemp.precio * 1.11
  hambTemp.precio = hambTemp.precio.toFixed(2)
  hambTemp.precio = parseFloat(hambTemp.precio)
  return hambTemp
})

console.table(resultadoaumento)

const carrito = []

const agregarCarrito = (nroCombo)=>{
  carrito.push(hamburguesas.find((h=>{
    console.log(h)
    console.log(nroCombo)
    return h.numeroDeCombo ===  nroCombo
  })))
}

agregarCarrito(3)
agregarCarrito(7)
agregarCarrito(8)

console.table(carrito)