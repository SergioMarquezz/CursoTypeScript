"use strict";
(() => {
    const fullNamen = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const name = fullNamen("Sergio", "Marquez", true);
    console.log({ name });
})();
