const isLeapYear = (n, m) => {
    const minNumber = Math.min(n, m);
    const maxNumber = Math.max(n, m);
    const leapYearsArray = [];

    for (let year = minNumber; year <= maxNumber; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYearsArray.push(year);
        }
    }

    console.log(leapYearsArray);
};

isLeapYear(1000, 2000);