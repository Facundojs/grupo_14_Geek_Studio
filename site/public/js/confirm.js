accion = document.querySelector("#eliminar-usuario");

accion.addEventListener("click", function (e) {
  //e.preventDefault();
  var answer = window.confirm("Esta seguro que quiere dar de baja su usuario?");
  console.log(answer);

  if (answer) {
    alert("Se elimino el usuario");
    res.redirect("/users/logout");
  } else {
    alert("El usuario no fue eliminado");
    e.preventDefault();
  }
});
