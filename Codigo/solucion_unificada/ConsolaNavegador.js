const datosDeEmision = localStorage.getItem('datosDeEmision');
const datosDeOperacion = localStorage.getItem('datosDeOperacion');
let arrayDatos = JSON.parse(localStorage.getItem('arrayDatos'));
let iterador = parseInt(localStorage.getItem("iterador"));
// paso0_GeneraComprobantes.js
if (window.location.href.includes('menu_ppal')) {
    // Selecciona la opcion Generar Comprobantes
    let generarComprobantes = document.getElementById("btn_gen_cmp")
    generarComprobantes.click()
}


// paso1_PuntosDeVentas.js
if (window.location.href.includes('buscarPtosVtas')) {

    // Punto de Ventas a utilizar -> selecciona el primer punto de venta 
    const listaPuntosDeVentas = document.querySelector("#puntodeventa");
    listaPuntosDeVentas.selectedIndex = 1;
    listaPuntosDeVentas.onchange(1);

    //Tipo de Comprobante
    setTimeout(function () {
        let tipoComprobante = document.querySelector("#universocomprobante");
        for (let i = 0; i < tipoComprobante.options.length; i++) {
            if (tipoComprobante.options[i].text.trim() === "Recibo C") {
                tipoComprobante.selectedIndex = i;
                break;
            }
        }
    }, 500);

    // Continuar
    let btnContinuar = document.querySelector("#contenido > form > input[type=button]:nth-child(4)")
    setTimeout(function () {
        btnContinuar.click()
    }, 500);
}

/***
 * Opciones disponiblespara el tipo de comprobante
 * Factura C
Nota de Débito C
Nota de Crédito C
Recibo C
Factura de Crédito Electrónica MiPyMEs (FCE) C
Nota de Débito Electrónica MiPyMEs (FCE) C
Nota de Crédito Electrónica MiPyMEs (FCE) C
 */

/**/


/*
* Extraer las opciones disponibles del tipo de comprobante
let resultado = "";
for (let i = 0; i < tipoComprobante.options.length; i++) {
    resultado += tipoComprobante.options[i].text+"\n";
}
console.log(resultado);
*/

// paso2_DatosDeEmision-Productos.js
if (window.location.href.includes('genComDatosEmisor')) {
    
    // Recuperar la cadena JSON del localStorage y convertirla de nuevo a un array
    let fecha_comprobanteRecuperados = localStorage.getItem("fecha_comprobante");
    let fecha_inicioRecuperados = localStorage.getItem("fecha_inicio");
    let fecha_finRecuperados = localStorage.getItem("fecha_fin");
    
     // Fecha del comprobante
    let inputFechas = document.querySelector("#fc")
    inputFechas.value = fecha_comprobanteRecuperados;

    // Período Facturado
    let desde = document.querySelector("#fsd");
    let hasta = document.querySelector("#fsh");
    desde.value = fecha_inicioRecuperados;
    hasta.value = fecha_finRecuperados;

    // Continuar
    let btnContinuar = document.querySelector("#contenido > form > input[type=button]:nth-child(4)")
    btnContinuar.click()
}



// paso3_DatosDelReceptor.js
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



// paso4_DatosDeOperacion.js
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


// paso5_ConfirmarFactura.js
if (window.location.href.includes('genComResumenDatos')) {
    // Desplasarce hasta abajo para habilitar los botones 
    window.scrollTo(0, document.body.scrollHeight);

    // Confirmar la factura
    ajaxFunction()

    // IMPRIMIR comprobante
    // let luis = document.querySelector("#botones_comprobante > input[type=button]")
    // luis.click();
    
    // document.getElementById('botones_comprobante').style.display = 'block';
    // document.getElementById('botones_comprobante').click();
    
    // Actualizar el iterador en el localstorage
    let iterador = parseInt(localStorage.getItem('iterador'));
    localStorage.setItem("iterador", iterador + 1);

    // Volver al menu principal
    let btnMenuPrinvipalVolver = document.querySelectorAll('input')
    setTimeout(function () {
        btnMenuPrinvipalVolver[3].click()
    }, 500);
}


