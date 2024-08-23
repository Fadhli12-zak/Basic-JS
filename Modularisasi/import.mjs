// import { nama, namaTengah, namaAkhir } from "./eksport.mjs";

console.log(nama);
console.log(namaTengah);
console.log(namaAkhir);
// or
import * as variable from "./eksport.mjs";
console.log(variable.nama);
console.log(variable.namaTengah);
console.log(variable.namaAkhir);
// func
import initialFunc from "./eksport.mjs";
initialFunc();

// alias for more File
import { initialF as mainF } from "./eksport.mjs";
import { initialF as secondF } from "./anothermod.mjs";

mainF();
secondF();
