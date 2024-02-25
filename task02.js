const randomArrayGeneratorTask02 = (numberOfItems, n, m) => {
    const randomArray = [];

    if (m > n) {
        for (let i = 0; i < numberOfItems; i++) {
            randomArray.push(Math.floor((Math.random() * (m - n + 1)) + n));
        }
    } else if (m < n) {
        for (let i = 0; i < numberOfItems; i++) {
            randomArray.push(Math.floor((Math.random() * (n - m + 1)) + m));
        }
    }

    console.log(randomArray);
    return randomArray;
};

randomArrayGeneratorTask02(5, 33, 76);
randomArrayGeneratorTask02(5, -10, 10);
