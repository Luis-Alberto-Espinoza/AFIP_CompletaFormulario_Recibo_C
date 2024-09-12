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

