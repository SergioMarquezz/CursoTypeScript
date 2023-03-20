"use strict";
(() => {
    let AudioLeven;
    (function (AudioLeven) {
        AudioLeven[AudioLeven["min"] = 5] = "min";
        AudioLeven[AudioLeven["medium"] = 6] = "medium";
        AudioLeven[AudioLeven["medium2"] = 7] = "medium2";
        AudioLeven[AudioLeven["max"] = 100] = "max";
    })(AudioLeven || (AudioLeven = {}));
    const currentAudio = AudioLeven.medium;
    console.log(currentAudio);
    console.log(AudioLeven);
})();
