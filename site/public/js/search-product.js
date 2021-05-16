let textSearch = document.querySelector(".browser-bar");
let clickSearch = document.querySelector("#search-button");

clickSearch.addEventListener("click", (e) => {
  if (textSearch.value.length == 0) {
    e.preventDefault();
  } else {
    fetch("/api/products/search?keyword=" + textSearch.value)
      .then((res) => res.json())
      .then((data) => {
        location.href = "/productos/search";
        let filtrados = data.map((e) => {
          return e.name
        })
        localStorage.setItem('productosEncontrados', filtrados)
        return data;
      });
  }
});