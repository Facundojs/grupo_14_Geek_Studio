const ul = document.querySelector('#productos-encontrados');
const productosEncontrados = localStorage.getItem('productosEncontrados')

if (productosEncontrados && productosEncontrados.length > 0) {
    fetch('/api/products')
        .then((res) => {
            return res.json()
        })
        .then(({ data }) => {
            let productosFiltrados = data.filter((element) => {
                return productosEncontrados.includes(element.name) ? element : ''
            })
            productosFiltrados.forEach(product => {
                ul.innerHTML += `
                <div class="col-4">
                    <a href="/productos/${product.id}">
                        <div class="image">
                        <img src="/img/products/${product.image}" alt="${product.name}">
                        </div>
                        
                        <div class="prod-description">
                            <h4>
                            ${product.name}
                            </h4>
                        
                            <p>
                                $${product.price} 
                            </p>
                        </div>
                    </a>

                    <div class="chart-button">
                        <button data-id="${product.id}" id="#${product.id}" class="button-chart agregar-carrito" type="submit">
                            Agregar al carro <i class="fas fa-shopping-cart "></i>
                        </button>
                  </div>  
                </div>
                `
            });
        })
} else {
    ul.innerHTML = `
    <h1> ESTA VACÍO</h1>
    `
}