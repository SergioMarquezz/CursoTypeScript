(()=>{

    const hero: string = "Sergio";

    function returnName():string {

        return hero;
    }

    const senal = ():string => {

        return "Señal batman";
    }

    console.log(senal() + returnName());

})()