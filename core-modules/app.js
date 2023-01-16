/**
 * Untuk menggunakan import pada js harus menggunakan perintah `npm init` pada terminal
 * Untuk mempercepat tanpa configurasi `npm init` bisa dengan `npm init -y`
 * Dan tambahkan "type": "module", pada package.json
 */

// =============================================================================================

// 1. menuliskan string ke file (synchronous)
// import * as fs from "fs";

// try {
//   fs.writeFileSync("test.txt", "Hello World secara Synchronous");
// } catch {
//   console.log(error);
// }

// 2. menuliskan string ke file (asynchronous)
// import { writeFile } from "fs";
// import { Buffer } from "buffer";

// const data = new Uint8Array(Buffer.from("Hello World secara Asynchronous"));
// writeFile("data/test.txt", data, (e) => {
//   console.log(e);
// });

// 3. membaca isi file (synchronous)
// import { readFileSync } from "fs";

// const data = readFileSync("test.txt", "utf-8");
// console.log(data);

// 4. membaca isi file (asynchronous)
// import { readFile } from "fs";

// readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// =============================================================================================

// 5. Readline=
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { readFileSync, writeFileSync } from "node:fs";

const rl = readline.createInterface({ input, output });

const nama = await rl.question("Masukkan nama anda : ");
const noHP = await rl.question("Masukkan no HP anda : ");

const contact = {
  nama,
  noHP,
};

let fileBuffer = readFileSync("data/contact.json", "utf-8");
const contacts = JSON.parse(fileBuffer);

contacts.push(contact);

writeFileSync("data/contact.json", JSON.stringify(contacts));
console.log(`Berhasil memasukkan data, data yang dimasukkan adalah ${nama} dan ${noHP}`);

rl.close();
