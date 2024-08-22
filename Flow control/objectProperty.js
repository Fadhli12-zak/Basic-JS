// Make An Object
console.log("- Make An Object");
const user = {
  name: "dadang",
  lastname: "pedang",
  age: 14,
  "nick name": "akbar",
};
// change an object
user.name = "tatang";

// Object destructing
console.log("- Object destructing");
const { name, lastname } = user;
console.log(user["nick name"]);
console.log(name, lastname);

//delete an object
delete user["age"];
console.log(user);

