function categorizeNumber(input) {
 

  if (typeof input !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  }

  if (input === 0) {
    return "Nol";
  }

  if (input < 0) {
    return "Negatif";
  }

  if (input % 2 === 0) {
    return "Genap";
  }

  // Check if input is a prime number
  if (isPrime(input)) {
    return "Prima";
  }

  return "Ganjil";
}

// Helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}


console.log(categorizeNumber(15)); 
console.log(categorizeNumber(12)); 
console.log(categorizeNumber(17)); 
console.log(categorizeNumber(0)); 
console.log(categorizeNumber(-5)); 

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message); 
