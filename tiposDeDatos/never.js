"use strict";
(() => {
    //El tipo de dato never indica que la función no debe termninar de manera exitosa
    const error = (mensaje) => {
        throw new Error(mensaje);
    };
    error("Se fuerza un error con función");
})();
