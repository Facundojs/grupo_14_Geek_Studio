window.addEventListener("load", () => {
  const heart = document.querySelector(".favorite-heart");
  const idFavorito = document.querySelector("#heart").getAttribute("data-id");

  totalFavoritos = JSON.parse(localStorage.getItem("articulosFavoritos"));
  if (totalFavoritos != null) {
    let verificarSiExiste = totalFavoritos.find((element) => {
      return element == idFavorito;
    });

    if (verificarSiExiste == undefined) {
      heart.innerHTML = `<i class="far fa-heart" id="empty-heart" ></i> 
      <p>Añadir a Favoritos</p>`;
    } else {
      heart.innerHTML = `<i class="fas fa-heart" id="full-heart" ></i> 
      <p>Quitar de Favoritos</p>`;
    }
  } else {
    heart.innerHTML = `<i class="far fa-heart" id="empty-heart"></i> 
    <p>Añadir a Favoritos</p>`;
  }

  let heartEmpty = document.querySelector("#empty-heart");
  let heartFull = document.querySelector("#full-heart");

  /*  TEST */

  /* Aca se podría optimizar usando un callback que llame una función que englobe todo el if*/

  if (heartEmpty) {    
    heartEmpty.addEventListener("click", function () {
      agregarFavorito();
      heartEmpty.classList.remove("far");
      heartEmpty.classList.remove("fa-heart");
      
      heartEmpty.classList.add("fas");
      heartEmpty.classList.add("fa-heart");
      heartEmpty.id = "full-heart"
      location.reload();
    });
  } else if (heartFull) {
    heartFull.addEventListener("click", function () {
      heartFull.classList.remove("fas");
      heartFull.classList.remove("fa-heart");

      heartFull.classList.add("far");
      heartFull.classList.add("fa-heart");
      heartFull.id = "empty-heart"
      location.reload();

      eliminarFavorito();
    });
  }
  

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
    //let esFav = document.querySelector(".product");
    const id = document.querySelector(".title-detail").getAttribute("data-id");
    let favExistentes = JSON.parse(localStorage.getItem("articulosFavoritos"));
    console.log(favExistentes);
    let filtrado = favExistentes.filter((element) => {
      return element != id
    });
    localStorage.setItem("articulosFavoritos", JSON.stringify(filtrado))
    location.reload()
  }
  /* FIN TEST */
});
