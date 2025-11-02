// FUNCION contarLetras(texto) QUE DEVUELVE UN OBJETO CON LA FRECUENCIA DE CADA LETRA
function contarLetras(texto) {
  const conteo = {};
  for (const letra of texto.toLowerCase()) {
    if (/[a-záéíóúñ]/.test(letra)) {
      conteo[letra] = (conteo[letra] || 0) + 1;
    }
  }
  return conteo;
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio12() {
  const texto = prompt("Ingrese un texto:");
  const resultado = contarLetras(texto);

  let salida = "Frecuencia de letras:\n";
  for (const letra in resultado) {
    salida += letra + ": " + resultado[letra] + "\n";
  }

  document.getElementById("resultado12").innerText = salida;
}
