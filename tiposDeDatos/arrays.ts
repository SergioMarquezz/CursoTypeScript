(()=>{

    //const numbers: (string | number | boolean)[] = [1,2,3,4,5,6,7,8,9,10,'Sergio'];
    const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];

    numbers.push(27);
    //numbers.push(true);
    console.log(numbers);

    const heroes = ['Superman','Batman','Capitan America','Thor'];
    heroes.forEach(h => console.log(h.toUpperCase()));

})()