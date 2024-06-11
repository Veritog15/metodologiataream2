'use strict'
//Función donde se muestran los elementos de la función
function ElementosConPosicion(arrayStrings) {
    for (let i = 0; i < arrayStrings.length; i++) {
        alert(`Elemento en la posición ${i}: ${arrayStrings[i]}`);
    }
}

const arrayEjm = ["Pedro", "Frank", "Camila", "Vero"];
ElementosConPosicion(arrayEjm);

//Función donde se muestra las suma de los arrays
function sumarArray(arrayNum) {
    let suma = 0;
    let i = 0;
    while (i < arrayNum.length) {
        suma += arrayNum[i];
        i++;
    }
    return suma;
}

const arrayNum = [8, 10, 12, 14];
const resultado = sumarArray(arrayNum);
alert("La suma de los elementos del array es: " + resultado);


//Función donde se muestra el array multiplicado por 3
function MultiplicadosPorTres(arrayNumeros) {
    arrayNumeros.forEach(numero => {
        alert(numero * 3);
    });
}

const arrayNumeros = [2, 4, 6, 8];
MultiplicadosPorTres(arrayNumeros);



