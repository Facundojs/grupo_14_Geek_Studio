let botonCarrito = document.querySelector(".button-chart");
let contenedorCarrito = document.querySelector(".lista-carrito");
let vaciarCarrito = document.querySelector(".vaciar-carrito");
let listaProductos = document.querySelector(".products-list");

let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  listaProductos.addEventListener("click", agregarProducto);
}

function agregarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    //    console.log("agregando al carrito");
    const productoSeleccionado = e.target.parentElement.parentElement;
    //console.log(productoSeleccionado);
    leerDatosProducto(productoSeleccionado);
  }
}

function leerDatosProducto(producto) {
  const infoProducto = {
    id: producto.querySelector("button").getAttribute("data-id")
  };

  let recoveredData = localStorage.getItem('articulosCarrito')
  if(recoveredData != null){
    let data = JSON.parse(recoveredData)
    console.log(data);
    data.push(infoProducto)
    console.log(data);
    return localStorage.setItem('articulosCarrito', JSON.stringify(data)) 
  } else {
    articulosCarrito.push(infoProducto)
    return localStorage.setItem("articulosCarrito", JSON.stringify(articulosCarrito));
  }
}

