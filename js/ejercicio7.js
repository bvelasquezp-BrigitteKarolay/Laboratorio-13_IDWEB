// FUNCION tieneDuplicados(arr) QUE DETERMINA SI UN ARREGLO TIENE VALORES REPETIDOS
function tieneDuplicados(arr) {
  const conjunto = new Set(arr);
  return conjunto.size !== arr.length;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio7() {
  const entrada = prompt("Ingrese numeros separados por coma:");
  const numeros = entrada.split(",").map(num => parseFloat(num));
  const resultado = tieneDuplicados(numeros);
  document.getElementById("resultado7").innerText =
    "¿El arreglo tiene numeros duplicados? " + resultado;
}
