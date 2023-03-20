(()=>{

    //? indica que un parametro puede ser opcional
    const fullNamen = (firstName:string, lastName?:string):string =>{

        return `${firstName} ${lastName}`;
    }
    
    const name = fullNamen("Sergio");

    console.log({name});

})()