"use strict"

let numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

// for(let i = 0; i < 1; i++) {
//   if(numberOfSeries == null) {
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
//     i--
//   } else {
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
//     i++
//   }
// }

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false
}

for(let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan serialingiz?"),
    b = prompt('Nechi baxo berasiz?')

  if(a === null || a === "" || b === null || b === "") {
    i--
  } else {
    seriesDB.series[a] = b;
  }
}

if(numberOfSeries <= 5) {
  console.log("Kam serial ko’ripsiz");
} else if(numberOfSeries <= 10 ) {
  console.log("Siz classik tamoshabin ekansiz");
} else {
  console.log("Siz serialchi zvezda ekansiz");
}

console.log(seriesDB);

