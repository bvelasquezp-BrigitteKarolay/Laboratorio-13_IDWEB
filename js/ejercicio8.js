// CREAR UN MAP CON PRODUCTOS Y PRECIOS Y CALCULAR EL TOTAL DE COMPRA
function ejecutarEjercicio8() {
  const productos = new Map();
  productos.set("Pan", 2.5);
  productos.set("Leche", 4.2);
  productos.set("Queso", 10.0);
  productos.set("Huevos", 6.3);

  let total = 0;
  productos.forEach(precio => total += precio);

  let resultado = "Lista de productos y precios:\n";
  productos.forEach((precio, producto) => {
    resultado += producto + ": S/ " + precio + "\n";
  });
  resultado += "\nTotal de compra: S/ " + total.toFixed(2);

  document.getElementById("resultado8").innerText = resultado;
}
