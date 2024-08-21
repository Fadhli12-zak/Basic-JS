// store value
console.log("- store value");
const setAn = new Set();
setAn.add(1);
setAn.add(true);
setAn.add("Benar");
setAn.add(false);
console.log(setAn);

// acces value on set with looping method
console.log("- Acces Value with loop");
const setLoop = new Set();
setLoop.add("abi");
setLoop.add("Umi");

for (const num of setLoop) {
  console.log(num);
}
// with keyword foreach
console.log("- Acces value with foreach");
const setEach = new Set();
setEach.add(1);
setEach.add(2);

setEach.forEach((value) => console.log(value));

// delete value on set
console.log("- delete value on set");
const setDel = new Set();
setDel.add("Fadhli");
setDel.add("Muhammad");
setDel.add("Dzaki");

setDel.delete("Dzaki");
console.log(setDel);
for (num of setDel) {
  console.log(num);
}
