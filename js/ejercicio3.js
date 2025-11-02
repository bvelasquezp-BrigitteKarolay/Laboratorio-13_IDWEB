// FUNCION doblarNumeros(arr) QUE DEVUELVE UN NUEVO ARREGLO CON LOS NUMEROS DUPLICADOS
function doblarNumeros(arr) {
  return arr.map(num => num * 2);
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio3() {
  const entrada = prompt("Ingrese numeros separados por coma:");
  const numeros = entrada.split(",").map(num => parseFloat(num));
  const resultado = doblarNumeros(numeros);
  document.getElementById("resultado3").innerText =
    "Arreglo original: [" + numeros.join(", ") + "]\nArreglo duplicado: [" + resultado.join(", ") + "]";
}
