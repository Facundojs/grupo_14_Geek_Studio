window.addEventListener("DOMContentLoaded", () => {
  console.log(document.querySelector(".fas.fa-heart"));
  console.log(document.querySelector(".far.fa-heart"));

  const heartEmpty = document.querySelector("favorite-heart"); //.far.fa-heart");
  //const heartFull = document.querySelector(".fas.fa-heart");

  //const heartEmpty = document.querySelector(".far.fa-heart");
  console.log("hearEmpty", heartEmpty);
  console.log("hearFull", heartFull);

  heartEmpty.addEventListener("click", function (e) {
    //   heartEmpty.style.display = "none";
    //   heartFull.style.display = "block";
    alert("click");
    agregarFavorito();
  });

  heartFull.addEventListener("click", function (e) {
    //   heartEmpty.style.display = "block";
    //   heartFull.style.display = "none";
    alert("click full");
    eliminarFavorito();
  });

  function agregarFavorito() {
    alert("click agregar");
    let esFav = document.querySelector(".product");
    let articulosFavoritos = [];

    const idFavorito = esFav
      .querySelector(".title-detail")
      .getAttribute("data-id");

    let recoveredDataFav = localStorage.getItem("articulosFavoritos");

    if (recoveredDataFav != null) {
      let data = JSON.parse(recoveredDataFav);

      const existeFav = articulosFavoritos.find((element) => {
        return element == idFavorito;
      });

      if (existeFav == undefined) {
        data.push(idFavorito);
        return localStorage.setItem("articulosFavoritos", JSON.stringify(data));
      }
    } else {
      articulosFavoritos.push(idFavorito);
      console.log(articulosFavoritos);
      return localStorage.setItem(
        "articulosFavoritos",
        JSON.stringify(articulosFavoritos)
      );
    }
  }

  function eliminarFavorito() {
    let esFav = document.querySelector(".product");
    const id = esFav.querySelector(".title-detail").getAttribute("data-id");

    let favExistentes = JSON.parse(localStorage.getItem("articulosFavoritos"));

    let filtrado = favExistentes.filter((element) => {
      element.id != id ? element : "";
    });

    console.log("Filtrados", filtrado);

    //localStorage.removeItem("articulosFavorito", idFavorito);
  }
});
