    //Las estructuras nos sirven par poder almacenar en ellas un conjunto de datos

// MAP
    // Las Map son como objetos pero con propiedades indexadas por valores primitivos o objetos.
    // Las Map no tienen un orden, pero si tienen propiedades indexadas.
    // Las Map no pueden contener valores duplicados.

    // Declaración de un MAP 
    let myMap = new Map();    
    console.log(myMap);

    myMap = new Map([
        ["name", "Damian"],
        ["surname", "Carrillo"],
        ["age", 35],
        ["city", "Granada"]
    ]);

    console.log(myMap);
    

    //MÉTODOS Y PROPIEDADES

        //  SET -> Para actualizar un elemento o añadir

        myMap.set("alias", "DamFOX")
        myMap.set("city", "Alcalá la real")
        console.log(myMap);        
        
        //  GET -> Para obtener un elemento
        console.log(myMap.get("name"))

        // HAS 
        console.log(myMap.has("surname"));

        // DELETE 
        myMap.delete("city");
        console.log(myMap);

        // KEYS  -> Para obtener todas las claves
        console.log(myMap.keys());

        // VALUES  -> Para obtener todos los valores
        console.log(myMap.values());
        
        console.log("Esta es la que buscamos");
        
        // SIZE 
        console.log(myMap.size);

        // ENTRIES 
        console.log(myMap.entries());
        
        // CLEAR
        myMap.clear();
        console.log(myMap);

        

        
        
        