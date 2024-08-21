// for loop
console.log("- for loop");
for (let i = 1; i < 10; i++) {
  console.log("Halo dunia");
}

// for in
console.log("- for in");
const person = { name: "Fulan", origin: "Bandung", birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}
// for of
console.log("- for of");
const names = ["Bebek", "Ayam", "Telor", "Tempe"];

for (const item of names) {
  console.log(item);
}

// while loop
console.log("- While loop");
let i = 0;
n = 10;
while (i < n) {
  result = i + 1;
  console.log(`angka ke-${i} adalah ${result + 1}`);
  i++;
}

// do while
let a = 0;
console.log("- Do While");
do {
  console.log("Halo");
  a++;
} while (a < 10);

// control StatementRule
console.log("control statement");
for (let b = 0; b < 10; b++) {
  let c = b + 1;
  let result = c + 1;
  if (b === 9) {
    break;
  } else if (b === 3) {
    continue;
  }
  console.log(`nilai b adalah ${result} dan nilai a adalah ${b}`);
}


