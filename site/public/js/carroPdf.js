let productosEnCarro = JSON.parse(localStorage.getItem("articulosCarrito"));

let listaPresupuesto = document.querySelector(".lista-presupuesto");
console.log("listaPresupuesto: ", listaPresupuesto);
let finalPrice = document.querySelector("#final.price");
let precioTotal = 0;

let idCarro = productosEnCarro.map((producto) => {
  return parseInt(producto.id);
});

fetch("/api/products")
  .then((res) => res.json())
  .then((products) => {
    let productsDB = products.data;
    let precioTotal = 0;
    let filtrados = productsDB.filter((producto) => {
      console.log("prod", producto);
      return idCarro.includes(producto.id) ? producto : "";
    });
    filtrados.forEach((producto) => {
      precioTotal += parseInt(producto.price);
      listaPresupuesto.innerHTML += `
                <article class="pdf-item">
                <div class="carro-pdf">
                    <img class="chart-article-image img-chart"src="/img/products/${producto.image}" width="100px" height="100px">                    
                </div>
                <div>
                    <h4>${producto.name}  <h4>
                </div>
                <div>
                    <h4>  ${producto.price} </h4>
                </div>
                </article>
                `;
    });
    finalPrice.innerHTML = `$${precioTotal}`;
  });
