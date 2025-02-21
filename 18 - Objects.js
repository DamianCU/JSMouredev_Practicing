
//TODO   OBJECTS
        // Basicamente lo que no es un primitivo es un objeto
        // es una colección de datos o propiedades relacionades

    

    //? SINTAXIS
    let person = {
        name: "David",
        age: 30,
        city: "Madrid"
    };


    //? Acceso a PROPIEDADES
        //* Notación por PUNTO
        console.log(person.name); 

        //* Notación por CORCHETES
        console.log(person["city"]);

        //* MODIFICACIÓN de propiedades
        person.city = "Granada";
        console.log(person.city);

        //* ELIMINACION de propiedades
        delete person.age;
        console.log(person);

        //* AÑADIR propiedades
        person.contry = "35";
        person.profession = "Developer";
        console.log(person);


    //? MÉTODOS de OBJETOS
        let person2 = {
            name: "Damian",
            age: 35,
            city: "Granada",
            greet: function() {
                console.log(`Bienvenido ${person2.name}, nos encanta ${person2.city}`);                              
            },
            job: {
                title: "Developer",
                company: "Mouredev",
                work: function() {
                    console.log("Efectivamente, la persona esta trabajando")                    
                }
            }
        }

        console.log(person2);
        

        //? ANIDACIÓN de objetos

        let person3 = {
            name: "Hideo",
            age: 65,
            city: "Tokyo",
            greet: function() {
                console.log(`Bienvenido ${person2.name}, nos encanta ${person2.city}`);                              
            },
            job: {
                title: "Doctor",
                company: "Tokyo Hospital",
                work: function() {
                    console.log("Efectivamente, la persona esta trabajando")                    
                }
            }
        }
        //console.log(person3);
        //console.log(person3.name);
        //console.log(person3.job);
        person3.job.work();



    
    //? IGUALDAD DE OBJETOS
    let person4 = {
        name: "David",
        age: 30,
        city: "Madrid"
    };

    let person5 = {
        name: "David",
        age: 30,
        city: "Madrid"
    };

    console.log(person4);
    console.log(person5);
    console.log(person4 == person5); // false, son objetos diferentes, no son el mismo objeto en memoria

        //* Si podriamos hacer lo siguiente
        console.log(person4.name === person5.name);
        

            

    //? ITERACIÓN 
        // 
        for(let key in person4) {
            console.log(key + ": " + person4[key])           
        }
    
    
    
    //? FUNCIONES COMO OBJETOS
        // Es como una clase o basicamente una plantilla de objeto 
        
        function Person(name, age){        //! MALA PRÁCTICA: debería ser con una clase 
            this.name = name;
            this.age = age;    
        }

        let alumna1 = new Person("María", 28)
        console.log(alumna1);
        console.log(alumna1.name);
        console.log(typeof Person);
        console.log(typeof person4);
        
        
        

    