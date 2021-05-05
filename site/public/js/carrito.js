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
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector("h4").textContent,
    precio: producto.querySelector("p").textContent,
    id: producto.querySelector("button").getAttribute("data-id"),
    cantidad: 1,
  };

  let oldLocalStorage;
  if (localStorage.getItem("articulosCarrito").length > 0) {
    oldLocalStorage = localStorage.getItem("articulosCarrito");
  }

  articulosCarrito = [...oldLocalStorage, ...articulosCarrito, infoProducto];

  localStorage.setItem("articulosCarrito", JSON.stringify(articulosCarrito));

  console.log(articulosCarrito);
}
