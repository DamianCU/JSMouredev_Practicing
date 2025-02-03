//ESTARÍA GENIAL REPASAR LOS ATRIBUTOS DEL SPLICE

// SET
    // Declaración

    let mySet = new Set();

    // Iniciación

    //FORMA ERRONEA mySet = new Set("Brais", "Moure", "mouredev", 37, true);
    mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "dcu191089@hotmail.es"]);
    console.log(mySet);
    

    // MÉTODOS COMÚNES

        // ADD y DELETE
        mySet.add("Damián", "Carrillo")
        console.log(mySet);

        mySet.delete("Brais");
        mySet.delete("Moure");
        mySet.delete("mouredev");
        console.log(mySet);


    // HAS
    console.log(mySet.has("Damián"));
    console.log(mySet.has("Brais"));

            // Example
            // Se puede usar en alguna condición tipo:
            if(mySet.has("Brais")) {
                console.log("Hola Damián");                 
            } else {
                console.log("No tengo conocimiento de ese nombre")
            }


        // SIZE
        console.log(mySet.size);
        
        //Convertir un SET en un ARRAY
        let myArray = Array.from(mySet)
        console.log(myArray);

        //Convertir un ARRAY a SET
        mySet = new Set(myArray)
        console.log(mySet);
        
        
    // la principal característica de los sets es que NO PERMITEN DUPLICADOS. si ya tienes la palabra damian y se la añades con add unas 15 veces, siempre tendremos una sola vez damian. DEBE SER EXACTAMENTE LO MISMO O SE GUARDARA DIFERENTE
    