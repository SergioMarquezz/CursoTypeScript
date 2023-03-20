(()=>{

    
    //Argumentos restantes en una funcion ...variable
    const fullNamen = (firstName:string, ...datosRestantes:string[]):string =>{


            return `${firstName} ${datosRestantes.join(" ")}`;
    

    }
    
    const superman = fullNamen("Clark", "Josepth", "Kent", "Sergio", "Marquez");

    console.log({superman});

})()