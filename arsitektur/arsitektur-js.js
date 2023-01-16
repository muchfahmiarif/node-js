// Synchronous

const getUserSync = (id) => {
  const nama = id == 1 ? "Fahmi" : "Arif";
  return { id: id, nama: nama };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const Halo = "Hello World";
console.log(Halo);

// Asynchronous
const getUserAsync = (id, cb) => {
  const timer = id == 1 ? 4000 : 2000;
  setTimeout(() => {
    const nama = id == 1 ? "Fahmi Async" : "Arif Async";
    cb({ id: id, nama: nama });
  }, timer);
};

const userSatuAsync = getUserAsync(1, (hasil) => {
  console.log(hasil);
});

const userDuaAsync = getUserAsync(2, (hasil) => {
  console.log(hasil);
});

const userTigaAsync = "Hello World";
console.log(userTigaAsync);
