// making a map
const lessonTimeTable = new Map([
  ["math", 10.0],
  ["Natural science", 8.0],
  ["chemist", 3.0],
]);

console.log(lessonTimeTable);

// acces value on map
const map = new Map();
map.set("name", "fadhli");
console.log(map.get("name"));
console.log(map.has("name"))
// deleting value on a map
const map2 = new Map();
map2.set("name", "ikbal");
map2.set("middle name", "rama");
map2.set("last name", "dhani");
map2.delete("middle name");
console.log(map2);


