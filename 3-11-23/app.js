// ESERCIZIO 1

const getTemperatureStatus = (degrees) => {
  if (degrees > 29 || 40 < degrees) {
    console.log("caldo");
  } else if (degrees > 19 || 29 < degrees) {
    console.log("mite");
  } else {
    console.log("freddo");
  }
};

getTemperatureStatus(19);
console.log('--------------------------------')

// ESERCIZIO 2

const person = {
  name: "Christian",
  surname: "Schillaci",
  eyes: "brown",
  hair: "curly",
  hobby: "videogames",
  sentence: function () {
    console.log(
      `Hello! I am ${this.name} ${this.surname}.
       My eyes are ${this.eyes} and I have ${this.hair} hair.
       My favourite hobby is playing ${this.hobby}.`
    );
  },
};

person.sentence();

console.log("--------------------------------");
// ESERCIZIO 3 AVANZATO

const favourites = [];
console.log('↓Array vuoto↓')
console.log(favourites)

const addFavourites = (add) => {
  favourites.push(add);
};

addFavourites("Baby Boss");
addFavourites("Scream");
addFavourites("The Beast");

const showFavourites = () => {
  console.log(favourites);
};

console.log("↓Array con elementi aggiunti↓");
showFavourites();

const removeFavourites = (remove) => {
  if (favourites.includes(remove)) {
    const foundIndex = favourites.indexOf(remove);
    favourites.splice(foundIndex, 1);
  } else {
    console.log("Couldn't find a title");
  }
};

removeFavourites("Scream");

console.log("↓Array con elementi rimossi↓");
showFavourites();

console.log("↓Stringa non trovato nell'array↓");
removeFavourites("The Shark");

// Rimozione elemento con il Metodo Array "Filter"

// const removeFavourites = (remove) => {
//   if (favourites.includes(remove)) {
//     // const filteredFavourites = favourites.filter((item) => item !== remove);
//     // console.log(filteredFavourites);
//   } else {
//     console.log("Couldn't find a title");
//   }
// };
