"use strict";
(() => {
    //? indica que un parametro puede ser opcional
    const fullNamen = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullNamen("Sergio");
    console.log({ name });
})();
