// CREAR UN OBJETO auto CON PROPIEDADES Y UN METODO detalles()
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2022,
  color: "Rojo",
  detalles: function() {
    return "Auto: " + this.marca + " " + this.modelo + " (" + this.anio + "), Color: " + this.color;
  }
};

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio11() {
  document.getElementById("resultado11").innerText = auto.detalles();
}
