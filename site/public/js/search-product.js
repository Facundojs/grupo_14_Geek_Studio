let textSearch = document.querySelector(".browser-bar");
let clickSearch = document.querySelector("#search-button");

clickSearch.addEventListener("click", (e) => {
  if (textSearch.value.length == 0) {
    e.preventDefault();
  } else {
    fetch("/api/products/search?keyword=" + textSearch.value)
      .then((res) => res.json())
      .then((data) => {
        alert("tiene que redireccionar");
        location.href = "/productos/search";
        //document.location.href = "/products/search";
        console.log("DATA: ", data);
        return data;
      });
  }
});
