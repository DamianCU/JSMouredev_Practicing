// 1. Crea un array que almacene cinco animales

    let arrayAnimales = ["perro", "gato", "lobo", "cebra", "jirafa"];

// 2. Añade dos más. Uno al principio y otro al final.

arrayAnimales.unshift("oso");
arrayAnimales.push("cabra")
console.log(arrayAnimales);

// 3. Elimina el que se encuentra en tercera posición.

     arrayAnimales.splice(2, 1)
     console.log(arrayAnimales);

// 4. Crea un set que almacene cinco libros

     let misLibros = new Set(["La hija del relojero", "Cuentos de la Alhambra", "La caída de la casa de los Ushers", "La casa de Bernarda Alba", "El cantar de mio Cid"]);
     
     // 5. Añade dos más. Uno de ellos repetido 
     
     misLibros.add("La hija del relojero" )
     misLibros.add("Vampiro a mi pesar")
     
     // 6. Elimina uno concreto a tu elección
     
     misLibros.delete("Vampiro a mi pesar");
        //console.log(misLibros);

// 7. Crea un mapa que asocie el número del mes a su nombre

    let myMap = new Map();
    
    myMap.set("1", "enero");
    myMap.set("2", "febrero");
    myMap.set("3", "marzo");
    myMap.set("4", "abril");
    myMap.set("5", "mayo");
    myMap.set("6", "junio");
    myMap.set("7", "julio");
    myMap.set("8", "agosto");
    myMap.set("9", "septiembre");
    myMap.set("10", "octubre");
    myMap.set("11", "noviembre");
    myMap.set("12", "diciembre");   
    

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(myMap.has("5"));
    console.log(myMap.get("5"));        

// 9. Añade al mapa una clave con un array como que almacene los meses de verano
    myMap.set("5",["Junio", "Julio", "Agosto"])
    console.log("Mira aquí chulo");    
    console.log(myMap);    

// 10. Crea un array, tranfórmala a un Set y almacénalo en un Map