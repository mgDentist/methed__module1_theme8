const randomArrayGenerator = (numberOfItems) => {
    const randomArray = [];

    for (let i = 0; i < numberOfItems; i++) {
        randomArray.push(Math.floor((Math.random()) * 100) + 1);
    }

    console.log(randomArray);
    return randomArray;
};

randomArrayGenerator(5);