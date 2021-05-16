let productosFavoritosInservible = JSON.parse(localStorage.getItem("articulosFavoritos"));
let listaFavoritos = document.querySelector("#lista-favoritos")

if (!productosFavoritosInservible) {
    listaFavoritos.innerHTML += `
    <h2 class="h2-fav">No tiene artículos guardados como Favoritos <i class="fas fa-heart-broken"></i></h2>
    <a href="/" class="a-fav">
    Volver a la Home
    </a>
    `
} else {
    let productosFavoritos = productosFavoritosInservible.map((elemento) => {
        return Number(elemento)
    });
    
    
    function renderizarProductos(productosFavoritos) {
        fetch("/api/products")
            .then((res) => res.json())
            .then(({data}) => {
                console.log(data);
                let filtrados = data.filter((elemento) => {
                  return productosFavoritos.includes(elemento.id) ? elemento : ''
                })
                    filtrados.forEach((producto) => {
                        listaFavoritos.innerHTML += `
                                <li>
                                    <article class="chart-item lista-carrito">
                                    <div class="chart-article">
                                        <img class="chart-article-image img-chart"src="/img/products/${producto.image}" >
                                    </div>
                                    <div class="chart-description">
                                        <h3 class="article-description title-chart">${producto.name}</h3>
                                            <p class="free-ship">Envío gratis</p>
                                            <p class="free-ship"><a href="/productos/${producto.id}">Ver detalle</a></p>
                                    </div>
                                    <div class="chart-price">$
                                        ${producto.price}
                                    </div>
                                </article>
                            </li>
                                `;
                    });
            })
            .catch((err) => console.log(err));
    }
    if (productosFavoritos.length > 0) {
        console.log('Renderizando...');
        renderizarProductos(productosFavoritos)
    } 
}