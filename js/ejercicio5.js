// FUNCION reordenarPalabras(oracion) QUE ORDENA PALABRAS ALFABETICAMENTE Y EN MAYUSCULAS
function reordenarPalabras(oracion) {
  return oracion
    .split(" ")
    .map(palabra => palabra.toUpperCase())
    .sort()
    .join(" ");
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio5() {
  const oracion = prompt("Ingrese una oracion:");
  const resultado = reordenarPalabras(oracion);
  document.getElementById("resultado5").innerText =
    "Oracion ordenada: " + resultado;
}
