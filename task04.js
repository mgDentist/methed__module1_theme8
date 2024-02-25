const isLeapYear = (n, m) => {
    const leapYearsArray = [];

    if (m > n) {
        for (let year = n; year <= m; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                leapYearsArray.push(year);
            }
        }
    } else if (m < n) {
        for (let year = m; year <= n; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                leapYearsArray.push(year);
            }
        }
    }

    console.log(leapYearsArray);
    return leapYearsArray;
};

isLeapYear(1000, 2000);