// FUNCION contarPalabras(texto) QUE CUENTA OCURRENCIAS USANDO UN MAP
function contarPalabras(texto) {
  const palabras = texto.toLowerCase().split(/\s+/);
  const conteo = new Map();

  palabras.forEach(palabra => {
    if (conteo.has(palabra)) {
      conteo.set(palabra, conteo.get(palabra) + 1);
    } else {
      conteo.set(palabra, 1);
    }
  });

  return conteo;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio9() {
  const texto = prompt("Ingrese un texto para contar palabras:");
  const conteo = contarPalabras(texto);

  let resultado = "Conteo de palabras:\n";
  conteo.forEach((cantidad, palabra) => {
    resultado += palabra + ": " + cantidad + "\n";
  });

  document.getElementById("resultado9").innerText = resultado;
}
