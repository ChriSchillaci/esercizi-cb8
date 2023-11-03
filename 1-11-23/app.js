const animals = [
  "Tiger",
  "Lion",
  "Dog",
  "Cat",
  "Wolf",
  "Hawk",
  "Seagull",
  "Hedgehog",
];

console.log("CICLO FOR");

for (let i = 0; i < animals.length; i++) {
  console.log(i + 1 + ": " + animals[i]);
}
console.log("");
console.log("METODO ARRAY 'MAP'");

const animalsMap = animals.map((item, index) => {
  console.log(`${index + 1}: ${item}`);
});