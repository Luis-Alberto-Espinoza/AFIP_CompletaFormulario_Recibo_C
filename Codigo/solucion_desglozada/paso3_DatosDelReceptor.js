if (window.location.href.includes('genComDatosReceptor')) {
  let arrayDatosRecuperados = JSON.parse(localStorage.getItem('arrayDatos'));
  let iterador = parseInt(localStorage.getItem("iterador"));
  let formu = document.getElementById('formulario')
  let event = new Event('change');
 // CONDICION DEL IVA A SELECCIONAR
  for (let i = 0; i < formu[0].length; i++) {
   // if (formu[0][i].text === "TextoDeseado") {
    if (formu[0][i].text.trim() === "Consumidor Final") {
      formu[0].selectedIndex = i;
        break;
    }
}
formu[0].dispatchEvent(event);

//Tipo de Documento
for (let i = 0; i < formu[1].length; i++) {
  // if (formu[0][i].text === "TextoDeseado") {
   if (formu[1][i].text.trim() === "DNI") {
     formu[1].selectedIndex = i;
       break;
   }
}

//Numero de Documento
//formu[2].value = "29148573" 

let apellido_nombre = arrayDatosRecuperados[iterador][0];
//A. y Nombre o Razón Social
formu[3].value = apellido_nombre;


//Domicilio Comercial
formu[5].value = "Antonelli 2900" 

//Email
//formu[6].value = "@"

// ## CONDICION DE VENTA 
// CONTADO -> SELECCIONADO
formu[7].checked = true

// Otros medios de pago electrónico -> SELECCIONADO
//formu[16].checked = true

  setTimeout(function () {
    validarCampos()
  }, 500);
}

/*
seleccionar...
 IVA Responsable Inscripto
 IVA Sujeto Exento
 Consumidor Final
 Responsable Monotributo
 Sujeto No Categorizado
 Proveedor del Exterior
 Cliente del Exterior
 IVA Liberado - Ley Nº 19.640
 Monotributista Social
 IVA No Alcanzado
 Monotributista Trabajador Independiente Promovido*/

 /*
 seleccionar Tipo y Nro. de Documento
 CUIT
CUIL
CDI
LE
LC
CI Extranjera
DNI
Pasaporte
CI Policía Federal
Certificado de Migración
 */

