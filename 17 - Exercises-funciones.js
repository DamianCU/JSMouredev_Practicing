//TODO: Explora diferentes sintaxis de funciones para resolver los ejercicios

//? 1. Crea una función que reciba dos números y devuelva su suma
     function sum(a,b) {
        return a + b;
     }
     console.log(sum(48,44));

//? 2. Crea una funcion que reciba un array de números y devuelva el mayor de ellos
     let e2Array = [2,4,6,3,7];
     function findMax(array) {
        return Math.max(...array);
     } 

     console.log(findMax(e2Array));
     
     //* Otra forma que No usa el spread operator, lo que puede ser útil en arrays enormes donde el spread podría dar problemas de rendimiento o stack overflow.
     function findMax2(array) {
        return array.reduce((max, num) => num > max ? num: max, array[0]);
     }

     //* Usando un simple FOR; Más clásico y compatible con versiones antiguas de JS. Además, consume menos memoria que el spread operator en arrays muy grandes.
     function findMax(array) {
        let max = array[0];
        for (let num of array) {
            if (num > max) max = num;
        }
        return max;
    }    


//? 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

    let stringE3 = "Damián, lo vas a conseguir"

    function countingVocals () {

//? 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

//? 5. Crea una función que reciba un número y devuelva true si es primo, false en caso contrario

//? 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

//? 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

//? 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

//? 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden

//? 10. Crea una función que calcule el factorial de un número dado