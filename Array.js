// normal Array
const num = new Array(9);
console.log(num);

// array Form
const user = new Array("fadhli", "muhammad", "Dzaki");
const customer = Array.from(user);
console.log(customer);

// array literal
const array = ["fadhli", "asep", "adi", "rahmat", "jajang"];
// mabipulasi element array
array[3] = "zia";
console.log(array);
console.log(array[4]);

// manipulasi menggunakan push
array.push("gugun", "gunawan");
console.log(array);

// delete data and element from array
delete array[3]; // its only remove the data but not the element
array.splice(3, 1); // the other way like that can remove data and element also
console.log(array);

// remove data with 'pop and shift' but its didn't efficient cause pop only remove the last data and shift is only remove first data

array.pop();
console.log(array);
array.shift();
console.log(array);

// array destructing
const [man1, man2] = array;
console.log(man1, man2);

// array method
/*reverse*/
const array2 = ["math", "physic", "chemistry"];
array2.reverse();
console.log(array2); // output [chemistry, physic, math]

// sorting
const array3 = [1, 5, 4, 90, 3, 2];
array3.sort();
console.log(array3);
