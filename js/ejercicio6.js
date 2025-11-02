// CREAR UN SET CON NOMBRES Y ELIMINAR DUPLICADOS
function ejecutarEjercicio6() {
  const entrada = prompt("Ingrese nombres separados por coma (puede repetir):");
  const nombres = entrada.split(",").map(nombre => nombre.trim());
  const conjunto = new Set(nombres);
  document.getElementById("resultado6").innerText =
    "Nombres sin duplicados: [" + Array.from(conjunto).join(", ") + "]";
}
