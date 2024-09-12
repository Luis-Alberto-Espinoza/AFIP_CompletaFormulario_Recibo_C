const configuracion = {
    montoMaximo: 172244,
    anio: "2024",
    mesEnCurso: "06"
};

let montoFactura = [
    958813, 86001, 89600, 86530, 85360, 87560, 84520, 89853,
    85420, 84052, 86391, 99891, 46281, 71381, 68341, 12501,
    56801, 96381, 84281
];



let suma = montoFactura.reduce((total, monto) => total + monto, 0);
let resultadoFacturas = [];
let arrayFacturasGeneradas = [];

function generarSubFacturas(montoFactura) {
    for (const factura of montoFactura) {
        if (factura > configuracion.montoMaximo) {
            let resto = factura;
            let subFacturas = [];

            while (resto > configuracion.montoMaximo) {
                let nuevaFactura = Math.random() * (0.2 * configuracion.montoMaximo) + 0.8 * configuracion.montoMaximo;
                nuevaFactura = Math.round(nuevaFactura / 5) * 5;
                subFacturas.push(nuevaFactura);
                resto -= nuevaFactura;
            }

            if (resto > 0) {
                subFacturas.push(Math.round(resto / 5) * 5);
            }

            arrayFacturasGeneradas.push(subFacturas);
        } else {
            arrayFacturasGeneradas.push([Math.round(factura / 5) * 5]);
        }
    }
}

function agregarFechas(arrayMonto) {
    let contador = 0;
    resultadoFacturas[0] = [];
    for (let i = 0; i < arrayMonto.length; i++) {
        for (let j = 0; j < arrayMonto[i].length; j++) {
            if (!resultadoFacturas[contador]) {
                resultadoFacturas[contador] = [];
            }
            resultadoFacturas[contador][0] = `"${i + 1}/${configuracion.mesEnCurso}/${configuracion.anio}"`;
            resultadoFacturas[contador][1] = arrayMonto[i][j];
            contador++;
        }
    }
}
function presentarResultados(arrayResultado, sumaOriginal, sumador) {
    let resltadoFinal = "";
    let errorFactras= "";

    for (let i = 0; i < arrayResultado.length; i++) {
        resltadoFinal += `[${arrayResultado[i][0]}, ${arrayResultado[i][1]}],\n`;
        if (arrayResultado[i][1] > configuracion.montoMaximo) {
            errorFactras += `Factura ${i + 1} monto => ${arrayResultado[i][1]} Corresponde a la fecha => ${arrayResultado[i][0]}\n`;
        }
    }

    console.log("\n#####################\n");
    console.log(resltadoFinal);
    console.log("\n#####################\n");
    console.log("Inicio test");
    console.log("Suma original =", sumaOriginal);
    console.log("Suma final =", sumador);
    console.log("Facturas correctas =", arrayResultado.length);
    console.log("Facturas incorrectas =", arrayResultado.filter(item => item[1] > configuracion.montoMaximo).length);
    if(errorFactras != ""){
        console.log("\n\t¡¡¡Atención!!! Límite Superado!!\n",errorFactras);
    }
    console.log("Fin test");
}

function realizarPruebas(arrayResultado) {
    let sumador = 0;

    for (let i = 0; i < arrayResultado.length; i++) {
        sumador += arrayResultado[i][1];
    }

    return sumador;
}

generarSubFacturas(montoFactura);
agregarFechas(arrayFacturasGeneradas);

let sumadorFinal = realizarPruebas(resultadoFacturas);
presentarResultados(resultadoFacturas, suma, sumadorFinal);