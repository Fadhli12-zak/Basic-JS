// Import Variable
import { name, favoriteFood } from "./moduleExport.mjs";

console.log(name);
console.log(favoriteFood);

// Import Function
import { nama, food as Tastyfood, sayHalo } from "./moduleExport.mjs";

console.log(nama);
console.log(Tastyfood);
sayHalo(nama);

// jika menggunakan *
import * as user from "./moduleExport.mjs";

console.log(user.name);
console.log(user.favoriteFood);
user.sayHi(user.name);
