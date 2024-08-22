// if else
const getDay = new Date().getDay();
if (getDay === 0) {
  console.log("Today is Sunday");
} else if (getDay === 1) {
  console.log("Today is Monday");
} else if (getDay === 2) {
  console.log("Today is Tuesday");
} else if (getDay === 3) {
  console.log("Today is Wednesday");
} else if (getDay === 4) {
  console.log("Today is Thursday");
} else if (getDay === 5) {
  console.log("Today is Friday");
} else if (getDay === 6) {
  console.log("Today is Saturday");
} else {
  console.log("There no day in this planet ");
}

// switch case
switch (getDay) {
  case 0:
    console.log("MINGGU");
    break;
  case 1:
    console.log("SENIN");
    break;
  case 2:
    console.log("SELASA");
    break;
  case 3:
    console.log("RABU");
    break;
  case 4:
    console.log("KAMIS");
    break;
  case 5:
    console.log("JUMAT");
    break;
  case 6:
    console.log("SABTU");
  default:
    console.log("SEMOGA HARIMU SENIN TERUS");
}
