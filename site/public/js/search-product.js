let textSearch = document.querySelector(".browser-bar");
let clickSearch = document.querySelector("#search-button");

textSearch.addEventListener("keypress", (e) => {
  var keycode = e.keyCode;
  if (keycode == "13") {
    location.href = "/productos/search?keyword=" + textSearch.value;
  }
});

clickSearch.addEventListener("click", (e) => {
  location.href = "/productos/search?keyword=" + textSearch.value;
});
