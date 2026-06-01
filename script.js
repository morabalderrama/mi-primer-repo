// ==========================
// EJERCICIO 1
// ==========================

function calcularPromedio(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

let promedioHistoria = calcularPromedio(8, 10);

document.getElementById("resultadoPromedio").innerText =
    `El promedio de Historia es ${promedioHistoria}`;


// ==========================
// EJERCICIO 2
// ==========================

let textarea = document.getElementById("texto");
let contador = document.getElementById("contador");

textarea.addEventListener("input", function () {
    contador.innerText = textarea.value.length;
});