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

