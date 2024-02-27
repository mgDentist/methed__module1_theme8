const randomArrayGeneratorTask03 = (numberOfItems, n, m, evenOdd) => {
    const totalArray = [];
    let randomArray = [];

    if (m > n) {
        for (let i = 0; i < numberOfItems; i++) {
            totalArray.push(Math.floor((Math.random() * (m - n + 1)) + n));
        }
    }

    if (m < n) {
        for (let i = 0; i < numberOfItems; i++) {
            totalArray.push(Math.floor((Math.random() * (n - m + 1)) + m));
        }
    }

    if (evenOdd === 'even') {
        randomArray = totalArray.filter(item => item % 2 === 0);
    } else if (evenOdd === 'odd') {
        randomArray = totalArray.filter(item => item % 2 !== 0);
    }

    console.log(randomArray);
    return randomArray;
};

randomArrayGeneratorTask03(5, 12, 57, 'even');
