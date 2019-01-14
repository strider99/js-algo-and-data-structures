var arr = [
  {
    country: "IN",
    medals: "Gold",
    game: "Hockey"
  },
    {
    country: "UK",
    medals: "Gold",
    game: "Swimming"
  },
    {
    country: "IN",
    medals: "Bronze",
    game: "Running"
  },
  {
    country: "US",
    medals: "Gold",
    game: "Javelin"
  },
  {
    country: "US",
    medals: "Bronze",
    game: "Cricket"
  },
  {
    country: "IN",
    medals: "Silver",
    game: "Hockey"
  }

];

var res = arr.reduce((result, element) => {
  if(!(element.country in result)){
    result[element.country] = 0
  }
  result[element.country]++;
  return result;
}, {});

// var countries = arr.map(ele => ele.country);

// var res = {};

// countries.forEach(country => {
//   if(!res[country]){
//     res[country] = 0;
//   }
//   res[country] = res[country] + 1;
// })

console.log(res);