//BUCLES 

     /*
      Los bucles en JavaScript son estructuras que permiten ejecutar un bloque de código varias veces de forma automática, lo que evita la repetición manual y mejora la eficiencia del código.
     */
    
    // FOR_______________________________________________________________
        // Se ejecuta en cuanto lo lanzamos y tiene una condicion que se evalua cada iteración.

        for(let i=0; i<5; i++) {
            console.log(`Hola ${i}`);         
        }

        const numbers =[1,2,3,4,5,6,7]

        for (let i=0; i<numbers.length; i++){
            console.log(`Elemento ${numbers[i]}`);            
        }                     // aplicando length al array nos aseguramos de que nuestro bucle for funcione siempre independientemente de si cambia el numero de elementos del array


         // WHILE______________________________________________
            // Se EVALUA ANTES de cada iteración, si es verdadero el bucle continua y si es falso el bucle termina

            let i = 0; // Cuando i sea menor que 5 no se lanza el bucle

            while(i < 5){
                console.log(`Hola ${i}`);
                i++;                
            }

        
        // DO WHILE________________________________________
            // Se ejecuta al menos una vez y ya se evalua 
            
            i = 0;
            do{
                console.log(`Hola ${i}`);
                i++;
            } while(i < 5);


         // FOR...OF______________________________________________
            // Se utiliza para recorrer objetos iterables como arrays, strings, etc.

            myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
            mySet = new Set(["Damián","Carrillo","Ureña","35","dcu191089@hotmail.es"]);
            myMap = new Map([
                ["Name","Damián"],
                ["Surname","Carrillo"],
                ["Age","35"],
                ["Email","dcu191089@hotmail.es"]
            ]);
            
            // myString = "Hola, javascript"          -->Esto lo deletrearia como si fuera un array de letras
            for(let valor of myArray){
                console.log(valor);
            }
            for(let valor of mySet){
                console.log(valor);
            }
            for(let valor of myMap){
                console.log(valor);
            }




            // BUENAS PRÁCTICAS
                
                // BREAK Y CONTINUE

                for (let i=0; i<myArray.length; i++) {
                    if(myArray[i] === 2){
                        continue;
                    } else if(i === 10){
                        break;                       
                    } 
                    console.log(`El elemento ${i} es válido`);
                }