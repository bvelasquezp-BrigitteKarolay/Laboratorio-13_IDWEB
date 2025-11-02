// FUNCION combinarCatalogos(tiendaA, tiendaB)
// COMBINA DOS OBJETOS DE PRODUCTOS TOMANDO EL PRECIO MENOR SI EXISTE EN AMBAS TIENDAS
function combinarCatalogos(tiendaA, tiendaB) {
  const catalogoFinal = {};

  // AGREGA LOS PRODUCTOS DE LA PRIMERA TIENDA
  for (const producto in tiendaA) {
    catalogoFinal[producto] = tiendaA[producto];
  }

  // AGREGA O ACTUALIZA LOS PRODUCTOS DE LA SEGUNDA TIENDA
  for (const producto in tiendaB) {
    if (catalogoFinal.hasOwnProperty(producto)) {
      // SI EXISTE EN AMBAS, SE QUEDA EL MENOR PRECIO
      catalogoFinal[producto] = Math.min(catalogoFinal[producto], tiendaB[producto]);
    } else {
      catalogoFinal[producto] = tiendaB[producto];
    }
  }

  return catalogoFinal;
}

// FUNCION PARA EJECUTAR
function ejecutarEjercicio13() {
  const tiendaA = {
    arroz: 4.5,
    leche: 3.8,
    pan: 2.0,
    queso: 9.5
  };

  const tiendaB = {
    arroz: 4.2,
    leche: 4.0,
    aceite: 7.8,
    pan: 2.5
  };

  const combinado = combinarCatalogos(tiendaA, tiendaB);

  let resultado = "Catalogo combinado (menor precio entre tiendas):\n";
  for (const producto in combinado) {
    resultado += producto + ": S/ " + combinado[producto].toFixed(2) + "\n";
  }

  document.getElementById("resultado13").innerText = resultado;
}
