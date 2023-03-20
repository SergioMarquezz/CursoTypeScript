"use strict";
(() => {
    const fullNamen = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullNamen("Sergio", "Marquez");
    console.log({ name });
})();
