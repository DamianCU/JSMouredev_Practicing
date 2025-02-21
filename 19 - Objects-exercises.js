//? 1. Crea un objeto con 3 propiedades

    const object1 = {
        name: "John",
        age: 30,
        city: "New York"
    }


//? 2. Accede y muestra su valor
    console.log(object1);


//? 3. Agrega una nueva propiedad

    object1.job = "developer";
    console.log(object1); 


//? 4. Elimina una de las 3 primeras propiedades

    delete object1.city;
    console.log(object1);


//? 5. Agrega una función e invócala

    object1.more = new function(){
        this.skills = ["javascript", "java"];
        this.hobbies = ["reading", "painting"];
    }
    console.log(object1);


//? 6. Itera las propiedades del objeto

    for(let iobject1 in object1){
        console.log(iobject1);
    }


//? 7. Crea un objeto anidado

    let object2 = {
        name: "Jane",
        age: 25,
        city: "London",
        object2B: {
            job: "Engineer",
            age: 28
        }
    }

    console.log(object2);
    

//? 8. Accede y muestra el valor de las propiedades anidadas

    console.log(object2.object2B);
    

//? 9. Comprueba si los dos objetos creados son iguales

    console.log(object1 == object2);  //* False
    

//? 10. Comprueba si dos propiedades diferentes son iguales

    console.log(object1.name == object2.name);  //* False
    