let productosEnCarro = JSON.parse(localStorage.getItem("articulosCarrito"));
let listaCarrito = document.querySelector("#lista-carrito");

productosEnCarro.forEach((producto) => {
  listaCarrito.innerHTML += `
  <li>
    <article class="chart-item lista-carrito">
        <div class="chart-article">
            <img class="chart-article-image img-chart"src=${producto.imagen} >
        </div>
        <div class="chart-description">
            <h3 class="article-description title-chart">${producto.titulo}</h3>
                <p class="free-ship">Envío gratis</p>
                <!-- Aca deberíamos poner un if de si tiene envío gratis que le figure y sino no -->
        </div>
        <div class="chart-quantity">
            <label for="">Cantidad</label> 
            <select name="quantity" id="quantity">
                <option value="1" name="1">1</option>
                <option value="2" name="2">2</option>
                <option value="3" name="3">3</option>
                <option value="4" name="4">4</option>
                <option value="5" name="5">5</option>
            </select>
        </div>
        <div class="chart-price">
        ${producto.precio}
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

console.log(productosEnCarro);
