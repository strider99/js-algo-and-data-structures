function journeyToMoon(n, astronaut) {
    console.log(n);
    console.log(astronaut);
    let randomPersonFromOneCountry = astronaut[0][0];
    let country1 = astronaut.filter(item => item.includes(randomPersonFromOneCountry));

    let country2 = astronaut.filter(i => country1.indexOf(i) === -1);
    // console.log('country1 ', country1)


    country1 = country1.reduce((acc, val) => acc.concat(val), []);
    country2 = country2.reduce((acc, val) => acc.concat(val), []);

    country1 = [...new Set(country1)]
    country2 = [...new Set(country2)]
    // console.log(country2);
    // console.log(country1);
    let flatttenedCountries = [...]
    return country1.length * country2.length;



}


console.log(journeyToMoon(4, [[0,2]]));