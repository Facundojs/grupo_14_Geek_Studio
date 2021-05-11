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
                <article class="chart-item lista-presupuesto">
                <tr>
                <td class="carro-pdf">
                    <img class="chart-article-image img-chart"src="/img/products/${producto.image}" width="100" height="100">                    
                </td>
                <td>
                    <h3>${producto.name}  <h3>
                </td>
                <td>
                    <h3>  ${producto.price} </h3>
                </td>
                </tr>
                </article>
                `;
    });
    finalPrice.innerHTML = `$${precioTotal}`;
  });
