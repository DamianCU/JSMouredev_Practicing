
//TODO: DESESTRUCTURACIÓN

      //* ES UNA SINTÁXIS QUE NOS PERMITE EXTRAER VALORES DE ARRAYS POR UN LADO O DE OBJETOS Y ASIGNARLOS A VARIABLES DE MANERA CONCISA

      let myArray = [1, 2, 3, 4]

      let person = {
        name: "Damián",
        surname: "Carrillo",
        age: 35,
        email: "dcu191089@hotmail.es"
      }

      myArray.push(5); 
      //console.log(myArray);      

      let myValue = myArray[1]
      //console.log(myValue);

      //* Esto no es destructuring sino cómo asignamos variables por defecto sin más.


    //? DESESTRUCTURACIÓN 
          //* Es la capacidad de extraer valores y asignarlos a variables de manera concisa.
          //* Con una única definición vamos a ser capaces de crear varias variables y asignarlas a varios valores


      //* Sintáxis arrays
      console.log(myArray);
      
      let [myValue0, myValue1, myValue2, myValue3, myValue4, myValue5] = myArray

      console.log(myValue0);   //* Muestra el valor almacenado en cada uno de sus índices
      console.log(myValue1);
      console.log(myValue2);
      console.log(myValue3);
      console.log(myValue4);
      console.log(myValue5);   //TODO Aquí muestra UNDEFINED ya que no existe un índice 5


      //? Sintáxis arrays con valores predeterminados

      let [myValue6, myValue7, myValue8, myValue9=0] = myArray
      
      console.log("Sintáxis arrays con valores predeterminados");
      console.log(myValue6);
      console.log(myValue7);
      console.log(myValue8);
      console.log(myValue9);


      //? IGNORAR elementos array

      let [, myValue10, , , myValue13] = myArray
      
      console.log("Ignorar elementos array");
      console.log(myValue10);
      console.log(myValue13);

      