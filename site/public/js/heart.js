window.addEventListener("load", () => {
  const heart = document.querySelector(".favorite-heart");
  const idFavorito = document.querySelector("#heart").getAttribute("data-id");
  console.log("ID RENDERIZADO ", idFavorito);

  totalFavoritos = JSON.parse(localStorage.getItem("articulosFavoritos"));
  console.log("totalfav", totalFavoritos);
  if (totalFavoritos != null) {
    let verificarSiExiste = totalFavoritos.find((element) => {
      return element == idFavorito;
    });

    console.log(verificarSiExiste);

    if (verificarSiExiste == undefined) {
      return (heart.innerHTML = `<i class="far fa-heart" ></i>`);
    } else {
      return (heart.innerHTML = `<i class="fas fa-heart" ></i>`);
    }
  } else {
    return (heart.innerHTML = `<i class="far fa-heart" id="empty-heart"></i>`);
  }

  // <i class="far fa-heart heart-empty" ></i>
  // <i class="fas fa-heart heart-full"></i>  <!--Corazon Lleno-->
});
