const lista = []
const botonLista = document.getElementById("verLista")
// Maneras de manejar promesas
// Acuerdense que todas las promesas son y se manejan asincrónicamente


/* // url
const url = "./lista.json"
// puede ser a un archivo json local, en github pages esto da problemas. Acuerdense, que el link es en relación al HTML.
// puede ser a un api rest
function mostrarLista(){
  lista.forEach(elemento=>{
    console.log(elemento.nombre)
  })
}

// fetch(url).then(respuesta => {
//   // console.log(respuesta)
//   return respuesta.json()
// }).then(segundaRespuesta => {
//   // console.log(segundaRespuesta)
//   segundaRespuesta.forEach(elemento=>{
//     lista.push(elemento)
//   })
//   console.log("asincrónico",lista)
//   botonLista.addEventListener("click",mostrarLista)
// }).catch(error=>{
//   console.warn("Se produjo un error", error)
// })

mostrarLista()


async function conseguirLista() {
  try{
    // conseguir datos
    const datosJSON = await fetch(url)
    // convertir datos json a js
    const datos = await datosJSON.json()

    // utilización de datos
    datos.forEach(elemento=>{
      lista.push(elemento)
    })
    botonLista.addEventListener("click",mostrarLista)
  }catch(err){
    console.warn(err)
  }
  
}

conseguirLista()

// Errores

console.log("sincrónico",lista) */















const botonSWAL = document.getElementById("btnSwal")
const botonToast = document.getElementById("botonToastify")

// Seet Alert
// https://sweetalert2.github.io/

botonSWAL.addEventListener("click", ()=>{
  // Swal.fire({
  //   title: 'No me toques',
  //   text: 'No me gusta',
  //   icon: 'error',
  //   confirmButtonText: 'Entiendo'
  // })
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "producto Agregado al carrito"
  });
})




// toastify
// https://apvarun.github.io/toastify-js/

botonToast.addEventListener( "click", ()=>{
  Toastify({
    text: "Tramite Realizado",
    duration: 6000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, cyan, white, cyan)",
      color: "black"
    },
    onClick: function(){} // Callback after click
  }).showToast();
})

// Luxon
// https://moment.github.io/luxon/#/?id=luxon

let DateTime = luxon.DateTime;
console.dir(DateTime)
console.log(DateTime.now())
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_SHORT))
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_LONG))
console.log(DateTime.now().zoneName)
