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