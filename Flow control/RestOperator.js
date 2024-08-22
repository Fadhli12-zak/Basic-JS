// RestOp in function
console.log("- rest Operator in function");
function ManyArg(...Arg) {
  console.log(Arg);
}
ManyArg("Fadhli", "Muh", "Dzaki");

// the rest operator separate another parameter
console.log("- Separate another param");
function funcSp(num, ...arg) {
  console.log("no.", num);
  console.log("Many Arg", arg);
}
funcSp(1, "fadhli", true);

// rest operator with arrayLength
console.log("-  arrayLength");
const myFuncArr = (...manyMoreArgs) => {
  console.log(manyMoreArgs.length);
  console.log("Args", manyMoreArgs);
};

myFuncArr("Ikang", "Liam", "Jiro", "Noda");

// Rest Operator on Destructing array
console.log("- Rest Operator on Destructing array");
const Emam = [
  "Ayam Bakar",
  "Iga Bakar",
  "Gulai",
  "Sate Cicak",
  "Kerupuk",
  "Bakwan",
];
const [first, second, ...rest] = Emam;

console.log(first);
console.log(second);
console.log(last);
