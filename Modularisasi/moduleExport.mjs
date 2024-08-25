// export variabel
export const name = "Jhon";

// export Array
export const favoriteFood = ["pizza", "pasta", "sushi"];

// export function
export function sayHi(n) {
  console.log(`Hi, ${name}!`);
}

// tanpa kata kunci export di variabel

const food = ["pizza", "pasta", "sushi"];
const nama = "Arthur";
function sayHalo(i) {
  console.log(`Hi, ${nama}!`);
}
export { nama, food, sayHalo };
