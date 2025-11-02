// FUNCION invertirMap(map) QUE INTERCAMBIA CLAVES Y VALORES 
function invertirMap(map) {
  const invertido = new Map();
  map.forEach((valor, clave) => {
    invertido.set(valor, clave);
  });
  return invertido;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio10() {
  const mapaOriginal = new Map([
    ["Peru", "Lima"],
    ["Argentina", "Buenos Aires"],
    ["Chile", "Santiago"]
  ]);

  const mapaInvertido = invertirMap(mapaOriginal);

  let resultado = "Mapa original:\n";
  mapaOriginal.forEach((valor, clave) => {
    resultado += clave + " → " + valor + "\n";
  });

  resultado += "\nMapa invertido:\n";
  mapaInvertido.forEach((valor, clave) => {
    resultado += clave + " → " + valor + "\n";
  });

  document.getElementById("resultado10").innerText = resultado;
}
