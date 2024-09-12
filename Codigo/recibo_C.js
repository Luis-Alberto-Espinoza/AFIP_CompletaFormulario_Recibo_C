let fecha_comprobante= "21/08/2024";
let fecha_inicio = "19/08/2024";
let fecha_fin = "20/08/2024";
let arrayDatos = [
    // ## Formato del array
    // apellido = String, descripcion = String, precio = int (sin decimal) 
    //siempre aunque sea la ultima linea despues de ] va una coma 
    //["apellido_nombre","descripcion", precio],
    ["Belgrano Manuel", "Linea uno\nLinea dos\nLinea tres", 1],
    ["Gevara Ernesto", "Linea uno\nLinea dos\nLinea tres", 1],
];


// Convertir el array a una cadena JSON y guardarlo en el localStorage
localStorage.setItem('arrayDatos', JSON.stringify(arrayDatos));
localStorage.setItem('fecha_comprobante', fecha_comprobante);
localStorage.setItem('fecha_inicio', fecha_inicio);
localStorage.setItem('fecha_fin', fecha_fin);
if (localStorage.getItem('iterador') === null || localStorage.getItem('iterador') !== '0') {
    // Si no existe o tiene un valor distinto a 0, crea o la formatea con el valor cero
    localStorage.setItem('iterador', 0);
};