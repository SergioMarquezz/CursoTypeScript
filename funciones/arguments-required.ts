(()=>{

    const fullNamen = (firstName:string, lastName:string):string =>{

        return `${firstName} ${lastName}`;
    }
    
    const name = fullNamen("Sergio", "Marquez");

    console.log({name});

})()