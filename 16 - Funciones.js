//! FUNCIONES

    //* SIMPLE
    function myFunction() {
        console.log("Hola, función!");        
    }    

    for(i=0; i<5; i++) {
        myFunction();
    }



    //* CON PARÁMETROS
    function myFuncParams(name, surname) {
        console.log(`Hola, ${name} ${surname}`)
    }
    myFuncParams("Damián", "Carrillo")



    //* FUNCIONES ANÓNIMAS
    const nombreParaPoderLlamarFuncion = function(city, country){
        console.log(`From: ${city}, ${country}.`);        
    }

    nombreParaPoderLlamarFuncion("Granada", "Spain");



    //* ARROW functions

    const arrowFunction= (name) => {
        console.log(`¡Buenas tardes, ${name}!`);        
    }

    const arrowFuncAbr = (name) => console.log(`¿Has visto que función más corta, ${name}?`);
    
    arrowFunction("Damián");
    arrowFuncAbr("Damián");



    //* PARÁMETROS

    function sum(a, b){
        console.log(a + b);
    }

    sum(5, 10);      //* --> 15
    sum(15);         //TODO --> Da NaN al no aportar los DOS PARÉMETROS
    sum();           //TODO --> NaN también

    
    
    //* PARÁMETROS POR DEFECTO
        // Para evitar lo del NaN asignamos un valor por defecto a los parámetros
            function sum(a=0, b=0){
                console.log(a + b);
            }

            sum(20)
            sum(20,5)

    
    //* RETORNO DE VALORES
            //El retorno de una función en JavaScript es el valor que la función envía de vuelta al lugar donde fue llamada, utilizando la palabra clave return. Una vez que se ejecuta return, la función termina su ejecución.
        
        function sumaDosNumeros(a, b){
            return a + b;
        }

        console.log(sumaDosNumeros(56, 70));    //*--> 126

    


    //* funciones ANIDADAS
    function externaFunc(){
        console.log("Función EXTERNA");        
        function internaFunc(){
            console.log("Función INTERNA");            
        }
    }

    externaFunc();
    //internaFunc();   //TODO --> No podemos acceder de este modo a la función interna porque no está en el scope

    //Podría accederse a la función interna del siguiente modo
    function externaOK(){
        console.log("externa ok");
        function internaOK(){
            console.log("interna ok");            
        }
        internaOK();        
    }
    
    externaOK();

    
