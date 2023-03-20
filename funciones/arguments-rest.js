"use strict";
(() => {
    //Argumentos restantes en una funcion ...variable
    const fullNamen = (firstName, ...datosRestantes) => {
        return `${firstName} ${datosRestantes.join(" ")}`;
    };
    const superman = fullNamen("Clark", "Josepth", "Kent", "Sergio", "Marquez");
    console.log({ superman });
})();
