const randomArrayGeneratorTask02 = (numberOfItems, n, m) => {
    const randomArray = [];

    const minNumber = Math.min(n, m);
    const maxNumber = Math.max(n, m);

    for (let i = 0; i < numberOfItems; i++) {
        randomArray.push(Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber));
    }

    console.log(randomArray);
};

randomArrayGeneratorTask02(5, 33, 76);
