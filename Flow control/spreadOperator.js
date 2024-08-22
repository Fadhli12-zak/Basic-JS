// Object
console.log("- Object");
const obj1 = { name: "Halo" };
const obj2 = { mid: "hai" };
const calObj = { ...obj1, ...obj2 };

console.log(calObj);

// copied Object
console.log("- copied Object");
const objC1 = { name: "fadhli", Age: "16" };
const objCopy = { ...objC1 };

console.log(objCopy);

// SOperator in array
console.log("- in array");
const arr1 = ["fadhli", "dzaki"];
const arr2 = ["18 tahun", "UNtel"];
const arrSpread = [...arr1, ...arr2];

console.log(arrSpread);
