// ======================
// EJERCICIO 2
// ======================

let distancia = 25000;

if (distancia <= 1000) {
    console.log("El medio de transporte recomendado es: pie");
} else if (distancia <= 10000) {
    console.log("El medio de transporte recomendado es: bicicleta");
} else if (distancia <= 30000) {
    console.log("El medio de transporte recomendado es: colectivo");
} else if (distancia <= 100000) {
    console.log("El medio de transporte recomendado es: auto");
} else {
    console.log("El medio de transporte recomendado es: avión");
}


// ======================
// EJERCICIO 3
// ======================

let productos = ["Leche", "Pan", "Huevos", "Queso"];

for (let i = 0; i < productos.length; i++) {
    console.log(`¡No te olvides de comprar ${productos[i]}!`);
}