let productosEnCarro = JSON.parse(localStorage.getItem("articulosCarrito"));

let listaPresupuesto = document.querySelector(".lista-presupuesto");
console.log("listaPresupuesto: ", listaPresupuesto);
let finalPrice = document.querySelector("#final-price");
let precioTotal = 0;

let idCarro = productosEnCarro.map((producto) => {
  return parseInt(producto.id);
});

function exportPdfFile() {
  const $convertir = document.body;
  html2pdf()
    .set({
      margin: 1,
      filename: "presupuesto-geek-studio.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 3,
        letterRendering: true,
      },
      jsPDF: {
        unit: "in",
        format: "a3",
        orientation: "portrait",
      },
    })
    .from($convertir)
    .save()
    .catch((err) => console.log(err))
    .finally()
    .then(() => {
      console.log("Guardado");
    });
}

fetch("/api/products")
  .then((res) => res.json())
  .then((products) => {
    let productsDB = products.data;
    let filtrados = productsDB.filter((producto) => {
      console.log("prod", producto);
      return idCarro.includes(producto.id) ? producto : "";
    });
    filtrados.forEach((producto) => {
      precioTotal += parseInt(producto.price);
      console.log(precioTotal);
      listaPresupuesto.innerHTML += `
                <article class="carro-pdf">
                <div class="img-item">
                    <img class="chart-article-image img-chart"src="/img/products/${producto.image}" width="100px" height="100px">                    
                </div>
                <div class="name-item">
                    <h4>${producto.name}<h4>
                </div>
                <div class="price-item">
                    <h4>$${producto.price}</h4>
                </div>
                </article>
                `;
    });
    finalPrice.innerHTML = `$${precioTotal}`;
    exportPdfFile();
  });
