// ARRAYS
    // Estructuras de datos; nos permiten almacenar varios valores en en una sola variable. Serian los arrays, 
    // Los arrays no son exactamente listas pero en algunos lenguajes es el mismo concepto
    // Los arrays son útiles cuando lo que necesitamos es manejar listados de elementos. 


// Declaración de un 
    //Forma más recomendada
    let myArray = []

    console.log("David, eres un fenómeno");
    myArray=[1]
    

    myArray=["Damian", "Carrillo", "Ureña"]
    console.log(myArray);
    
    myArray[3]= "Perro"
    console.log(myArray);
    

// Métodos comunes

    // PUSH y POP____________________________
    myArray.push("Gato")
    myArray.push("Lagarto")
    myArray.push("Pato")
    myArray.push("Sapo")
    myArray.push("Cuervo")
    console.log(myArray);

    let otroArray = []
    otroArray.push("León")
    otroArray.push("Tigre")
    otroArray.push("Cebra")
    otroArray.push("Culebra")
    otroArray.pop()
    console.log(otroArray.pop());

    // Push añade al final del array y pop elimina el último y lo devuelve por consola


// SHIFT y UNSHIFT___________________________________________
   //Shift hace como pop pero eliminando el primer elemento del array
    myArray.shift()
    console.log(myArray);

    // Unshift añade al principio del array y devuelve la nueva longitud del array
    myArray.unshift("Perro")
    myArray.unshift("Gato")

    myArray.unshift("Salem")
    myArray.unshift("Caimán")
    myArray.push("Misinilla")
    myArray.push("Chimichanga")
    
    console.log(myArray);
    console.log();


    // LENGTH__________________________________
    console.log(myArray.length);

    // CLEAR___________________________________
    myArray = []        //el más adecuado
    console.log(myArray);

    myArray.length = 0   // método alternativo
    
    
    // SLICE
    myArray.push("Brais", "Moure", "mouredev")
    let myNewArray = myArray.slice(1, 2)

    console.log(myNewArray);


    // SPLICE
    myArray.splice(1, 3)
    console.log(myArray);
    