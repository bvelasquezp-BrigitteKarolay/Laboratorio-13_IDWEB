// FUNCION filtrarYTransformar(arr) QUE ELIMINA NEGATIVOS, ELEVA AL CUADRADO Y SUMA LOS RESULTADOS
function filtrarYTransformar(arr) {
  return arr
    .filter(num => num >= 0) 
    .map(num => num ** 2)    
    .reduce((acc, num) => acc + num, 0); 
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio4() {
  const entrada = prompt("Ingrese numeros separados por coma:");
  const numeros = entrada.split(",").map(num => parseFloat(num));
  const resultado = filtrarYTransformar(numeros);
  document.getElementById("resultado4").innerText =
    "Suma de los cuadrados de los numeros positivos: " + resultado;
}
