class CoffeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.temperature = 90;
  }

  makeCoffe() {
    console.log("Membuat kopi dengan suhu", this.temperature);
  }
}

const coffee = new CoffeMachine(100);
coffee.temperature = 60;

coffee.makeCoffe(); // Output: Membuat kopi dengan suhu 60

// jika menggunakan method set dan get untuk mengembalikan ke nilai awal
class CoffeeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this._temperature = 90;
  }

  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }
  // penggunaan underscore( _ ) pada temperature menandakan bahwa nilai tidak dapat diubah tapi tidak benar2 dapat diubah(hanya "code convention")
  get temperature() {
    return this._temperature;
  }
}

const coffee = new CoffeeMachine(10);
console.log("Sebelum diubah: ", coffee.temperature);
coffee.temperature = 100;
console.log("Setelah diubah: ", coffee.temperature);

// code di bawah adalah untuk memastikan bahwa code memang benar2 tidak dpt diubah
class CoffeeMachine {
  #temperature = 90;

  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}
