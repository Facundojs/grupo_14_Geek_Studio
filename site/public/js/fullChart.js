let pathName = window.location.pathname
if (pathName === "/productos/carro") {
    let productosEnCarro = JSON.parse(localStorage.getItem("articulosCarrito"));
    let listaCarrito = document.querySelector("#lista-carrito");
    let finalPrice = document.querySelector("#final-price")
    let cleanData = productosEnCarro.map((producto) => {
        return parseInt(producto.id)
    })
    fetch('/api/products')
        .then(res => res.json())
        .then((products) => {
            let productsDB = products.data;
            let precioTotal = 0
            let filtrados = productsDB.filter((producto) => {
                return cleanData.includes(producto.id) ? producto : ''
            })
            filtrados.forEach((producto) => {
                precioTotal += parseInt(producto.price)
                listaCarrito.innerHTML += `
                <li>
                <article class="chart-item lista-carrito">
                    <div class="chart-article">
                        <img class="chart-article-image img-chart"src="/img/products/${producto.image}" >
                    </div>
                    <div class="chart-description">
                        <h3 class="article-description title-chart">${producto.name}</h3>
                            <p class="free-ship">Envío gratis</p>
                            <!-- Aca deberíamos poner un if de si tiene envío gratis que le figure y sino no -->
                    </div>
                    <div class="chart-quantity">
                        <label for="">Cantidad</label> 
                        <select name="quantity" id="quantity-${producto.id}">
                            <option value="1" name="1">1</option>
                            <option value="2" name="2">2</option>
                            <option value="3" name="3">3</option>
                            <option value="4" name="4">4</option>
                            <option value="5" name="5">5</option>
                        </select>
                    </div>
                    <div class="chart-price">$
                    ${producto.price}
                    </div>
                    <form action="">
                        <div class="trash">
                            <i class="fas fa-trash trash"></i>
                        </div>
                    </form>
                </article>
            </li>
                `;
            });
            finalPrice.innerHTML = `$${precioTotal}`
        })
        .then(() => {
            let cantidad = document.getElementById('quantity');
            console.log(cantidad);
            cantidad.addEventListener('click', function (e) {
                console.log(this.value);
                console.log(e);
            })
        })
        .catch(err => console.log(err))
    let vaciarCarrito = document.querySelector('#vaciar-carrito');
    vaciarCarrito.addEventListener('click', () => {
        localStorage.removeItem('articulosCarrito')
    })
} else {
let listaProductos = document.querySelector(".products-list");
    let articulosCarrito = [];
    cargarEventListeners();
    function cargarEventListeners() {
    listaProductos.addEventListener("click", agregarProducto);
    }
    function agregarProducto(e) {
    // e.preventDefault();
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
}