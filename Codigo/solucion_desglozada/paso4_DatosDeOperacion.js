if (window.location.href.includes('genComDatosOperacion')) {
  let arrayDatosRecuperados = JSON.parse(localStorage.getItem('arrayDatos'));
  let iterador = parseInt(localStorage.getItem("iterador"));

  let formu = document.querySelector('[name="datosOperacionForm"]');
  let descripcion = arrayDatosRecuperados[iterador][1];
  // Descripción del Servicio 
  formu[6].value = descripcion;

  let precio = arrayDatosRecuperados[iterador][2];
  // Precio
  formu[7].value = precio;
  calcularSubtotalDetalle()

  // Continuar
  validarCampos();
}
