const randomArrayGeneratorTask03 = (numberOfItems, n, m, evenOdd) => {
    const totalArray = [];

    const minNumber = Math.min(n, m);
    const maxNumber = Math.max(n, m);

    for (let i = 0; i < numberOfItems; i++) {
        totalArray.push(Math.floor((Math.random() * (maxNumber - minNumber + 1)) + minNumber));
    }

    let randomArray = [];

    if (evenOdd === 'even') {
        randomArray = totalArray.filter(item => item % 2 === 0);
    } else if (evenOdd === 'odd') {
        randomArray = totalArray.filter(item => item % 2 !== 0);
    }

    console.log(randomArray);
};

randomArrayGeneratorTask03(5, 33, 76, 'even');
