let productosEnCarro = JSON.parse(localStorage.getItem("articulosCarrito"));
let listaCarrito = document.querySelector("#lista-carrito");
let finalPrice = document.querySelector("#final-price")
let cleanData = productosEnCarro.map((producto) => {
    return parseInt(producto.id)
})
console.log(cleanData);
fetch('/api/products')
    .then(res => res.json())
    .then((products) => {
        let productsDB = products.data;
        console.log(productsDB);

        let filtrados = productsDB.filter((producto) => {
            return cleanData.includes(producto.id) ? producto : ''
        })
        
        filtrados.forEach((producto) => {
            listaCarrito.innerHTML += `
            <li>
              <article class="chart-item lista-carrito">
                  <div class="chart-article">
                      <img class="chart-article-image img-chart"src="http://localhost:3000/img/products/${producto.image}" >
                  </div>
                  <div class="chart-description">
                      <h3 class="article-description title-chart">${producto.name}</h3>
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
    })
    .catch(err => console.log(err))

let vaciarCarrito = document.querySelector('#vaciar-carrito');

vaciarCarrito.addEventListener('click', () => {
    localStorage.removeItem('articulosCarrito')
})