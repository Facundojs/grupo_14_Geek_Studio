window.addEventListener("load", () => {
  const heart = document.querySelector(".favorite-heart");
  const idFavorito = document.querySelector("#heart").getAttribute("data-id");

  totalFavoritos = JSON.parse(localStorage.getItem("articulosFavoritos"));
  if (totalFavoritos != null) {
    let verificarSiExiste = totalFavoritos.find((element) => {
      return element == idFavorito;
    });

    if (verificarSiExiste == undefined) {
      heart.innerHTML = `<i class="far fa-heart" id="empty-heart" ></i>`;
    } else {
      heart.innerHTML = `<i class="fas fa-heart" id="full-heart" ></i>`;
    }
  } else {
    heart.innerHTML = `<i class="far fa-heart" id="empty-heart"></i>`;
  }

  let heartEmpty = document.querySelector("#empty-heart");
  let heartFull = document.querySelector("#full-heart");
  console.log("coraa ", heartEmpty);
  console.log("coraa ok", heartFull);

  /*  TEST */
  heartEmpty.addEventListener("click", function (e) {
    agregarFavorito();
    heartEmpty.classList.remove("far");
    heartEmpty.classList.remove("fa-heart");

    heartEmpty.classList.add("fas");
    heartEmpty.classList.add("fa-heart");
    location.reload();
  });

  heartFull.addEventListener("click", function (e) {
    alert("ALERTAAA");
    eliminarFavorito();
  });

  function agregarFavorito() {
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
  /* FIN TEST */
});
