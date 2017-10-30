function validar() {
  var nombre, apellidos, correo, usuario, clave, expresion;
  nombre = document.getElementById("nombre").value;
  apellidos = document.getElementById("apellidos").value;
  correo = document.getElementById("correo").value;
  usuario = document.getElementById("usuario").value;
  clave = document.getElementById("clave").value;

  if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "") {
    alert("Todos los cambios son obligatorios");
    return false;
  }
}
