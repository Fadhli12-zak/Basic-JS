const employees = [
  {
    name: "Fulan",
    email: "fulan@dicoding.com",
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  /**

   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
  const add = [
    {
      a: employees.push({ name, email, joinYear }),
    },
  ];
  return add;
}

addEmployee("fadhli", "fadhli@gmail.com", 2022);
console.log(employees);
