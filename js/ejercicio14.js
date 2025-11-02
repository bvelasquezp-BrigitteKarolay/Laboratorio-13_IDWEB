// FUNCION gestionarEmpleados(empleados)
// AGRUPA EMPLEADOS POR AREA Y CALCULA EL PROMEDIO DE EDAD
function gestionarEmpleados(empleados) {
  const agrupado = new Map();

  empleados.forEach(emp => {
    const { area, edad } = emp;

    // SI EL AREA NO EXISTE, LA CREA
    if (!agrupado.has(area)) {
      agrupado.set(area, { totalEdad: 0, cantidad: 0 });
    }

    // ACTUALIZA DATOS DEL AREA
    const datos = agrupado.get(area);
    datos.totalEdad += edad;
    datos.cantidad++;
    agrupado.set(area, datos);
  });

  // CREA UN NUEVO MAP CON EL PROMEDIOD DE EDAD POR AREA
  const resultado = new Map();
  agrupado.forEach((datos, area) => {
    resultado.set(area, (datos.totalEdad / datos.cantidad).toFixed(1));
  });

  return resultado;
}

// FUNCION PARA EJECUTAR 
function ejecutarEjercicio14() {
  const empleados = [
    { nombre: "Ana", edad: 25, area: "Ventas" },
    { nombre: "Luis", edad: 32, area: "Marketing" },
    { nombre: "Maria", edad: 29, area: "Ventas" },
    { nombre: "Carlos", edad: 40, area: "Sistemas" },
    { nombre: "Lucia", edad: 35, area: "Sistemas" },
    { nombre: "Pedro", edad: 28, area: "Marketing" }
  ];

  const resultado = gestionarEmpleados(empleados);

  let texto = "Promedio de edad por area:\n";
  resultado.forEach((promedio, area) => {
    texto += area + ": " + promedio + " años\n";
  });

  document.getElementById("resultado14").innerText = texto;
}
